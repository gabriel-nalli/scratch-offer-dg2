import { useScrollReveal } from "@/hooks/useScrollReveal";
import ScratchCard from "./ScratchCard";

const cardBgImage = `
  radial-gradient(at 88% 40%, hsla(210, 30%, 8%, 1) 0px, transparent 85%),
  radial-gradient(at 49% 30%, hsla(210, 30%, 8%, 1) 0px, transparent 85%),
  radial-gradient(at 14% 26%, hsla(210, 30%, 8%, 1) 0px, transparent 85%),
  radial-gradient(at 0% 64%,  hsla(190, 100%, 40%, 1) 0px, transparent 85%),
  radial-gradient(at 41% 94%, hsla(200, 100%, 85%, 1) 0px, transparent 85%),
  radial-gradient(at 100% 99%, hsla(185, 100%, 55%, 1) 0px, transparent 85%)
`.trim();

const CheckIcon = () => (
  <div className="w-4 h-4 rounded-full bg-cyan-300 flex items-center justify-center mt-0.5 shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#050a10" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  </div>
);

const AuraButton = ({ text, hoverText, onClick }: { text: string; hoverText: string; onClick: () => void }) => (
  <button
    className="aura-button group isolate inline-flex items-center w-full h-[52px] cursor-pointer overflow-hidden rounded-[20px] relative bg-[#A9DDF7]"
    onClick={onClick}
  >
    {/* Shimmer Aura */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
      <div className="shimmer-container">
        <div className="shimmer-gradient"></div>
      </div>
    </div>

    {/* Onda Animada */}
    <div className="shimmer-onda"></div>

    {/* Border beam */}
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <div style={{
        position: "absolute", width: "150%", height: "150%",
        background: "linear-gradient(90deg, transparent, #ffffff, transparent)",
        animation: "borderBeamRotation var(--speed) infinite linear",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)"
      }} />
    </div>

    {/* Fundo principal */}
    <div className="absolute inset-[1.5px] bg-gradient-to-b from-[#BEE9FF] via-[#A9DDF7] to-[#9CD4F0] rounded-[18px]" style={{ zIndex: 1 }} />

    {/* Glow Inferior */}
    <div className="bottom-glow" />

    {/* Hover white state */}
    <div className="fundo-white" />

    {/* Ícone Móvel */}
    <div className="wrapper-icones">
      <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:hidden" />
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden group-hover:block w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>

    {/* Textos */}
    <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
      <span className="texto-principal whitespace-nowrap tracking-wide">{text}</span>
      <span className="texto-hover whitespace-nowrap">{hoverText}</span>
    </div>
  </button>
);

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

          {/* ── Plano Mensal ── */}
          <div
            className="relative w-full max-w-[340px] rounded-xl"
            style={{
              backgroundColor: "hsla(210, 30%, 8%, 1)",
              backgroundImage: cardBgImage,
              boxShadow: "0px -16px 24px 0px rgba(180, 230, 255, 0.15) inset",
            }}
          >
            <div className="border-animation-container">
              <div className="rotating-border" />
            </div>

            <ScratchCard>
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl border border-blue-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-300">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-medium tracking-tight text-white">Plano Mensal</h3>
                    <p className="text-[10px] uppercase tracking-wider text-cyan-400/80 font-bold">Gestão de Tráfego</p>
                  </div>
                </div>

                {/* Preço */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-medium text-blue-200/60 mr-1">R$</span>
                    <span className="text-4xl font-semibold tracking-tight text-white">2.450</span>
                    <span className="text-sm text-blue-200/60 ml-1">/mês</span>
                  </div>
                  <p className="text-xs text-blue-300/50 mt-1">Contrato de 3 meses · Total R$ 7.350</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-sm text-blue-50/90 mb-8 text-left">
                  <li className="flex items-start gap-3"><CheckIcon />Gestão completa Meta Ads (2 contas)</li>
                  <li className="flex items-start gap-3"><CheckIcon />Relatório mensal de performance</li>
                  <li className="flex items-start gap-3"><CheckIcon />Reunião mensal de alinhamento</li>
                </ul>

                {/* Botão */}
                <AuraButton
                  text="Quero esse plano"
                  hoverText="Vamos começar!"
                  onClick={() => window.open("https://wa.me/5519983046552?text=Olá! Tenho interesse no Plano Mensal da oferta.", "_blank")}
                />
              </div>
            </ScratchCard>
          </div>

          {/* ── Plano À Vista ── */}
          <div
            className="relative w-full max-w-[340px] rounded-xl"
            style={{
              backgroundColor: "hsla(210, 30%, 8%, 1)",
              backgroundImage: cardBgImage,
              boxShadow: "0px -16px 24px 0px rgba(180, 230, 255, 0.15) inset",
            }}
          >
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
              <span className="gradient-gold text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                MELHOR OFERTA
              </span>
            </div>

            <div className="border-animation-container">
              <div className="rotating-border" />
            </div>

            <ScratchCard>
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl border border-blue-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-300">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-medium tracking-tight text-white">Plano À Vista</h3>
                    <p className="text-[10px] uppercase tracking-wider text-cyan-400/80 font-bold">Melhor Custo-Benefício</p>
                  </div>
                </div>

                {/* Preço */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-medium text-blue-200/60 mr-1">R$</span>
                    <span className="text-4xl font-semibold tracking-tight text-white">5.750</span>
                    <span className="text-sm text-blue-200/60 ml-1">total</span>
                  </div>
                  <p className="text-xs text-blue-300/50 mt-1">Cobre os 3 meses completos</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-sm text-blue-50/90 mb-8 text-left">
                  <li className="flex items-start gap-3"><CheckIcon />Tudo do Plano Mensal incluso</li>
                  <li className="flex items-start gap-3"><CheckIcon />Economia de R$ 1.600 vs mensal</li>
                  <li className="flex items-start gap-3"><CheckIcon />Parcelamento no cartão disponível</li>
                </ul>

                {/* Botão */}
                <AuraButton
                  text="Pagar à vista"
                  hoverText="Vamos começar!"
                  onClick={() => window.open("https://wa.me/5519983046552?text=Olá! Tenho interesse no Plano À Vista da oferta.", "_blank")}
                />
              </div>
            </ScratchCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;