import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { fileFiler } from './helpers/fileFilter.helper';


@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) { }

  @Post('product')
  @UseInterceptors( FileInterceptor('file', {
    fileFilter: fileFiler
  }) )
  uploadProductImage(
    @UploadedFile() file: Express.Multer.File
  ) {

    if( !file ) throw new BadRequestException('Make sure that file is an image');
    
    return {
      fileName: file.originalname
    };
  }

}
