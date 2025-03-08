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

const SkillsList = styled.div`
    max-width: 700px;
    width: 90%;
    text-align: left;
    line-height: 1.6;
    margin-top: 20px;
`;

const SkillsItem = styled.div`
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

const Description = styled.p`
    margin-top: 10px;
    font-size: 1.2rem;
`;

export default function Skills() {
    return (
        <Container>
            <h2>Skills</h2>
            <SkillsList>

                <SkillsItem>
                    <Title>Programming Languages</Title>
                    <Description>Python, JavaScript, C++, SQL</Description>
                </SkillsItem>

                <SkillsItem>
                    <Title>Web Development</Title>
                    <Description>React, Node.js, Flask, Express.js</Description>
                </SkillsItem>

                <SkillsItem>
                    <Title>Cybersecurity</Title>
                    <Description>Penetration Testing, OWASP, Encryption</Description>
                </SkillsItem>

                <SkillsItem>
                    <Title>Tools & Technologies</Title>
                    <Description>Git, Docker, AWS, Linux, PostgreSQL</Description>
                </SkillsItem>

            </SkillsList>
        </Container>
    );
}
