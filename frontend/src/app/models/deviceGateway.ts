export class DeviceGateway{

    constructor(
        public tipo: string,
        public id: string,
        public numero_serie: string,
        public marca: string,
        public modelo: string,
        public ip: string,
        public puerto: number
        
    ){}
}