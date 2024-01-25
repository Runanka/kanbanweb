import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IoIosArrowForward } from "react-icons/io";
import { GoOrganization } from "react-icons/go";
import { CiViewBoard } from "react-icons/ci";
import { PiUsersLight } from "react-icons/pi";
import { BsActivity } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { logout } from "@/actions/logout";
// import { getOrgData } from "@/actions/get-org-data";

export const SidebarContent = ({
  isSidebarOpen,
  handleSidebarToggle,
  organizationData,
}: {
  isSidebarOpen: Boolean;
  handleSidebarToggle: () => void;
  organizationData:
    | {
        id: string;
        name: string;
        users: { userId: string }[];
        boards: { id: string; name: string }[];
      }[]
    | undefined;
}) => {
  // const organizationData = await getOrgData();
  const pathname = usePathname();
  const orgId = pathname.split("/")[1];
  console.log(pathname, orgId);
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between h-full overflow-y-auto overflow-x-hidden">
      <div>
        <div className="flex items-center border-b border-custom-gray-2 h-20">
          <div
            className={cn(
              "flex items-center transition-all duration-500 ease-in-out  m-2",
              {
                "-translate-x-64": !isSidebarOpen,
                "translate-x-0": isSidebarOpen,
              }
            )}
          >
            <GoOrganization className="size-10 text-custom-gray" />
            {organizationData
              ?.filter((org) => org.id === orgId)
              .map((org) => (
                <p
                  key={org.id}
                  className="overflow-clip max-w-44 max-h-6 px-4 uppercase text-custom-gray text-lg font-semibold"
                >
                  {org.name}
                </p>
              ))}
          </div>
          <Button
            onClick={handleSidebarToggle}
            size="round"
            variant="none"
            className={cn(
              "fixed transition-all duration-500 ease-in-out bg-custom-gray text-custom-black z-10",
              {
                "translate-x-0": !isSidebarOpen,
                "translate-x-60 rotate-180": isSidebarOpen,
              }
            )}
          >
            <IoIosArrowForward className="size-6" />
          </Button>
        </div>
        <div
          className={cn("transition-all duration-500 ease-in-out", {
            "-translate-x-64": !isSidebarOpen,
            "translate-x-0": isSidebarOpen,
          })}
        >
          <div className="flex flex-col items-end justify-start h-full py-8 cursor-default">
            <div className=" w-full">
              <div className="flex items-center p-2 pl-16 text-custom-gray hover:bg-custom-gray  hover:text-custom-black">
                <CiViewBoard className="size-8 " />
                <Button
                  variant="none"
                  className="text-lg hover:underline"
                  onClick={() => {
                    router.push(`/${orgId}`);
                  }}
                >
                  Boards
                </Button>
              </div>
              <div className="flex items-center p-2 pl-16 text-custom-gray hover:bg-custom-gray  hover:text-custom-black">
                <PiUsersLight className="size-8 " />
                <Button
                  variant="none"
                  className="text-lg hover:underline "
                  onClick={() => {
                    router.push(`/${orgId}/members`);
                  }}
                >
                  Members
                </Button>
              </div>
              <div className="flex items-center p-2 pl-16 text-custom-gray hover:bg-custom-gray  hover:text-custom-black">
                <BsActivity className="size-8 " />
                <Button
                  variant="none"
                  className="text-lg hover:underline "
                  onClick={() => {
                    router.push(`/${orgId}/activity`);
                  }}
                >
                  Activity
                </Button>
              </div>
              <div className="flex items-center p-2 pl-16 text-custom-gray hover:bg-custom-gray  hover:text-custom-black">
                <CiSettings className="size-8 " />
                <Button
                  variant="none"
                  className="text-lg hover:underline "
                  onClick={() => {
                    router.push(`/${orgId}/settings`);
                  }}
                >
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn("p-4 w-fit duration-500 ease-in-out text-custom-gray ", {
          "-translate-x-36": !isSidebarOpen,
          "translate-x-32": isSidebarOpen,
        })}
      >
        <form
          action={async () => {
            await logout();
          }}
        >
          <Button size="lg" variant="custom1" className="text-base md:text-lg">
            Sign Out
          </Button>
        </form>
      </div>
    </div>
  );
};
