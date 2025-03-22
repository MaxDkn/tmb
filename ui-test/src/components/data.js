import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Notre équipe",
  desc: "On est avant tout un groupe d'amis et ce projet, c’est une super occasion de vivre une expérience ensemble tout en faisant découvrir la faune et la flore des montagnes !",
  image: benefitOneImg,
  bullets: [
    {
      title: "Motivé",
      desc: "On est super motivés par ce projet, car c’est l’occasion de partager notre passion pour la nature avec d'autres et d'apprendre tout en s’amusant !",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Mais surtout bien accompagné : )",
      desc: "Nous sommes une petite équipe de 6 lycéens, accompagnés d'un professeur et d'une ancienne élève du lycée Sévigné.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Fidéliser notre communauté",
      desc: "On veut créer une vraie communauté autour de notre projet, avec des gens qui aiment échanger et qui reviennent régulièrement pour suivre nos aventures.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
