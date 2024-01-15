import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  });
  return (
    <div className="aali_tm_section" id="portfolio">
      <div className="aali_tm_skills">
        
        <span
          className="border moving_effect"
          data-direction="x"
          data-reverse="yes"
        /> 
      </div>
    </div>
  );
};

export default Skills;
{/* <div className="container">
<div className="skills_inner">
  <div className="left wow fadeInLeft" data-wow-duration="1s">
    <div
      className="aali_tm_main_title"
      data-text-align="left"
      data-color="light"
    >
      <span>My Skills</span>
      <h3>
        You Can Imagine What
        <br /> I Can Do
      </h3>
       <p>
        I am in the process of developing an impressive and visually appealing
        personal resume portfolio template that reflects my professional expertise
        in Instagram marketing and web development. This template will be visually
        sophisticated, technologically advanced, and responsive, offering multiple
        functionalities to showcase my creative skills and professional achievements.
      </p> 
    </div>
  </div>
  <div className="right wow fadeInRight" data-wow-duration="1s">
    <div className="dodo_progress">
      <div className="progress_inner skillsInner___" data-value={86}>
        <span>
          <span className="label">Web Development</span>
          <span className="number">86%</span>
        </span>
        <div className="background">
          <div className="bar">
            <div className="bar_in" />
          </div>
        </div>
      </div>
      <div className="progress_inner skillsInner___" data-value={90}>
        <span>
          <span className="label">Instagram Marketing</span>
          <span className="number">90%</span>
        </span>
        <div className="background">
          <div className="bar">
            <div className="bar_in" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */}