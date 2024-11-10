import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";
import EarthCanvas from "../canvas/Earth";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 50px 0;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 40px;
  position: relative;
  
  .vertical-timeline-element-content {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
`;

const EarthContainer = styled.div`
  width: 100%;
  height: 500px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 768px) {
    height: 400px;
  }
  
  canvas {
    touch-action: none;  // Prevents unwanted touch behaviors on mobile
  }
`;

const Education = () => {
  if (!education?.length) {
    console.warn('No education data available');
    return null;
  }

  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>

        <TimelineContainer>
          <VerticalTimeline 
            animate={true}
            lineColor="rgba(255, 255, 255, 0.2)"
          >
            {education.map((edu, index) => (
              <EducationCard 
                key={`education-${index}`} 
                education={edu} 
              />
            ))}
          </VerticalTimeline>
        </TimelineContainer>

        <EarthContainer>
          <EarthCanvas />
        </EarthContainer>
      </Wrapper>
    </Container>
  );
};

export default Education;
