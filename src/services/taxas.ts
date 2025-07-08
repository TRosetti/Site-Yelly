import { TaxasPorBandeira } from "@/types/taxas";


export async function fetchTaxas(): Promise<{data: TaxasPorBandeira, parcelas: string[]}> {
    const response = await fetch("https://yelly.com.br/wp-json/tabela/v1/taxas");
    if(!response.ok){
        throw new Error(`Erro na API: ${response.statusText}`);
    }

    const data = await response.json();

    const parcelas = [
        "Débito",
        "Crédito à vista",
        ...Array.from({ length: 17 }, (_, i) => `${i + 2}x`),
        "Pix",
    ];

    return {
        data: data as TaxasPorBandeira,
        parcelas
    }
}