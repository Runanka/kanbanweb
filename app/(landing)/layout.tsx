import { Footer } from "./_components/footer";
import { MainNavbar } from "./_components/main-navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-dvh w-screen bg-slate-100 items-center">
      <MainNavbar />
      <main className="pt-20 2xs:pt-12 sm:pb-28 bg-slate-100 ">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
