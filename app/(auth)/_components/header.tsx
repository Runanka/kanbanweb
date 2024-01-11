"use client";

interface HeaderProps {
  headerLabel: string;
}

export const Header = ({ headerLabel }: HeaderProps) => {
  return (
    <h1 className="flex items-center justify-center text-size-md text-2xl font-semibold w-full">
      {headerLabel}
    </h1>
  );
};
