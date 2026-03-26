import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProposalIntro = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-6">
          Sobre a Proposta
        </h3>
        <p className="text-lg md:text-xl leading-relaxed text-secondary-foreground">
          A <span className="text-primary font-semibold">Dg2.ai</span> desenvolveu esta proposta para gerenciar os anúncios pagos de duas contas estratégicas, com foco em{" "}
          <span className="text-foreground font-medium">segmentação precisa de público e localização</span>, maximizando resultados dentro do orçamento disponível.
        </p>
      </div>
    </section>
  );
};

export default ProposalIntro;
