import HeroSection from "@/components/HeroSection";
import ProposalIntro from "@/components/ProposalIntro";
import ManagedAccounts from "@/components/ManagedAccounts";
import Deliverables from "@/components/Deliverables";
import InvestmentSection from "@/components/InvestmentSection";
import ProposalFooter from "@/components/ProposalFooter";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <HeroSection />
      <ProposalIntro />
      <ManagedAccounts />
      <Deliverables />
      <InvestmentSection />
      <ProposalFooter />
    </main>
  );
};

export default Index;
