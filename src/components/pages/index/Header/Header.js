import React from "react"
import style, { Content, TitleContainer, Title, SubTitle } from "./headerStyles"

const Header = ({ className }) => (
  <header className={className}>
    <Content>
      <TitleContainer>
        <Title>
          Bartosz Wilk
          <SubTitle>Junior front-end developer</SubTitle>
        </Title>
      </TitleContainer>
    </Content>
  </header>
)

export default style(Header)
