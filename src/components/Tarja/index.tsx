"use client"
import styles from "./tarja.module.css";
import { useTaxas } from "@/hooks/useTaxas";


export function Tarja(){
    const { taxas, loading } = useTaxas()

    return(
        <div className={styles.marquee}>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            <span>🔥&nbsp; &nbsp; &nbsp;  DÉBITO À PARTIR DE {loading ? "1,39%" : taxas?.master?.max?.[0].toFixed(2).replace(".", ",") + "%"} | CRÉDITO À PARTIR DE {loading ? "2,91%" : taxas?.master?.max?.[1].toFixed(2).replace(".", ",") + "%"} </span>
            
            
           
    </div>

    )
}