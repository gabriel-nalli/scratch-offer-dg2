const ProposalFooter = () => {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <p className="text-foreground font-medium text-sm">
          Esta proposta tem validade de 7 dias.
        </p>
        <p className="text-xl font-semibold gradient-gold-text">
          Dg2.ai — Resultados que aparecem.
        </p>
        <p className="text-muted-foreground text-sm">
          📧 contato@dg2.ai &nbsp;|&nbsp; 📱 (00) 00000-0000
        </p>
      </div>
    </footer>
  );
};

export default ProposalFooter;
