import { Megaphone, Scissors } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const accounts = [
  {
    icon: Megaphone,
    title: "Agência de Marketing",
    description:
      "Perfil Instagram da agência de marketing do Mario, voltado para engajamento e crescimento de perfil. Estratégia de mídia paga para ampliar alcance e atrair novos clientes.",
  },
  {
    icon: Scissors,
    title: "Marrom Chic Studio",
    description:
      "Perfil de salão de beleza especializado em extensões e apliques. Público segmentado e local específico — requer estratégia de anúncios direcionada com precisão geográfica e demográfica.",
  },
];

const ManagedAccounts = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <h3 className="text-sm uppercase tracking-[0.2em] text-foreground font-semibold mb-2 text-center">
          Contas Gerenciadas
        </h3>
        <p className="text-muted-foreground text-center mb-12">
          Duas contas estratégicas sob nossa gestão
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {accounts.map((account) => (
            <div
              key={account.title}
              className="card-neon-border group hover:glow-gold transition-shadow duration-500"
            >
              <div className="card-neon-content rounded-xl p-8 bg-[#020617]/40 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-6">
                  <account.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {account.title}
                </h4>
                <p className="text-secondary-foreground leading-relaxed">
                  {account.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagedAccounts;
