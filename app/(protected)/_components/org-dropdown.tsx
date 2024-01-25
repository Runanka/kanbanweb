import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OrgDropDownProps {
  orgList: { id: string; name: string }[];
  onChangeHandler: (value: string) => void;
  defaultValue?: string;
}

export const OrgDropDown = ({
  orgList,
  onChangeHandler,
  defaultValue,
}: OrgDropDownProps) => {
  return (
    <div>
      <Select onValueChange={onChangeHandler} defaultValue={defaultValue}>
        <SelectTrigger className="w-[140px] 2xs:w-[170px] md:w-[240px]   text-sm md:text-base text-custom-black bg-custom-white border-custom-black font-semibold">
          <SelectValue placeholder="ORGANIZATION" />
        </SelectTrigger>
        <SelectContent className="bg-custom-white border-custom-black text-base">
          {orgList.map((org: { id: string; name: string }) => (
            <SelectItem
              key={org.id}
              value={org.id}
              className="bg-custom-white focus:bg-custom-black/20 hover:bg-custom-gray/80 border-0 "
            >
              <div className="text-base uppercase">{org.name}</div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
