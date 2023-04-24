import MaxWidth from "./MaxWidth";

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
      <div className="my-6 overflow-hidden">
        <ul className="flex gap-32 animate-slideShow">
          <li>
            <IconJs width="40px" height="auto" />
          </li>
          <li>
            <IconTs width="40px" height="auto" />
          </li>
          <li>
            <IconReact width="40px" height="auto" />
          </li>
          <li>
            <IconVue width="40px" height="auto" />
          </li>
          <li>
            <IconSvelte width="40px" height="auto" />
          </li>
          <li>
            <IconTailwind width="40px" height="auto" />
          </li>
          <li>
            <IconSass width="40px" height="auto" />
          </li>
          <li>
            <IconNext width="40px" height="auto" />
          </li>
          <li>
            <IconNode width="40px" height="auto" />
          </li>
          <li>
            <IconMongoDb width="40px" height="auto" />
          </li>
        </ul>
      </div>
    </MaxWidth>
  );
}
