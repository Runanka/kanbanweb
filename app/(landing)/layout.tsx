import { Footer } from "./_components/footer";
import { MainNavbar } from "./_components/main-navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-svh pt-14 pb-8 bg-gradient-to-br from-custom-black-2  via-custom-black-2-gradient to-custom-black-2">
      <MainNavbar />
      <main className="h-full flex items-start tall:items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
