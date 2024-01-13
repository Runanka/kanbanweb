import { BackButton } from "./back-button";
import { Header } from "./header";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";

export const ErrorCard = () => {
  return (
    <div className=" md:w-96 shadow-md m-8">
      <Card>
        <CardHeader>
          <Header headerLabel="Oops!" />
          <p className=" text-red-800 text-center">Something went wrong!</p>
        </CardHeader>
        <CardFooter>
          <BackButton backButtonLabel="Back to login" backButtonHref="/login" />
        </CardFooter>
      </Card>
    </div>
  );
};
