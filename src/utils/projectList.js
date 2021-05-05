import flextCover from "../images/flext_screencap_01.png";
import gourmandCover from "../images/Gourmand_Cover.png";
import kineticTypeCover from "../images/kineticType_Cover.jpg";
import diceRollerCover from "../images/diceRoller_Cover.png";
import cobLifeCover from "../images/CobLife_Cover.jpg";
import ispCover from "../images/ISP_Cover.jpg";

export const projectList = [
  {
    route: "/flext",
    image: flextCover,
    title: "flext",
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
  {
    route: "/test-project",
    title: "Test Project",
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
