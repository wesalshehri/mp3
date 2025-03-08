import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
    padding: 40px 20px;
    text-align: center;
    margin: 120px auto 0;
`;
const ExperienceList = styled.div`
    max-width: 700px;
    width: 90%;
    text-align: left;
    line-height: 1.6;
    margin-top: 20px;
`;

const ExperienceItem = styled.div`
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 1.5rem;
`;

const Position = styled.p`
    margin: 5px 0;
    font-size: 1.2rem;
    font-weight: bold;
`;

const Year = styled.p`
    margin: 0;
    font-size: 1rem;
    color: #666;
`;

const Description = styled.p`
    margin-top: 10px;
`;

export default function Experience() {
    return (
        <Container>
            <h2>Experience</h2>
            <ExperienceList>

                <ExperienceItem>
                    <Title>Software Development Intern</Title>
                    <Position>TechNova Solutions</Position>
                    <Year>Summer 2023</Year>
                    <Description>
                        Developed a full-stack web application using React and Node.js to optimize internal data management.
                        Improved API response times by 30% by implementing caching strategies and database optimizations.
                        Collaborated with a team of engineers to deploy cloud-based solutions using AWS.
                    </Description>
                </ExperienceItem>

                <ExperienceItem>
                    <Title>AI-Powered Chatbot Developer</Title>
                    <Position>Freelance Project</Position>
                    <Year>2023</Year>
                    <Description>
                        Built an AI-powered chatbot using Python and OpenAI API to assist users with programming questions.
                        Trained the model with over 50,000 data points to improve accuracy in answering coding-related queries.
                        Deployed the chatbot as a web application using Flask and React.
                    </Description>
                </ExperienceItem>

                <ExperienceItem>
                    <Title>Cybersecurity Intern</Title>
                    <Position>SecuraTech Solutions</Position>
                    <Year>Summer 2022</Year>
                    <Description>
                        Assisted in penetration testing and vulnerability assessments for client applications.
                        Helped design automated scripts for security scanning using Python.
                        Provided recommendations for improving application security based on OWASP guidelines.
                    </Description>
                </ExperienceItem>

            </ExperienceList>
        </Container>
    );
}

