const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full justify-center items-start tall:items-center bg-gradient-to-br from-custom-black-2  via-custom-black-2-gradient to-custom-black-2 ">
      {children}
    </div>
  );
};
export default AuthLayout;
