import placeholderImage1 from "../images/nordwood-themes-ubIWo074QlU-unsplash.jpg";
import placeholderImage2 from "../images/jose-alejandro-cuffia-_4815u_ACqQ-unsplash.jpg";
import placeholderImage3 from "../images/boxed-water-is-better-IG4hajNkbvM-unsplash.jpg";
import flextCover from "../images/flext_screencap_01.png";
import gourmandCover from "../images/Gourmand_Cover.png";

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
    route: "/thank-you",
    title: "Project 2",
    image: placeholderImage2,
  },
  {
    route: "/thank-you",
    title: "Project 3",
    image: placeholderImage3,
  },
  {
    route: "/thank-you",
    title: "Project 1",
    image: placeholderImage1,
  },
  {
    route: "/thank-you",
    title: "Project 2",
    image: placeholderImage2,
  },
  {
    route: "/thank-you",
    title: "Project 3",
    image: placeholderImage3,
  },
  {
    route: "/thank-you",
    title: "Project 1",
    image: placeholderImage1,
  },
  {
    route: "/thank-you",
    title: "Project 2",
    image: placeholderImage2,
  },
];

export const getNextProject = pathName => {
  const currentIndex = projectList.findIndex(
    project => project.route === pathName
  );
  // ToDo: Needs logic for last project
  return projectList[currentIndex + 1];
};
