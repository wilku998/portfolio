import styled from "styled-components"
import { ThreeStripes, Stripe } from '../../../abstracts/Stripes';

export default AboutMe => styled(AboutMe)`
  height: 90rem;
  display: grid;
  grid-template-columns: min-content;
  grid-template-rows: repeat(2, max-content) 1fr;
  position: relative;
`

export const Paragraph = styled.p`
  line-height: 1.6;
  font-size: 1.8rem;
  padding-right: 10rem;
`

export const Block = styled.div`
  justify-self: flex-end;
  grid-column: 2/3;
  grid-row: 1/4;
  position: relative;
  margin: 5rem 0;
  ${({ theme }) => `
    width: ${theme.backgroundBlockWidth};
    background-color: ${theme.colorGrey2};
  `}
`

export const AboutMeThreeStripes = styled(ThreeStripes)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const AboutMeStripe = styled(Stripe)`
  position: absolute;
  left: -4rem;
  top: 50%;
  transform: translateY(-50%);
`;

