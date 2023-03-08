import { Button } from "@/components/shared/components/buttons";
import { Input } from "@/components/shared/components/inputs";
import { worksAtom } from "atoms/works.atom";
import { useRecoilState } from "recoil";
import { BsHouseAdd, BsHouseFill } from "react-icons/bs";

export default function WorkList() {
  // const [works, setWorks] = useRecoilState(worksAtom);
  return (
    <div className="h-60 w-full p-2">
      <div className="flex">
        <div className="min-w-full">
          <Input icon={<BsHouseAdd size={20} />} width="w-[900px]" />
        </div>
      </div>
      <div className="mt-2 h-52 overflow-y-auto overscroll-contain  p-2">
        <div className="flex items-center justify-between text-sm text-[#6d5dfc]">
          <div className="flex items-baseline">
            <BsHouseFill size={20} />
            <div className="ml-1">111</div>
          </div>

          <div className="flex items-baseline">
            <Button color="secondary" label="일정등록" />
            <Button
              color="secondary"
              label="삭제"
              style={{ marginLeft: "5px" }}
            />
          </div>
        </div>
        <div>111 </div>
        <div> 111 </div>
        <div> 111 </div>
        <div> 111 </div>
        <div> 111 </div>
        <div> 111 </div>
        <div> 111 </div>
        <div> 111 </div> <div> 111 </div>
      </div>
    </div>
  );
}
