import styled from "styled-components";

const ExperienceCard = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;

  & .skills-list__skills {
    display: flex;
    flex-direction: row;
  }

  & button {
    text-decoration: none;
    box-shadow: none;
    border: none;
    padding: 5px 30px;
    background-color: transparent;
    color: #ffffffb5;
    border-bottom: 2px solid #cdb8b88c;
    margin: 0px 10px 0 0px;
    width: 140px;
  }

  & .skills-card__data {
    padding: 40px;
  }

  & .activeSkillSet {
    color: #ffff00;
    border-bottom-color: #ffff00;
    background-color: #122645;
  }

  @media only screen and (max-width: 600px) {
    & {
      flex-direction: row;
    }

    & .skills-list__skills {
      flex-direction: column;
    }

    & .skills-card__data {
      padding: 5px;
    }

    & button {
      border-right: 2px solid #cdb8b88c;
      border-bottom: none;
      width: 100%;
      margin: 0;
    }

    & .activeSkillSet {
      border-right-color: #ffff00;
      border-bottom-color: transparent;
    }
  }
`;

export default ExperienceCard;
