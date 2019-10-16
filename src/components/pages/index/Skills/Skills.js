import React from "react"
import style, {
  SkillsTitle,
  SubTitleContainer1,
  SubTitle,
  SubTitleContainer2,
  StripeContainer,
  SkillsStripe,
  List1,
  List2,
  FirstImageContainer,
  SecondImageContainer,
  ImageCredit,
  Content,
  SkillsThreeStripes,
} from "./styleSkills"

const Skills = ({ className }) => (
  <section className={className}>
    <SkillsTitle>Umiejętności</SkillsTitle>
    <Content>
      <FirstImageContainer>
        <img alt="żarówka" src="/images/bulb.jpg" />
        <ImageCredit>
          Fotografia wykonana przez ActionVance na Unsplash
        </ImageCredit>
      </FirstImageContainer>
      <SubTitleContainer1>
        <SubTitle>Frontend</SubTitle>
      </SubTitleContainer1>
      <List1>
        <li>ES6+</li>
        <li>SCSS</li>
        <li>AJAX</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Redux</li>
        <li>MobX</li>
        <li>Styled-components</li>
        <li>Gatsby.js</li>
      </List1>

      <StripeContainer>
        <SkillsStripe />
      </StripeContainer>
      <SecondImageContainer>
        <img alt="architektura" src="/images/architecture.jpg" />
        <ImageCredit>Fotografia wykonana przez Victor na Unsplash</ImageCredit>
      </SecondImageContainer>
      <SubTitleContainer2>
        <SubTitle>Backend</SubTitle>
      </SubTitleContainer2>
      <List2>
        <li>Rest API</li>
        <li>Graph.ql</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Socket.io</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </List2>
      <SkillsThreeStripes />
    </Content>
  </section>
)

export default style(Skills)
