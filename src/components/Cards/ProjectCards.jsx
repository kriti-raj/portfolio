/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  cursor: default;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.primary + 25};
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin: 0;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin-bottom: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 12px;
  margin-top: auto;
`;

const Button = styled.a`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.primary + 15 : theme.card};
  border: 1.5px solid ${({ theme }) => theme.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.primary + 25 : theme.card + 25};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <Card>
      <Image
        src={project.image}
        alt={project.title || "project image"}
        onError={(e) => {
          e.target.src = "/fallback-project-image.png";
        }}
      />
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
        <Tags>
          {project.tags?.map((tag, index) => (
            <Tag key={`tag-${index}`}>{tag}</Tag>
          ))}
        </Tags>
      </Details>
      <ButtonGroup>
        {project.github && (
          <Button
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            <FaGithub /> Code
          </Button>
        )}
        {project.demo && (
          <Button href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo <FaExternalLinkAlt />
          </Button>
        )}
      </ButtonGroup>
    </Card>
  );
};

export default ProjectCard;
