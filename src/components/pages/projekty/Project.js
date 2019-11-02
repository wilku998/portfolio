import React from "react"
import style, {
  Gallery,
  Description,
  DescriptionTitle,
  Technologies,
  List,
  Link,
  DescriptionContent,
  LinksContainer,
  Paragraph,
  Image,
  FakeImage,
} from "./styleProjects"
import chooseLang from "../../../functions/chooseLang"

const Project = React.forwardRef(
  ({ project, className, style, isSelected, lang }, ref) => {
    const { images, description, technologies, liveUrl, githubUrl } = project
    console.log(project)
    const textContent = chooseLang(
      {
        pl: {
          descriptionTitle: "Opis projektu",
          linkCode: "Zobacz kod",
          linkLive: "Zobacz projekt",
          technologiesTitle: "Technologie",
        },
        en: {
          descriptionTitle: "Project description",
          linkCode: "See code",
          linkLive: "See project",
          technologiesTitle: "Technologies",
        },
      },
      lang
    )
    return (
      <section
        ref={isSelected ? ref : undefined}
        className={className}
        style={style}
      >
        <Description>
          <DescriptionContent>
            <DescriptionTitle>{textContent.descriptionTitle}</DescriptionTitle>
            <Paragraph>{description}</Paragraph>
            <LinksContainer>
              <Link as="a" href={liveUrl} target="_blank">
                {textContent.linkLive}
              </Link>
              <Link as="a" href={githubUrl} target="_blank">
                {textContent.linkCode}
              </Link>
            </LinksContainer>
          </DescriptionContent>
          <Technologies>
            <DescriptionTitle>{textContent.technologiesTitle}</DescriptionTitle>
            <List>
              {technologies.map(e => (
                <li key={e}>{e}</li>
              ))}
            </List>
          </Technologies>
        </Description>

        <Gallery>
          <FakeImage src={images[0]} />
          {images.map(src => (
            <Image key={src} src={src} />
          ))}
        </Gallery>
      </section>
    )
  }
)

export default style(Project)
