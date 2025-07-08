import { useEffect, useState } from "react";
import { fetchTaxas } from "@/services/taxas";
import { TaxasPorBandeira } from "@/types/taxas";

export function useTaxas(){
    const [taxas, setTaxas] = useState<TaxasPorBandeira | null>(null);
    const [parcelas, setParcelas] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTaxas().then((res) =>{
            setTaxas(res.data);
            setParcelas(res.parcelas);
        }).finally(() => setLoading(false))
    }, []);
    
    return{ taxas, parcelas, loading}
}