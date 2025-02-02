import Article from "components/Article";
import React from "react";
import {
  FeaturedProjectsContainer,
  ProjectImgContainer,
} from "styles/Featured.style";
import { Button, FlexContainer } from "styles/Global.style";
import { FeaturedProjectsData } from "utils/Data";

const FeaturedProjects = () => {
  return (
    <FeaturedProjectsContainer>
      <h1>Featured Projects</h1>
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
  );
};

export default FeaturedProjects;
