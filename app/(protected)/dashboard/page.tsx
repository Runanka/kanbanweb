import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button>Log Out</Button>
      </form>
    </div>
  );
};

export default DashboardPage;
