import { Button } from "@/components/shared/components/buttons";
import { Input } from "@/components/shared/components/inputs";
import { worksAtom } from "atoms/works.atom";
import { useRecoilState } from "recoil";

export default function WorkList() {
  const [works, setWorks] = useRecoilState(worksAtom);
  return (
    <div className="h-60 w-full border border-cyan-200 p-2">
      <div className="flex">
        <Input />
        <Button color="primary" label="추가" />
      </div>
      <div></div>
    </div>
  );
}
