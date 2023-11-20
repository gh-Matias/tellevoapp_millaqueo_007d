
export interface IAnimalitos{
    id:Number;
    nombre:String;
    tipoMascota: String;
    raza: String;

}


export interface IAnimalito{
    nombre:String;
    tipoMascota: String;
    raza: String;
}

//get, put, delete
export interface Users{
    id:number;
    username: string;
    password: string;
    role: string;
    isactive: boolean
}
//post
export interface User{
    username: string;
    password: string;
    role: string;
    isactive: boolean
}



//get, put, delete
export interface IPalabras{
    id:number;
    username: string;
    palabra: string;
}

//post
export interface IPalabra{
    username: string;
    palabra: string;
}