import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignUpButton } from "./_components/signup-button";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row py-4  max-w-md md:max-w-none bg-custom-gray rounded-lg  ">
      <div className="flex flex-col gap-y-4  p-8 max-w-3xl min-h-max">
        <h1 className="text-3xl md:text-4xl text-custom-black">
          Brings all your tasks, teammates, and tools together
        </h1>
        <p className="text-lg md:text-xl text-custom-black">
          Keep everything in the same place even if your team isn’t.
        </p>
        <SignUpButton>
          <span className="">
            <Button size="wide" variant="custom3" className="w-48  text-sm md:text-base">
              Get Started
            </Button>
          </span>
        </SignUpButton>
      </div>
      <div className="p-8 w-full max-w-lg md:max-w-xl">
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
