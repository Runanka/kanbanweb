const selectOrgLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-svh flex justify-center items-start tall:items-center bg-gradient-to-br from-custom-black-2  via-custom-black-2-gradient to-custom-black-2 overflow-auto">
      {children}
    </div>
  );
};

export default selectOrgLayout;
