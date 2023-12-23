"use client"
import { useState } from "react";
import styled from "styled-components";
import skillList from "./skillsList";
import SkillsCard from "./skillsCard";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Skills = () => {
    const [skillSet, setSkillSet] = useState(() => skillList.languages); // Initialize state with a function
    const [activeSkillSet, setActiveSkillSet] = useState("languages");

    const selectHandler = (event) => {
        setSkillSet(() => skillList[event.target.value]);
        setActiveSkillSet(event.target.value);
    };

    return (
        <div className="font-Poppins"><h1 className="text-center text-5xl font-Merriweather m-4 p-2 font-bold" style={{ color: '#ffff00' }}>Skills</h1><CenteredContainer>
            <SkillsCard>
                <div className="skills-list__skills text-xl">
                    <button
                        onClick={selectHandler}
                        className={activeSkillSet === "languages" ? "activeSkillSet font-Merriweather" : "font-Merriweather"}
                        value="languages"
                    >
                        Programming Languages
                    </button>
                    <button
                        onClick={selectHandler}
                        className={activeSkillSet === "backend" ? "activeSkillSet font-Merriweather" : "font-Merriweather"}
                        value="backend"
                    >
                        Backend
                    </button>
                    <button
                        onClick={selectHandler}
                        className={activeSkillSet === "frontend" ? "activeSkillSet font-Merriweather" : "font-Merriweather"}
                        value="frontend"
                    >
                        Frontend
                    </button>
                    <button
                        onClick={selectHandler}
                        className={activeSkillSet === "db" ? "activeSkillSet font-Merriweather" : "font-Merriweather"}
                        value="db"
                    >
                        Databases
                    </button>
                </div>
                <div className="skills-card__data">
                    {/* Render the skillSet JSX element directly */}
                    {skillSet}
                </div>
            </SkillsCard>
        </CenteredContainer></div>
    );
};

export default Skills;
