export interface Depoimentos{
    name: string,
    insta: string,
    depoimento: string,
    imgUrl: string,
    alt: string,

}

export type TipoDepoimentos = {
    [depoimentos: string]: {
        [modelo: string]: Depoimentos
    }
}