import styled from "styled-components"
import { centerAbsolute } from "../../../../styles/mixins"
import { Stripe, ThreeStripes } from "../../../abstracts/Stripes"
import Title from '../../../abstracts/Title';

export default Skills => styled(Skills)`
  width: fit-content;
  margin: 10rem auto 0 auto;
`

export const Content = styled.div`
  max-width: 120rem;
  display: grid;
  grid-template-columns: 1fr 15rem 1fr;
  grid-template-rows: max-content 60rem 15rem 60rem;
  position: relative;
`

export const SkillsTitle = styled(Title)`
  grid-column: 1/4;
  margin-bottom: 5rem;
  text-align: right;
`
export const SecondImageContainer = styled.div`
  position: relative;
  grid-row: 3/5;
  grid-column: 3/4;
`

export const FirstImageContainer = styled.div`
  position: relative;
  grid-row: 2/4;
  grid-column: 1/2;
`

export const SubTitle = styled.h2`
  ${centerAbsolute}
  font-size: 4rem;
  font-weight: 400;
  padding: 0 2rem;
  transform: translate(-50%, -50%) rotate(270deg);
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 53%;
    left: 0;
    width: 100%;
    height: 2px;
    ${({ theme }) => `
      background-color: ${theme.colorGrey6};
    `}
  }
`

export const SubTitleContainer1 = styled.div`
  position: relative;
  grid-column: 2/3;
  grid-row: 2/3;
`

export const SubTitleContainer2 = styled.div`
  position: relative;
  grid-column: 2/3;
  grid-row: 4/5;
`

export const StripeContainer = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  position: relative;
`

export const SkillsStripe = styled(Stripe)`
  ${centerAbsolute}
`

export const List = styled.ul`
  font-size: 2.2rem;
  align-self: center;
`

export const List1 = styled(List)`
  grid-column: 3/4;
  grid-row: 2/3;
`

export const List2 = styled(List)`
  grid-column: 1/2;
  grid-row: 4/5;
  justify-self: end;
  text-align: end;
`

export const ImageCredit = styled.span`
  position: absolute;
  top: calc(100% + .5rem);
  left: 0;
  font-size: 1.4rem;
`;

export const SkillsThreeStripes = styled(ThreeStripes)`
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(-50%);
`;
