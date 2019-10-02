import { Perfil } from './perfil';
import { Menu } from './menu';

export interface User {
    UsuarioID: number;
    Rut: number;
    Dv: string;
    PrimerNombre: string;
    Nombres: string;
    Apellidos: string;
    Email: string;
    Perfil: Perfil;
    Menus: Menu[];
}
