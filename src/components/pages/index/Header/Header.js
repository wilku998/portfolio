import React from "react"
import style, { Content, TitleContainer, Title, SubTitle, HeaderStripes } from "./headerStyles"

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
    <HeaderStripes />
  </header>
)

export default style(Header)
