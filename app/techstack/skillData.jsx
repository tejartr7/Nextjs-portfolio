import styled from "styled-components";

const SkillData = styled.div`
  display: flex;

  & .skill-data__icons {
    margin: 10px;

    @media only screen and (max-width: 600px) {
      display: block; // Change to block for small screens
    }

    @media only screen and (min-width: 601px) {
      display: flex; // Change to flex for medium and large screens
    }
  }

  & .skill-data__icons * {
    margin: 5px;
  }

  & .skill-data_skill-names {
    display: flex;
    margin-left:20px;
  }

  @media only screen and (max-width: 600px) {
    & .skill-data_skill-names {
      flex-direction: column;
    }
  }
`;

export default SkillData;
