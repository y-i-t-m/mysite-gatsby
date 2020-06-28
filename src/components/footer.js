import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      footer: file(relativePath: { eq: "footer.jpg" }) {
        relativePath
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <footer className="footer">
      <div className="container">
        <h1 className="site">
          <Link to={"/"}> Hayato Hasegawa </Link>
        </h1>
        <ul className="sns">
          <li>
            <a
              href="https://twitter.com/2hase1225/"
              target="_blank"
              rel="noopener, noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
              <span className="sr-only"> Twitter </span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/y-i-t-m"
              target="_blank"
              rel="noopener, noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="sr-only"> Github </span>
            </a>
          </li>
          <li>
            <a href="http://instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
              <span className="sr-only"> Instagram </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="back">
        <Img
          fluid={data.footer.childImageSharp.fluid}
          alt=""
          style={{
            height: "100%",
          }}
        />
      </div>
    </footer>
  );
}
