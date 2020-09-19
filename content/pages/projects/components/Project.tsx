/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui";
import DemoLink from "./DemoLink";
import { FaGithub } from "react-icons/fa";

type Props = {
  demoLink: string;
  githubLink: string;
  tech: string;
  title: string;
  description: string;
};

const Project = ({ title, demoLink, githubLink, tech, description }: Props) => {
  return (
    <React.Fragment>
      <DemoLink href={demoLink} title={title} />
      <div
        sx={{
          color: `text`,
          mb: [4],
          fontSize: [1, 1, 2],
        }}
      >
        <TLink
          sx={{
            color: "secondary",
            fontStyle: "italic",
            fontSize: [0, 1, 1],
            "&:hover": { color: "primary" },
          }}
          key={githubLink}
          href={githubLink}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            Tech: {tech}{" "}
            <FaGithub style={{ marginLeft: "0.5em" }} size="0.8em" />
          </div>
        </TLink>
        <div sx={{ mt:[2]}}>{description}</div>
      </div>
    </React.Fragment>
  );
};

export default Project;
