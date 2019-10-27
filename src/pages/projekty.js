import React, { useState, useRef, useLayoutEffect, useEffect } from "react"
import Project from "../components/pages/projekty/Project"
import styled from "styled-components"
import projectsData from "../projectsData"
import {
  TitleContainer,
  MoveIconLeft,
  MoveIconRight,
  Title,
  MoveIconContainer,
} from "../components/pages/projekty/styleProjects"
import { SmoothScrollContext } from "../layouts"

const Main = styled.main`
  overflow: hidden;
  ${({ theme }) => `
    margin-top: 10rem
  `}
`

const ProjectsContainer = styled.div`
  position: relative;
`

const Projects = ({ smoothScroll }) => {
  const [position, setPosition] = useState(0)
  const [shouldRender, setShouldRender] = useState(false)
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
    if (shouldRender && smoothScroll) {
      setSize();
    }
    window.addEventListener("resize", setSize)
    return () => window.removeEventListener("resize", setSize)
  }, [selectedProject.current, shouldRender, smoothScroll])

  useEffect(() => {
    const images = []
    projectsData.forEach(project => project.images.forEach(e => images.push(e)))
    let loadedImages = 0
    images.forEach(imgUrl => {
      let img = new Image()
      img.src = imgUrl
      img.onload = () => {
        loadedImages++
        if (loadedImages === images.length) {
          setShouldRender(true)
        }
      }
    })
  }, [])

  return (
    <Main ref={main}>
      {shouldRender && (
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
            <Title>
              <span>{projectsData[position].title}</span>
            </Title>
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
    {smoothScroll => <Projects smoothScroll={smoothScroll} />}
  </SmoothScrollContext.Consumer>
)
