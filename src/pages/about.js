import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo";

import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

export default function About({ data, location }) {
  return (
    <Layout>
      <SEO
        pagetitle="ABOUT"
        pagedesc="ABOUTページの説明が入ります"
        pagepath={location.pathname}
        pageimg={data.aboutHero.childImageSharp.original.src}
        pageimgw={data.aboutHero.childImageSharp.original.width}
        pageimgh={data.aboutHero.childImageSharp.original.height}
      />
      <div className="eyecatch">
        <figure>
          <Img
            fluid={data.aboutHero.childImageSharp.fluid}
            alt=""
            loading="eager"
            durationFadeIn={100}
          />
        </figure>
      </div>
      <article className="content">
        <div className="container">
          <h1 className="bar">About Page</h1>
          {/* <aside className="info">
            <div className="subtitle">
              <FontAwesomeIcon icon={faUtensils} />
              ABOUT ESSENTIALS
            </div>
          </aside> */}
          <div className="postbody">
            <p>
              現在、Web制作について勉強しています。最近はJamstack開発に興味があります。
            </p>
            <h2>
              <FontAwesomeIcon icon={faCheckSquare} />
              プロフィール
            </h2>
            <ul>
              <li>長谷川 駿 - はせがわ はやと</li>
              <li>1997年12月25日 - 22歳</li>
            </ul>
            <h2>
              <FontAwesomeIcon icon={faCheckSquare} />
              スキル
            </h2>
            <ul>
              <li>HTML5 / CSS3</li>
              <li>JavaScript</li>
              <li>Sass (Scss)</li>
            </ul>
            <h2>
              <FontAwesomeIcon icon={faCheckSquare} />
              趣味
            </h2>
            <ul>
              <li>読書</li>
              <li>野球観戦</li>
              <li>写真</li>
            </ul>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query {
    aboutHero: file(relativePath: { eq: "about_hero.jpg" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 1600, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
        original {
          src
          height
          width
        }
      }
    }
  }
`;
