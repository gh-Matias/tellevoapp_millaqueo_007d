export interface Users{
    id:number;
    username: string;
    correo: string;
    password: string;
    role: string;
    isactive: boolean;
}
export interface Movil{
    tipo: string;
    matricula: string;
    capacidad: number;
}