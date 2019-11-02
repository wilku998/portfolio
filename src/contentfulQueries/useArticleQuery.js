import { useStaticQuery, graphql } from "gatsby"
import chooseLang from "../functions/chooseLang"

export default lang => {
  const skillsData = useStaticQuery(graphql`
    query ArticleQuery {
      allContentfulArticle {
        edges {
          node {
            image {
              fluid {
                src
              }
            }
            paragraphPl {
              paragraphPl
            }
            paragraphEn {
              paragraphEn
            }
          }
        }
      }
    }
  `)
  const { node } = skillsData.allContentfulArticle.edges[0]

  return {
    ...node,
    ...node,
    paragraph: chooseLang(
      {
        pl: node.paragraphPl.paragraphPl,
        en: node.paragraphEn.paragraphEn,
      },
      lang
    ),
    image: node.image.fluid.src,
  }
}
