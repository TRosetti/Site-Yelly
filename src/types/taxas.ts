export type TipoPlano = 'max' | 'basic' | 'economic' ;

export interface TaxasPorPlano{
    max?: number[];
    basic?: number[];
    economic?: number[];
}

export interface TaxasPorBandeira{
    [bandeira: string]: TaxasPorPlano;
}