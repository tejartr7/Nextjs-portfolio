import styled from "styled-components";
const Icon = styled.a`
  text-decoration: none;
  margin: 5px;
  & svg {
    height: 30px;
    width: 30px;
    color: #ffff00;
  }
  & svg:hover{
    height: 40px;
    width: 40px;
  }
`;
export default Icon;