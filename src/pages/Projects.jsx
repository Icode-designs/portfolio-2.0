import Article from "components/Article";
import React from "react";

//import styles
import { ProjectImgContainer } from "styles/Featured.style";
import { Button, FlexContainer, SectionContainer } from "styles/Global.style";
import { ProjectsContainer } from "styles/Projects.style";

//import data
import { ProjectsData } from "utils/Data";

const Projects = () => {
  return (
    <SectionContainer>
      <h1>Check out my projects🧐</h1>
      <ProjectsContainer>
        {ProjectsData.map((data, index) => {
          return (
            <div key={index}>
              <ProjectImgContainer>
                <img src={data.img} alt="project-image" />
              </ProjectImgContainer>
              <Article headerText={data.heading} headerParagraph={data.desc}>
                <FlexContainer $justify="center" $gap="0.5rem">
                  <Button>
                    <a href={data.liveSite}>View Site</a>
                  </Button>
                  <Button>
                    <a href={data.git}>View Git</a>
                  </Button>
                </FlexContainer>
              </Article>
            </div>
          );
        })}
      </ProjectsContainer>
    </SectionContainer>
  );
};

export default Projects;
