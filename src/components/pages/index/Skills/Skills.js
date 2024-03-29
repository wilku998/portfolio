import React from "react"
import style, { Content, Item, Desc, ListItem } from "./styleSkills"
import Image from "../../../abstracts/Image"
import Title from "../../../abstracts/Title"

const Skills = ({ className, smoothScroll, skills }) => {
  return (
    <section className={className}>
      <Content>
        {skills.map((skill, i) => (
          <Item key={skill.title}>
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
      <Image smoothScroll={smoothScroll} src="/images/skills.jpg" />
    </section>
  )
}

export default style(Skills)
