import { useScrollReveal } from "@/hooks/useScrollReveal";
import ScratchCard from "./ScratchCard";
import { Button } from "@/components/ui/button";

const InvestmentSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2">
          Investimento
        </h3>
        <p className="text-muted-foreground mb-12 text-lg">
          Raspe para revelar sua condição exclusiva 👇
        </p>

        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          {/* Plano Mensal */}
          <div className="gradient-card rounded-xl border-gradient-gold w-full max-w-[340px] h-full flex flex-col">
            <ScratchCard>
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
                  Plano Mensal
                </p>
                <p className="text-4xl font-bold text-foreground mb-2">
                  R$ 2.450
                  <span className="text-lg text-muted-foreground font-normal">/mês</span>
                </p>
                <div className="space-y-2 my-6 text-sm text-secondary-foreground">
                  <p>Contrato de 3 meses</p>
                  <p className="text-muted-foreground">Total de <span className="text-foreground font-semibold">R$ 7.350</span> no período</p>
                </div>
                <Button 
                  variant="gold" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open("https://wa.me/5519983046552?text=Olá! Tenho interesse no Plano Mensal da oferta.", "_blank")}
                >
                  Quero esse plano
                </Button>
              </div>
            </ScratchCard>
          </div>

          {/* Plano À Vista */}
          <div className="gradient-card rounded-xl border-gradient-gold w-full max-w-[340px] relative h-full flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
              <span className="gradient-gold text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                MELHOR OFERTA
              </span>
            </div>
            <ScratchCard>
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
                  Plano À Vista
                </p>
                <p className="text-4xl font-bold text-foreground mb-2">
                  R$ 5.750
                </p>
                <div className="space-y-2 my-6 text-sm text-secondary-foreground">
                  <p>Cobre os 3 meses completos</p>
                  <p className="text-primary font-semibold">
                    Economia de R$ 1.600
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Aceita parcelamento no cartão de crédito
                  </p>
                </div>
                <Button 
                  variant="gold" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open("https://wa.me/5519983046552?text=Olá! Tenho interesse no Plano À Vista da oferta.", "_blank")}
                >
                  Quero pagar à vista
                </Button>
              </div>
            </ScratchCard>
          </div>
        </div>
      </div>
    </section>);

};

export default InvestmentSection;