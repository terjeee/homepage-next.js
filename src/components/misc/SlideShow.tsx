import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.5 }}
      className="relative flex overflow-hidden py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-36 before:bg-gradient-to-r before:from-white before:to-0% after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-36 after:bg-gradient-to-l after:from-white after:to-0% dark:before:from-darkBg dark:after:from-darkBg"
    >
      <div className="flex animate-slideShow gap-20 px-14 md:gap-28">
        <IconJs width="40px" height="40px" />
        <IconReact width="40px" height="40px" />
        <IconVue width="40px" height="40px" />
        <IconSvelte width="40px" height="40px" />
        <IconTs width="40px" height="40px" />
        <IconTailwind width="40px" height="40px" />
        <IconSass width="40px" height="40px" />
        <IconNext width="40px" height="40px" className="dark:fill-white" />
        <IconNode width="40px" height="40px" />
        <IconMongoDb width="40px" height="40px" className="dark:fill-[#116149]" />
      </div>
      <div className="flex animate-slideShow gap-20 px-14 md:gap-28">
        <IconJs width="40px" height="40px" />
        <IconReact width="40px" height="40px" />
        <IconVue width="40px" height="40px" />
        <IconSvelte width="40px" height="40px" />
        <IconTs width="40px" height="40px" />
        <IconTailwind width="40px" height="40px" />
        <IconSass width="40px" height="40px" />
        <IconNext width="40px" height="40px" className="dark:fill-white" />
        <IconNode width="40px" height="40px" />
        <IconMongoDb width="40px" height="40px" className="dark:fill-[#116149]" />
      </div>
    </motion.div>
  );
}
