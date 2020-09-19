/** @jsx jsx */
import { jsx } from "theme-ui"
import cc from "../images/cc.svg";
import nc from "../images/nc.svg";
import by from "../images/by.svg";

const Image = ({src, alt}) => <img src={src} alt={alt} width="14px" sx={{ ml: [1]}}></img>

const Footer = () => {

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `flex-start`,
        alignItems: "center",
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
        fontSize: [0],
      }}
    >
      <a href="https://creativecommons.org/licenses/by-nc/4.0/" style={{ display: "flex", alignItems: "center" }}>
        <Image src={cc} alt="Creative Commons" />
        <Image src={by} alt="Attibution" />
        <Image src={nc} alt="Non-commercial" />
      </a>
      <div sx={{ ml: [1] }}>
        {new Date().getFullYear()} Andrew Bishop. Built with
      </div>
      <a sx={{ ml: [1] }} href="https://www.gatsbyjs.com/">
        Gatsby
      </a>
    </footer>
  );
}

export default Footer