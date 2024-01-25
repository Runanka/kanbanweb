import { Sidebar } from "../_components/sidebar";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-grow overflow-x-auto bg-gradient-to-br from-custom-black-2  via-custom-black-2-gradient to-custom-black-2">
      {children}
    </div>
  );
};

export default OrganizationLayout;
