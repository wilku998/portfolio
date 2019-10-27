import React from "react"
import style, {
  Gallery,
  Description,
  DescriptionTitle,
  Technologies,
  List,
  Button,
  DescriptionContent,
  ButtonsContainer,
  Paragraph,
  Image,
  FakeImage,
} from "./styleProjects"

const Project = React.forwardRef(
  ({ project, className, transform, isSelected }, ref) => {
    const { images, description, technologies } = project
    return (
      <section
        ref={isSelected ? ref : undefined}
        className={className}
        style={{ transform }}
      >
        <Description>
          <DescriptionContent>
            <DescriptionTitle>Opis projektu</DescriptionTitle>
            <Paragraph>{description}</Paragraph>
            <ButtonsContainer>
              <Button>Zobacz projekt</Button>
              <Button>Zobacz kod</Button>
            </ButtonsContainer>
          </DescriptionContent>
          <Technologies>
            <DescriptionTitle>Technologie</DescriptionTitle>
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
