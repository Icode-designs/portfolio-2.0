import Article from "components/Article";
import React from "react";

//imports styles
import {
  FeaturedProjectsContainer,
  ProjectImgContainer,
} from "styles/Featured.style";
import { Button, FlexContainer, SectionContainer } from "styles/Global.style";

//import data
import { FeaturedProjectsData } from "utils/Data";

const FeaturedProjects = () => {
  return (
    <SectionContainer>
      <h1>Featured Projects</h1>
      <FeaturedProjectsContainer>
        {FeaturedProjectsData.map((data, index) => {
          return (
            <div key={index}>
              <ProjectImgContainer>
                <img src={data.img} alt="project-image" />
              </ProjectImgContainer>
              <Article headerText={data.heading} headerParagraph={data.desc} />
              <FlexContainer $justify="center" $gap="0.5rem">
                <Button>
                  <a href={data.liveSite}>View Site</a>
                </Button>
                <Button>
                  <a href={data.git}>View Git</a>
                </Button>
              </FlexContainer>
            </div>
          );
        })}
      </FeaturedProjectsContainer>
    </SectionContainer>
  );
};

export default FeaturedProjects;
