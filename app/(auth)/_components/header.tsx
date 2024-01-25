"use client";

interface HeaderProps {
  headerLabel: string;
}

export const Header = ({ headerLabel }: HeaderProps) => {
  return (
    <h1 className="flex items-center justify-center text-2xl md:text-3xl font-semibold w-full text-custom-black">
      {headerLabel}
    </h1>
  );
};
