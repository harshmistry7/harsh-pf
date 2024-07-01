"ue client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/harsh-mistry7/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/harshmistry7",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/harxh.bytes?igsh=MW0yN2RnMmM3dGg4cA==",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
