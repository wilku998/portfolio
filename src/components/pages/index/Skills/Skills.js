import React, { useRef, useLayoutEffect } from "react"
import style, {
  OddItemImage,
  EvenItemImage,
  OddItemTitle,
  OddItemList,
  OddItemDesc,
  EvenItemTitle,
  EvenItemList,
  EvenItemDesc,
  EvenItem,
  OddItem,
  SkillsTitle,
} from "./styleSkills"
import Image from "../../../abstracts/Image"
import chooseLang from "../../../../functions/chooseLang"

const Skills = ({ className, smoothScroll, skills, lang }) => {
  const isEven = n => n % 2 === 0

  return (
    <div className={className}>
      <SkillsTitle>
        {chooseLang({ pl: "Umiejętności", en: "Skills" }, lang)}
      </SkillsTitle>
      {skills.map(({ title, description, image, technologies }, i) =>
        isEven(i + 1) ? (
          <EvenItem key={title}>
            <EvenItemTitle>
              <span>{title}</span>
            </EvenItemTitle>
            <EvenItemDesc>{description}</EvenItemDesc>
            <EvenItemList>
              {technologies.map(e => (
                <li key={e}>{e}</li>
              ))}
            </EvenItemList>
            <EvenItemImage>
              <Image smoothScroll={smoothScroll} src={image} />
            </EvenItemImage>
          </EvenItem>
        ) : (
          <OddItem key={title}>
            <OddItemImage>
              <Image smoothScroll={smoothScroll} src={image} />
            </OddItemImage>
            <OddItemTitle>
              <span>{title}</span>
            </OddItemTitle>
            <OddItemDesc>{description}</OddItemDesc>
            <OddItemList>
              {technologies.map(e => (
                <li key={e}>{e}</li>
              ))}
            </OddItemList>
          </OddItem>
        )
      )}
    </div>
  )
}

export default style(Skills)
