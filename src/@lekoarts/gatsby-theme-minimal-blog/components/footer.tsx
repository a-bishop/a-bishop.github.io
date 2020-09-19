/** @jsx jsx */
import { jsx } from "theme-ui"
import cc from "../images/cc.svg";

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
        flexDirection: `row`,
        variant: `dividers.top`,
        fontSize: [0],
      }}
    >
      <a
        href="https://creativecommons.org/licenses/by-nc/4.0/"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Image src={cc} alt="Creative Commons" />
      </a>
      <div sx={{ ml: [1] }}>{new Date().getFullYear()} Andrew Bishop.</div>
      <div sx={{ ml: [2] }}>
        Built with
        <a href="https://www.gatsbyjs.com/"> Gatsby</a>
      </div>
    </footer>
  );
}

export default Footer