import React, { useState, useRef, useLayoutEffect, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import {
  TitleContainer,
  MoveIconLeft,
  MoveIconRight,
  ProjectTitle,
  MoveIconContainer,
} from "../components/pages/projekty/styleProjects"
import { SmoothScrollContext } from "../layouts"
import Project from "../components/pages/projekty/Project"
import useLoadImages from "../hooks/useLoadImages"
import useScrollReset from "../hooks/useScrollReset"

const Main = styled.main`
  overflow: hidden;
  padding-top: 10rem;
`

const ProjectsContainer = styled.div`
  position: relative;
`

const Projects = ({ smoothScroll }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            descriptionPl {
              descriptionPl
            }
            descriptionEng {
              descriptionEng
            }
            title
            images {
              id
            }
            technologies
            images {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)
  const projectsData = data.allContentfulProject.edges.map(e => ({
    ...e.node,
    description: e.node.descriptionPl.descriptionPl,
    descriptionEng: e.node.descriptionEng.descriptionEng,
    images: e.node.images.map(e => e.fluid.src),
  }))
  const images = []
  projectsData.forEach(project => project.images.forEach(e => images.push(e)))
  const imagesLoaded = useLoadImages(images)
  const [position, setPosition] = useState(0)
  const selectedProject = useRef()
  const main = useRef()
  const title = useRef()
  const isNext = projectsData.length > 1 && position < projectsData.length - 1
  const isPrev = projectsData.length > 1 && position > 0

  const increasePosition = () => {
    setPosition(position + 1)
  }

  const decreasePosition = () => {
    setPosition(position - 1)
  }

  const setSize = () => {
    main.current.style.height =
      selectedProject.current.scrollHeight + title.current.scrollHeight + "px"
    smoothScroll.setSize()
  }

  useLayoutEffect(() => {
    if (imagesLoaded) {
      setSize()
    }
    window.addEventListener("resize", setSize)
    return () => window.removeEventListener("resize", setSize)
  }, [selectedProject.current, imagesLoaded])

  useScrollReset(smoothScroll);

  return (
    <Main ref={main}>
      {imagesLoaded && (
        <>
          <TitleContainer ref={title}>
            <MoveIconContainer>
              {isPrev && (
                <MoveIconLeft
                  role="button"
                  src="/svgs/left.svg"
                  onClick={decreasePosition}
                />
              )}
            </MoveIconContainer>
            <ProjectTitle>
              <span>{projectsData[position].title}</span>
            </ProjectTitle>
            <MoveIconContainer>
              {isNext && (
                <MoveIconRight
                  role="button"
                  src="/svgs/left.svg"
                  onClick={increasePosition}
                />
              )}
            </MoveIconContainer>
          </TitleContainer>
          <ProjectsContainer>
            {projectsData.map((e, i) => (
              <Project
                key={e.title}
                project={e}
                ref={selectedProject}
                isSelected={i === position}
                transform={`translateX(${i - position}00%)`}
              />
            ))}
          </ProjectsContainer>
        </>
      )}
    </Main>
  )
}

export default () => (
  <SmoothScrollContext.Consumer>
    {smoothScroll => smoothScroll && <Projects smoothScroll={smoothScroll} />}
  </SmoothScrollContext.Consumer>
)
