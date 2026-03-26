import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  "Gestão completa de anúncios pagos (Meta Ads) para as duas contas",
  "Segmentação avançada de público e localização definidos pelo cliente",
  "Criação e otimização de campanhas mensais",
  "Copy e roteiros prontos para criativos em vídeo e estáticos (quando necessário)",
  "Relatório mensal de performance das campanhas",
  "Reunião mensal de alinhamento estratégico",
];

const Deliverables = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-sm uppercase tracking-[0.2em] text-foreground font-semibold mb-2 text-center">
          Entregáveis
        </h3>
        <p className="text-muted-foreground text-center mb-12">
          Tudo o que está incluso na nossa gestão
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="gradient-card rounded-xl p-6 border-gradient-gold flex items-start gap-4"
            >
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-secondary-foreground leading-relaxed text-sm">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
