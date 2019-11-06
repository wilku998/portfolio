import React, { useRef, useLayoutEffect } from "react"
import style, { Content, Item, Desc, ListItem } from "./styleSkills"
import Image from "../../../abstracts/Image"
import Title from "../../../abstracts/Title"

const Skills = ({ className, smoothScroll, skills }) => {
  const frontend = useRef();
  const backend = useRef();
  const refs = [frontend, backend]

  useLayoutEffect(() => {
    refs.forEach(ref => {
      smoothScroll.addItem({
        el: ref.current,
        maxValue: 50,
        ease: .1,
        setTransform: val => `translate3d(0,-${val}px,0)`,
      })
    })
  }, [])
  return (
    <section className={className}>
      <Content>
        {skills.map((skill, i) => (
          <Item ref={refs[i]} key={skill.title}>
            <Title>
              <span>{skill.title}</span>
            </Title>
            <Desc>{skill.description}</Desc>
            <ul>
              {skill.technologies.map(e => (
                <ListItem key={e}>{e}</ListItem>
              ))}
            </ul>
          </Item>
        ))}
      </Content>
      <Image smoothScroll={smoothScroll} src="/images/skills-background.jpg" />
    </section>
  )
}

export default style(Skills)
