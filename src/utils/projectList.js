import flextCover from "../images/flext_screencap_01.png";
import gourmandCover from "../images/Gourmand_Cover.png";
import kineticTypeCover from "../images/kineticType_Cover.jpg";
import diceRollerCover from "../images/diceRoller_Cover.png";
import cobLifeCover from "../images/CobLife_Cover.jpg";
import ispCover from "../images/ISP_Cover.jpg";
import kamiCover from "../images/Kami_Cover.png";

export const projectList = [
  {
    route: "/flext",
    image: flextCover,
    title: "flext",
  },
  {
    route: "/kami",
    title: "kami",
    image: kamiCover,
  },
  {
    route: "/gourmand",
    title: "Gourmand",
    image: gourmandCover,
  },
  {
    route: "/dice-roller",
    title: "Dice Roller",
    image: diceRollerCover,
  },
  {
    route: "/kinetic-type",
    title: "Kinetic Typography",
    image: kineticTypeCover,
  },
  {
    route: "/cob-life",
    title: "Cob Life",
    image: cobLifeCover,
  },
  {
    route: "/isp-prototype",
    title: "In-Store Publisher Prototype",
    image: ispCover,
  },
];

export const getNextProject = (pathName) => {
  const currentIndex = projectList.findIndex(
    (project) => project.route === pathName
  );
  if (currentIndex + 1 === projectList.length) {
    return projectList[0];
  }
  return projectList[currentIndex + 1];
};
