import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";
import { getOrgData } from "@/actions/get-org-data";

const OrganizationLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const organizationData = await getOrgData();

  return (
    <div className="h-full w-screen">
      <Navbar />
      <div className="h-full w-screen flex pt-14">
        <Sidebar organizationData={organizationData} />
        {children}
      </div>
    </div>
  );
};
export default OrganizationLayout;
