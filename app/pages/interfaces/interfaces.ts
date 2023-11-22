//gets?
export interface User{
    id?:number;
    username: string;
    email: string;
    password: string;
    conductor: boolean;
    esperando?: boolean;
}
//Post (sin id)
export interface Users{
    username: string;
    email: string;
    password: string;
    conductor: boolean;
    esperando?: boolean;
}
export interface Viaje{
    id?: string;
    estado: string;
    hora: string;
    patente: string;
    destino: {
        lat: number;
        lng:number;
        direccion: string;
    };
    pasajeros?: number[];
    conductor:number;
    valorViaje: number;
    cantidadPasajeros:number;
}