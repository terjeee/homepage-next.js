import IconJs from "@/components/svg/technologies/IconJs";
import IconTs from "@/components/svg/technologies/IconTs";
import IconPython from "@/components/svg/technologies/IconPython";
import IconMySQL from "@/components/svg/technologies/IconMySQL";
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
    icon: <IconJs />,
    path: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    id: 2,
    icon: <IconTs />,
    path: "https://www.typescriptlang.org/",
  },
  {
    id: 3,
    icon: <IconPython />,
    path: "https://www.python.org/about/",
  },
  {
    id: 4,
    icon: <IconMySQL className="dark:fill-white" />,
    path: "https://www.mysql.com/about/",
  },
  {
    id: 5,
    icon: <IconReact />,
    path: "https://react.dev/learn",
  },
  {
    id: 6,
    icon: <IconNext className="dark:fill-white" />,
    path: "https://nextjs.org/docs",
  },
  {
    id: 7,
    icon: <IconSvelte />,
    path: "https://svelte.dev/docs/introduction",
  },
  {
    id: 8,
    icon: <IconVue />,
    path: "https://vuejs.org/guide/introduction.html",
  },
  {
    id: 9,
    icon: <IconSass />,
    path: "https://sass-lang.com/",
  },
  {
    id: 10,
    icon: <IconTailwind />,
    path: "https://tailwindcss.com/docs/installation",
  },
  {
    id: 11,
    icon: <IconNode />,
    path: "https://nodejs.org/en/about",
  },
  {
    id: 12,
    icon: <IconMongoDb className="dark:fill-[#116149]" />,
    path: "https://www.mongodb.com/docs/",
  },
];

export default function SlideShow() {
  return (
    <div className="group relative flex overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-white before:to-0% after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-10 after:bg-gradient-to-l after:from-white after:to-0% dark:before:from-darkBg dark:after:from-darkBg md:py-5">
      <div className="md:group-hover:animation-pause flex animate-slideShow gap-24 px-12 md:gap-32 md:px-16">
        {icons.map(({ id, icon, path }) => (
          <a href={path} target="_blank" key={id} className="block w-10 md:transition md:duration-100 md:ease-in md:hover:scale-110">
            {icon}
          </a>
        ))}
      </div>
      <div className="md:group-hover:animation-pause flex animate-slideShow gap-24 px-12 md:gap-32 md:px-16">
        {icons.map(({ id, icon, path }) => (
          <a href={path} target="_blank" key={id} className="block w-10 md:transition md:duration-100 md:ease-in md:hover:scale-110">
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
