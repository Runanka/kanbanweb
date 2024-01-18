import { Navbar } from "./_components/navbar";

const OrganizationLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-svh">
      <Navbar />
      {children}
    </div>
  );
};
export default OrganizationLayout;
