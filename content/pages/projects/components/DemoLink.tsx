/** @jsx jsx */
import { jsx, Link as TLink } from "theme-ui";
import { Link } from "gatsby";
// import { useState } from "react";
// import { FaLink } from "react-icons/fa";

type Props = {
  href: string;
  title: string;
};

const DemoLink = ({ href, title }: Props) => {
  // const [showLink, setShowLink] = useState(false);

  return (
    <TLink
      as={Link}
      to={href}
      sx={{
        fontSize: [2, 2, 3],
        color: `text`,
        "&:hover": { 
          color: "primary"
        },
      }}
    >
        {/* <div
          onMouseEnter={() => setShowLink(true)}
          onMouseLeave={() => setShowLink(false)}
        > */}
      <div>
          {title}
        {/* {showLink && (
          <FaLink
          sx={{ ml: 2 }}
          size="0.7em"
          />
          )} */}
      </div>
          {/* </div> */}
    </TLink>
  );
};

export default DemoLink;
