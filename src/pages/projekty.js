import React, { useState, useRef, useLayoutEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import {
  TitleContainer,
  MoveIconLeft,
  MoveIconRight,
  ProjectTitle,
  MoveIconContainer,
} from "../components/pages/projekty/styleProjects"
import { Context } from "../layouts/index"
import Project from "../components/pages/projekty/Project"
import useLoadImages from "../hooks/useLoadImages"
import chooseLang from "../functions/chooseLang"
import useScrollReset from "../hooks/useScrollReset"

const Main = styled.main`
  overflow: hidden;
  padding: 10rem 0 15rem 0;
  ${({ theme }) => `
    background-color: ${theme.colorGrey2};
  `}

  ${({ theme }) => theme.media.small`
    padding: 10rem 0;
  `}
`

const ProjectsContainer = styled.div`
  position: relative;
`

const Projects = ({ smoothScroll, lang, isLoading }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: [createdAt], order: ASC }) {
        edges {
          node {
            descriptionPl {
              descriptionPl
            }
            descriptionEn {
              descriptionEn
            }
            liveUrl
            githubUrl
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
  const projectsData = data.allContentfulProject.edges.map(({ node }) => ({
    ...node,
    description: chooseLang(
      {
        pl: node.descriptionPl.descriptionPl,
        en: node.descriptionEn.descriptionEn,
      },
      lang
    ),
    images: node.images.map(e => e.fluid.src),
  }))

  const images = []
  projectsData.forEach(project => project.images.forEach(e => images.push(e)))
  const imagesLoaded = useLoadImages(images, isLoading)
  useScrollReset(smoothScroll)
  const [position, setPosition] = useState(0)
  const selectedProject = useRef()
  const container = useRef()
  const isNext = projectsData.length > 1 && position < projectsData.length - 1
  const isPrev = projectsData.length > 1 && position > 0

  const increasePosition = () => {
    if (isNext) {
      setPosition(position + 1)
    }
  }

  const decreasePosition = () => {
    if (isPrev) {
      setPosition(position - 1)
    }
  }

  const setSize = () => {
    container.current.style.height = selectedProject.current.scrollHeight + "px"
    smoothScroll.setSize()
  }

  useLayoutEffect(() => {
    if (imagesLoaded) {
      setSize()

      const onKeyDown = e => {
        const { keyCode } = e
        if (keyCode === 37) {
          decreasePosition()
        } else if (keyCode === 39) {
          increasePosition()
        }
      }

      window.addEventListener("keydown", onKeyDown)
      window.addEventListener("resize", setSize)
      return () => {
        window.removeEventListener("keydown", onKeyDown)
        window.removeEventListener("resize", setSize)
      }
    }
  }, [position, imagesLoaded, lang.lang])

  return (
    <Main>
      <TitleContainer>
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
      <ProjectsContainer ref={container}>
        {projectsData.map((e, i) => (
          <Project
            lang={lang}
            key={e.title}
            project={e}
            ref={selectedProject}
            isSelected={i === position}
            style={{
              transform: `translateX(${i - position}00%) scale(${
                i === position ? 1 : 0.9
              })`,
              opacity: i === position ? 1 : 0,
            }}
          />
        ))}
      </ProjectsContainer>
    </Main>
  )
}

export default () => (
  <Context.Consumer>
    {({ smoothScroll, lang, isLoading }) => (
      <Projects smoothScroll={smoothScroll} lang={lang} isLoading={isLoading} />
    )}
  </Context.Consumer>
)
