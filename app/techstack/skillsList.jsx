import { AiFillHtml5 } from "react-icons/ai";
import { DiReact, DiCss3 } from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiNodedotjs,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiFirebase,

} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import Icon from "./Icon";
import SkillData from "./skillData";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
const skillList = {
  languages: (
    <SkillData>
      <div className="skill-data__icons">
        <Icon>
          <IoLogoJavascript />
        </Icon>
        <Icon>
          <FaJava />
        </Icon>
        <Icon>
          <SiPython />
        </Icon>
        <Icon>
          <SiCplusplus />
        </Icon>
        <Icon>
          <SiTypescript />
        </Icon>
      </div>
      <div className="skill-data_skill-names">
        <ul>
          <li>JavaScript</li>
          <li>Java</li>
          <li>TypeScript</li>
        </ul>
        <ul>
          <li>Python</li>
          <li>C/C++</li>
        </ul>
      </div>
    </SkillData>
  ),
  frontend: (
    <SkillData>
      <div className="skill-data__icons">
        <Icon>
          <DiReact />
        </Icon>
        <Icon>
          <SiTypescript />
        </Icon>
        <Icon>
          <SiNextdotjs />
        </Icon>
        <Icon>
          <AiFillHtml5 />
        </Icon>
        <Icon>
          <DiCss3 />
        </Icon>
        <Icon>
          <FaBootstrap />
        </Icon>
        <Icon>
          <SiTailwindcss />
        </Icon>
      </div>
      <div className="skill-data_skill-names">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Tailwind Css</li>
        </ul>
        <ul>
          <li>React.js</li>
          <li>Next.js</li>
          <li>TypeScript</li>
        </ul>

      </div>
    </SkillData>
  ),
  backend: (
    <SkillData>
      <div className="skill-data__icons">
        <Icon>
          <SiNodedotjs />
        </Icon>
        <Icon>
          <SiExpress />
        </Icon>
      </div>
      <div className="skill-data_skill-names">
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
        <ul>
          <li>REST APIs</li>
        </ul>
      </div>
    </SkillData>
  ),


  db: (
    <SkillData>
      <div className="skill-data__icons">
        <Icon>
          <SiMongodb />
        </Icon>
        <Icon>
          <SiFirebase />
        </Icon>
      </div>
      <div className="skill-data_skill-names">
        <ul>
          <li>MongoDB Firebase</li>
        </ul>
      </div>
    </SkillData>
  ),
};
export default skillList;