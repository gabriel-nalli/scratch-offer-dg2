const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-gold-text">
            Dg2.ai
          </h2>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Proposta Comercial —{" "}
          <span className="gradient-gold-text">Gestão de Tráfego Pago</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          Elaborada exclusivamente para <span className="text-foreground font-semibold">Mario</span>
        </p>

        <p className="text-sm text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          Março de 2026
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
