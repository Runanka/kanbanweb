"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const OrganizationPage = () => {
  return (
    <div>
      <h1>Organization Page</h1>
      <form
        action={async () => {
          await logout();
        }}
      >
        <Button size="md">Sign Out</Button>
      </form>
    </div>
  );
};

export default OrganizationPage;
