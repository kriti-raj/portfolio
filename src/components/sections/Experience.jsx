import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../Cards/ExperienceCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
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

const Title = styled.div`
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

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  
  .vertical-timeline-element-content {
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 2em 3em !important;
  }

  .vertical-timeline-element--work .vertical-timeline-element-content {
    border-top: 3px solid ${({ theme }) => theme.primary};
  }
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc>

        <TimelineContainer>
          <VerticalTimeline>
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={exp}
              />
            ))}
          </VerticalTimeline>
        </TimelineContainer>
      </Wrapper>
    </Container>
  );
};

export default Experience;
