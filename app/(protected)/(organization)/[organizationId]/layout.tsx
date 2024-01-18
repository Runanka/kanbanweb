import { Sidebar } from "../_components/sidebar";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full pt-12 flex">
      <Sidebar />
      <div className="flex-grow overflow-x-scroll">{children}</div>
    </div>
  );
};

export default OrganizationLayout;
