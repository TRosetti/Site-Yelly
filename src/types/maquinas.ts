import { TipoPlano } from "./taxas";

export interface Maquina {
    name: string;
    desc: string[] | string;
    imageUrl: string;
    items: string[];
    oldPrice: number;
    newPrice: number;
    installmentPrice: number;
    discount: number;
    button: string;
}

export type MaquininhaPorPlano = {
    [plano in TipoPlano ]: {
        [modelo: string]: Maquina;
    }
}