import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Home({ data }) {
  return (
    <Layout>
      <SEO />
      <section className="hero">
        <figure>
          <Img
            fluid={data.hero.childImageSharp.fluid}
            alt=""
            style={{ height: "100%" }}
            loading="eager"
            durationFadeIn={100}
          />
        </figure>
        <div className="catch">
          <h1>Hayato Hasegawa</h1>
        </div>
        <div className="wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1366 229.5"
            fill="#fff"
          >
            <path
              d="M1369,6.3C1222.5-12.2,1189.5,8,919.2,96.6C665,179.8,160,141.7-2,53.1v150l1371-14.2V6.3z"
              opacity=".53"
            />
            <path d="M1369 229.5V55.8c-9.5-2.4-19.2-4.4-28.9-5.8-196.9-29.9-203.4-15.8-503.9 82.6-219.8 72-627.6 53.2-838.2-10.5v107.4h1371z" />
          </svg>
        </div>
      </section>
      <section className="food">
        <div className="container">
          <h2 className="bar">
            やっていること
          </h2>
          <div className="details">
            <div className="detail">
              <figure>
                <Img fluid={data.code.childImageSharp.fluid} alt="" />
              </figure>
              <h3>コーディング</h3>
              <p>
                ランディングページの制作を1件しました。
              </p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.code.childImageSharp.fluid} alt="" />
              </figure>
              <h3>コーディング</h3>
              <p>
                ランディングページの制作を1件しました。
              </p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.code.childImageSharp.fluid} alt="" />
              </figure>
              <h3>コーディング</h3>
              <p>
                ランディングページの制作を1件しました。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="photo">
        <h2 className="sr-only">Photo</h2>
        <figure>
          <Img
            fluid={data.bg.childImageSharp.fluid}
            alt="赤く熟したベリー"
            style={{ height: "100%" }}
          />
        </figure>
      </section>

      <section>
        <div className="container">
          <h2 className="bar section__title">最新の記事一覧</h2>
          <div className="posts">
            {data.allContentfulBlogPost.edges.map(({ node }) => (
              <article className="post" key={node.id}>
                <Link to={`/blog/post/${node.slug}/`}>
                  <figure>
                    <Img
                      fluid={node.thumbnail.fluid}
                      alt={node.thumbnail.description}
                      style={{ height: "100%" }}
                    />
                  </figure>
                  <h3 className="post__title">{node.title}</h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 1600, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    code: file(relativePath: { eq: "code.png" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    code: file(relativePath: { eq: "code.png" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    code: file(relativePath: { eq: "code.png" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bg: file(relativePath: { eq: "bg.jpg" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    footer: file(relativePath: { eq: "footer.jpg" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    allContentfulBlogPost(
      sort: { order: DESC, fields: createdDate }
      skip: 0
      limit: 4
    ) {
      edges {
        node {
          title
          id
          slug
          thumbnail {
            fluid(maxWidth: 573) {
              ...GatsbyContentfulFluid_withWebp
            }
            description
          }
        }
      }
    }
  }
`;
