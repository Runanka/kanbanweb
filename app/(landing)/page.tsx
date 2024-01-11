import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignUpButton } from "./_components/signup-button";

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:items-start flex-grow w-screen md:bg-slate-200 ">
      <div className="flex flex-col p-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl p-4">
          Brings all your tasks, teammates, and tools together
        </h1>
        <p className="text-xl md:text-2xl mb-4 p-4">
          Keep everything in the same place even if your team isn’t.
        </p>
        <SignUpButton>
          <span className="flex w-full justify-center p-4 md:justify-start">
            <Button size="wide">Get Started</Button>
          </span>
        </SignUpButton>
      </div>
      <div className="p-8 w-full h-auto max-w-xl md:max-w-2xl ">
        <Image
          src="/kanban-illus.svg"
          alt="Kanban illustration for marketing page"
          width={475}
          height={271}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default LandingPage;
