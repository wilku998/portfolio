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
import useScrollReset from "../hooks/useScrollReset"
import chooseLang from "../functions/chooseLang"

const Main = styled.main`
  overflow: hidden;
  padding-top: 10rem;
`

const ProjectsContainer = styled.div`
  position: relative;
`

const Projects = ({ smoothScroll, lang }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject (
        sort: {
          fields: [createdAt]
          order: ASC
        }
      ) {
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
  const imagesLoaded = useLoadImages(images)
  const [position, setPosition] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const selectedProject = useRef()
  const main = useRef()
  const title = useRef()
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
    main.current.style.height =
      selectedProject.current.scrollHeight + title.current.scrollHeight + "px"
    smoothScroll.setSize()
  }

  useScrollReset(smoothScroll)

  const onTouchListiner = (
    event,
    eventProperty,
    initialX,
    currentSmallerCallback,
    currentGreaterCallBack
  ) => {
    const currentX = event[eventProperty][0].clientX
    const diff = initialX - currentX
    if (Math.abs(diff) > 20) {
      if (currentX < initialX) {
        currentSmallerCallback(-50)
      } else if (currentX > initialX) {
        currentGreaterCallBack(50)
      }
    }
  }

  useLayoutEffect(() => {
    if (imagesLoaded) {
      setSize()
      const component = main.current
      let initialX = 0

      const onTouchStart = e => {
        initialX = e.touches[0].clientX
      }

      const onTouchEnd = e => {
        setTranslateX(0)
        onTouchListiner(
          e,
          "changedTouches",
          initialX,
          increasePosition,
          decreasePosition
        )
      }

      const onTouchMove = e => {
        onTouchListiner(e, "touches", initialX, setTranslateX, setTranslateX)
      }

      const onKeyDown = e => {
        const { keyCode } = e
        if (keyCode === 37) {
          decreasePosition()
        } else if (keyCode === 39) {
          increasePosition()
        }
      }

      component.addEventListener("touchstart", onTouchStart)
      component.addEventListener("touchend", onTouchEnd)
      component.addEventListener("touchmove", onTouchMove)
      window.addEventListener("keydown", onKeyDown)
      window.addEventListener("resize", setSize)
      return () => {
        component.removeEventListener("touchstart", onTouchStart)
        component.removeEventListener("touchend", onTouchEnd)
        component.removeEventListener("touchmove", onTouchMove)
        window.removeEventListener("keydown", onKeyDown)
        window.removeEventListener("resize", setSize)
      }
    }
  }, [position, imagesLoaded, lang.lang])

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
                lang={lang}
                key={e.title}
                project={e}
                ref={selectedProject}
                isSelected={i === position}
                style={{
                  transform: `translateX(${i -
                    position}00%) translateX(${translateX}px) scale(${
                    i === position ? 1 : 0.9
                  })`,
                  opacity: i === position ? 1 : 0,
                }}
              />
            ))}
          </ProjectsContainer>
        </>
      )}
    </Main>
  )
}

export default () => (
  <Context.Consumer>
    {({ smoothScroll, lang }) =>
      smoothScroll && <Projects smoothScroll={smoothScroll} lang={lang} />
    }
  </Context.Consumer>
)
