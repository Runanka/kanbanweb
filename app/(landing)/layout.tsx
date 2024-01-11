import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen bg-slate-100 items-center">
      <Navbar />
      <main className="pt-10 md:pb-40 bg-slate-100 ">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
