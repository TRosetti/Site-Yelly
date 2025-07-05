import { Header } from "@/components/Header"
import { Tarja } from "@/components/Tarja";
import { Hero } from "@/components/Hero";
import { Bandeiras } from "@/components/Bandeiras";
import { Beneficios } from "@/components/Beneficios";
import { Rotulos } from "@/components/Rotulos"

export default function Home() {
  return (
    <div>
      <Tarja />
      <Header />
      <Hero 
        highlight="Faça parte da revolução"
        title={
          <>
            A <strong>melhor maquininha</strong><br />
            na palma da sua mão
          </>
        }
        paragraph={
          <>
          Temos a maquininha perfeita para você aumentar seus lucros!
          Parcele em até 18x com as melhores taxas do mercado! 🔥
          </>
        }

        cta={
          <>
            Aproveite até 70% de desconto!  {/* pode ser que entre uma classe aqui para alterar a porcentagem automaticamente */}
          </>
        }


        linkCta="#"
        linkImg="https://yelly.com.br/wp-content/uploads/2024/12/INDY-2025.png"
        altImg="A melhor maquininha"
      />
      <Bandeiras />
      <Beneficios /> 
      <Rotulos />
      <Tarja />
    </div>
  );
}
