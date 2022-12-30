import axios from 'axios';



export class PokeApiAdapter {

    private readonly axios = axios;

    async get( url: string ) {
        const { data } = await this.axios.get(url);
        console.log('con axios');
        return data;
    }

    async post( url: string, data: any ) {
        
    }
    async patch( url: string, data: any ) {

    }
    async delete( url: string ) {

    }
    


}