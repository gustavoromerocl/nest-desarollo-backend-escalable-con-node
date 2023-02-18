import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { DataSource, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductImage } from './entities';
import { validate as isUUID } from 'uuid';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('ProductsService');

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,

    private readonly dataSource: DataSource,
  ) { }

  async create(createProductDto: CreateProductDto) {
    //Rest operator
    const { images = [], ...productProps} = createProductDto
    try {
      const product = this.productRepository.create({
        //Spread operator
        ...productProps,
        images: images.map( image => this.productImageRepository.create({url: image}))
      });
      console.log('product', product)
      await this.productRepository.save(product);
      
      return {...product, images};
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const products = await this.productRepository.find({
      take: limit,
      skip: offset,
      relations: {
        images: true
      }
    });

    return products.map(({images, ...rest}) => ({
      ...rest,
      images: images.map( img => img.url )
    }))
  }

  async findOne(term: string) {
    let product: Product;
    if (isUUID(term)) {
      product = await this.productRepository.findOneBy({ id: term });
    } else {
      const queryBuilder = this.productRepository.createQueryBuilder('prod'); //prod es un alias
      product = await queryBuilder
        .where(`UPPER(title) = :title or slug = :slug`, {
          title: term.toUpperCase(),
          slug: term.toLocaleLowerCase(),
        })
        .leftJoinAndSelect('prod.images', 'prodImages') //El segundo argumento es un alias para la tabal de la relación
        .getOne();
    }

    if (!product)
      throw new NotFoundException(`Product with id ${term} not found`);

    return product;
  }


  //Generamos un nuevo método para palnar las imágenes ya que al modificar el retorno el findOne rompe su funcionaliddad en otro métodos de la clase
  async findOnePlane(term: string) {
    const { images = [], ...rest } = await this.findOne( term );
    return {
      ...rest,
      images: images.map(img=> img.url)
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {

    const {images, ...toUpdate} = updateProductDto;//rest

    const product = await this.productRepository.preload({
      id,
      ...toUpdate,//spread
    });

    if (!product)
      throw new NotFoundException(`Product with id: ${id} not found`);

    // Create query Runner 
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      await this.productRepository.save( product );
      return product;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const product = await this.findOne(id);

    await this.productRepository.remove(product);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505')
      throw new BadRequestException(error.detail)

    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
