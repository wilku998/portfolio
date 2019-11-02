import { useStaticQuery, graphql } from "gatsby"
import chooseLang from "../functions/chooseLang"

export default lang => {
  const skillsData = useStaticQuery(graphql`
    query SkillsQuery {
      allContentfulSkill {
        edges {
          node {
            descriptionEn {
              descriptionEn
            }
            descriptionPl {
              descriptionPl
            }
            technologies
            title
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)
  return skillsData.allContentfulSkill.edges.map(({ node }) => ({
    ...node,
    ...node,
    description: chooseLang(
      {
        pl: node.descriptionPl.descriptionPl,
        en: node.descriptionEn.descriptionEn,
      },
      lang
    ),
    image: node.image.fluid.src,
  }))
}
