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

const icons = [
  {
    id: 1,
    icon: <IconJs width="40px" height="40px" />,
    path: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    id: 2,
    icon: <IconTs width="40px" height="40px" />,
    path: "https://www.typescriptlang.org/",
  },
  {
    id: 3,
    icon: <IconReact width="40px" height="40px" />,
    path: "https://react.dev/learn",
  },
  {
    id: 4,
    icon: <IconNext width="40px" height="40px" className="dark:fill-white" />,
    path: "https://nextjs.org/docs",
  },
  {
    id: 5,
    icon: <IconSvelte width="40px" height="40px" />,
    path: "https://svelte.dev/docs/introduction",
  },
  {
    id: 6,
    icon: <IconVue width="40px" height="40px" />,
    path: "https://vuejs.org/guide/introduction.html",
  },
  {
    id: 7,
    icon: <IconSass width="40px" height="40px" />,
    path: "https://sass-lang.com/",
  },
  {
    id: 8,
    icon: <IconTailwind width="40px" height="40px" />,
    path: "https://tailwindcss.com/docs/installation",
  },
  {
    id: 9,
    icon: <IconNode width="40px" height="40px" />,
    path: "https://nodejs.org/en/about",
  },
  {
    id: 10,
    icon: <IconMongoDb width="40px" height="40px" className="dark:fill-[#116149]" />,
    path: "https://www.mongodb.com/docs/",
  },
];

export default function SlideShow() {
  return (
    <div className="group relative flex overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-white before:to-0% after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-10 after:bg-gradient-to-l after:from-white after:to-0% dark:before:from-darkBg dark:after:from-darkBg">
      <div className="md:group-hover:animation-pause flex animate-slideShow gap-24 px-12 md:gap-32 md:px-16">
        {icons.map(({ id, icon, path }) => (
          <a href={path} target="_blank" key={id} className="md:transition md:duration-100 md:ease-in md:hover:scale-110">
            {icon}
          </a>
        ))}
      </div>
      <div className="md:group-hover:animation-pause flex animate-slideShow gap-24 px-12 md:gap-32 md:px-16">
        {icons.map(({ id, icon, path }) => (
          <a href={path} target="_blank" key={id} className="md:transition md:duration-100 md:ease-in md:hover:scale-110">
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
