import MaxWidth from "../ui/MaxWidth";

import IconTs from "@/components/svg/technologies/IconTs";
import IconJs from "@/components/svg/technologies/IconJs";
import IconReact from "@/components/svg/technologies/IconReact";
import IconVue from "@/components/svg/technologies/IconVue";
import IconSvelte from "@/components/svg/technologies/IconSvelte";
import IconTailwind from "@/components/svg/technologies/IconTailwind";
import IconSass from "@/components/svg/technologies/IconSass";
import IconNext from "@/components/svg/technologies/IconNext";
import IconNode from "@/components/svg/technologies/IconNode";
import IconMongoDb from "@/components/svg/technologies/IconMongoDb";

export default function SlideShow() {
  return (
    <MaxWidth width="max-w-screen-md">
      <div className="relative py-10 flex gap-32 overflow-hidden before:absolute before:z-10 before:bg-gradient-to-r before:from-white before:to-0% before:top-0 before:left-0 before:w-36 before:h-full after:absolute after:z-10 after:bg-gradient-to-l after:from-white after:to-0% after:top-0 after:right-0 after:w-36 after:h-full">
        <div className="flex gap-32 animate-slideShow">
          <IconJs width="35px" height="auto" />
          <IconReact width="35px" height="auto" />
          <IconVue width="35px" height="auto" />
          <IconSvelte width="35px" height="auto" />
          <IconTs width="35px" height="auto" />
          <IconTailwind width="35px" height="auto" />
          <IconSass width="35px" height="auto" />
          <IconNext width="35px" height="auto" />
          <IconNode width="35px" height="auto" />
          <IconMongoDb width="35px" height="auto" />
        </div>
        <div className="flex gap-32 animate-slideShow">
          <IconJs width="35px" height="auto" />
          <IconReact width="35px" height="auto" />
          <IconVue width="35px" height="auto" />
          <IconSvelte width="35px" height="auto" />
          <IconTs width="35px" height="auto" />
          <IconTailwind width="35px" height="auto" />
          <IconSass width="35px" height="auto" />
          <IconNext width="35px" height="auto" />
          <IconNode width="35px" height="auto" />
          <IconMongoDb width="35px" height="auto" />
        </div>
      </div>
    </MaxWidth>
  );
}
