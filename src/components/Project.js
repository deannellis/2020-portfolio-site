import React from "react";
import { Link } from "gatsby";

import {
  ProjectWrapper,
  ProjectFooter,
} from "../components/styles/ProjectPageStyles";
import { StyledButton } from "./styles/ButtonStyles";
import {
  NextArrowIcon,
  GitHubIcon,
  LeaveSiteIcon,
  PDFIcon,
} from "../utils/icons";
import { getNextProject } from "../utils/projectList";

const getButtonIcon = (icon) => {
  switch (icon) {
    case "leaveSite":
      return <LeaveSiteIcon size="18" />;
    case "PDF":
      return <PDFIcon size="20" />;
    case "gitHub":
      return <GitHubIcon size="22" />;
    default:
      return <></>;
  }
};

const Project = ({
  title,
  skills,
  buttons,
  background,
  children,
  technologies,
  location,
}) => {
  const nextProject = getNextProject(location.pathname);
  return (
    <>
      <ProjectWrapper>
        <section className="project-hero">
          <h1>{title}</h1>
          <h5>{skills}</h5>
          <div className="project-hero__buttons">
            {buttons.map(({ href, icon, label }) => (
              <a href={href} target="blank">
                <StyledButton outline>
                  {getButtonIcon(icon)} {label}
                </StyledButton>
              </a>
            ))}
          </div>
        </section>
        <section>
          <h3>Background</h3>
          {background}
        </section>
        <section>{children}</section>
      </ProjectWrapper>
      <ProjectFooter>
        <div className="footer__half">
          <h3>Technologies Used</h3>
          <ul>
            {technologies.map(({ href, label }) => (
              <>
                {href ? (
                  <li>
                    <a href={href}>{label}</a>
                  </li>
                ) : (
                  <li>{label}</li>
                )}
              </>
            ))}
          </ul>
        </div>
        <div className="footer__half">
          <Link to={nextProject.route}>
            <div>
              <span>Next Project</span>
              <NextArrowIcon fill="#000000D6" size="32" />
            </div>
            <img src={nextProject.image} alt="UPDATE DYNAMICALLY" />
          </Link>
        </div>
      </ProjectFooter>
    </>
  );
};

export default Project;
