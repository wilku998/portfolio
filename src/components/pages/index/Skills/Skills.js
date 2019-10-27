import React, { useRef, useLayoutEffect } from "react"
import style, {
  SkillsTitle,
  Item,
  FrontedContent,
  BackendContent,
  FrontendImage,
  BackendImage,
  SkillsList,
  FrontendTitle,
  BackendTitle,
} from "./styleSkills"
import Image from "../../../abstracts/Image"

const Skills = ({ className, smoothScroll }) => {
  const frontend = useRef()
  const backend = useRef()

  useLayoutEffect(() => {
    if (smoothScroll) {
      smoothScroll.addItem(frontend.current)
      smoothScroll.addItem(backend.current)
    }
  }, [smoothScroll])

  return (
    <div className={className}>
      <SkillsTitle>Umiejętności</SkillsTitle>
      <Item>
        <FrontendImage>
          <Image
            smoothScroll={smoothScroll}
            src="/images/front-compressed.jpg"
          />
        </FrontendImage>
        <FrontedContent ref={frontend}>
          <FrontendTitle>
            <span>Frontend</span>
          </FrontendTitle>
          <p>
            Dobra znajomość vanilla js, zasad tworzenia semantycznego html,
            flex-boxa oraz flex-grida. Tworzenie aplikacji w reactie z wieloma
            innymi bibliotekami. Wyszukiwanie i rozwiązywanie problemów z
            użyciem dokumentacji.
          </p>
        </FrontedContent>
      </Item>
      <SkillsList>
        <li>ES6 +</li>
        <li>SCSS</li>
        <li>Typescript</li>
        <li>AJAX</li>
        <li>Gatsby.js</li>
        <li>React</li>
        <li>Redux</li>
        <li>MobX</li>
        <li>Styled-components</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Socket.io</li>
        <li>Mongoose</li>
        <li>Rest API</li>
      </SkillsList>
      <Item>
        <BackendContent ref={backend}>
          <BackendTitle>
            <span>Backend</span>
          </BackendTitle>
          <p>
            Tworzenie własnego api obsługującego baze danych. Komunikacja z
            klientem za pomocą websockets.
          </p>
        </BackendContent>
        <BackendImage>
          <Image
            smoothScroll={smoothScroll}
            src="/images/back-compressed.jpg"
          />
        </BackendImage>
      </Item>
    </div>
  )
}

export default style(Skills)
