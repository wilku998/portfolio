import React from "react"
import style, {
  TopBlock,
  Content,
  ShortBio,
  Title,
  BioTitle,
  SubTitle,
} from "./headerStyles"
import RotatedTitle from "../../../abstracts/RotatedTitle"

const Header = ({ className }) => {
  return (
    <header className={className}>
      <TopBlock />
      <Content>
        <Title>
          Bartosz Wilk
          <SubTitle>Junior frontend developer</SubTitle>
        </Title>
        <div>
          <BioTitle>O mnie</BioTitle>
          <ShortBio>
            Tworzę strony oraz aplikacje internetowe korzystając z najnowszych
            technologii.
          </ShortBio>
        </div>
      </Content>
      <RotatedTitle>Portfolio</RotatedTitle>
    </header>
  )
}

export default style(Header)
