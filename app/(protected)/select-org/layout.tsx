const selectOrgLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-svh flex justify-center items-center">{children}</div>
  );
};

export default selectOrgLayout;
