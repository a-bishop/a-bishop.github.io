/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";

const HeaderExternalLinks = () => {
  const { externalLinks } = useMinimalBlogConfig();

  return (
    <React.Fragment>
      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map((link) => (
            <TLink
              key={link.url}
              href={link.url}
            >
              {link.name === "GitHub" && <FaGithub />}
              {link.name === "LinkedIn" && <FaLinkedin />}
            </TLink>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default HeaderExternalLinks;
