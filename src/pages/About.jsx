import Article from "components/Article";
import React from "react";
import { AboutContainer } from "styles/About.style";
import { SectionContainer } from "styles/Global.style";

const About = () => {
  const aboutHeader = <>Here's a little something about me</>;
  const aboutParagraph = (
    <>
      As a Lagos-based web developer, I'm excited to share my journey of growth
      and exploration. My passion for front-end development and React has driven
      me to tackle increasingly complex challenges. One of my notable projects
      involved improving the responsiveness of a popular e-commerce site. It was
      a tough nut to crack, but the sense of accomplishment I felt when it was
      completed was a huge confidence booster.
      <br />
      <br /> Throughout my journey, I've been fortunate to have mentors and
      peers who've offered valuable guidance and support. Their influence has
      helped me develop a growth mindset, and I've learned to approach problems
      with a logical and methodical mindset.
      <br />
      <br /> My exploration of trading has also been an interesting journey.
      It's taught me valuable skills like discipline, strategic thinking, and
      adaptability – all of which have been surprisingly transferable to my
      development work.
      <br />
      <br />
      As I continue to grow and learn, I'm reminded of the importance of
      community and collaboration. Being part of a vibrant community of
      developers has been incredibly enriching, and I'm excited to contribute my
      skills and experience to build innovative solutions that make a real
      impact.
    </>
  );
  return (
    <SectionContainer>
      <AboutContainer>
        <Article headerText={aboutHeader} headerParagraph={aboutParagraph} />
      </AboutContainer>
    </SectionContainer>
  );
};

export default About;
