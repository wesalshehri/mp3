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

const EducationList = styled.div`
    max-width: 700px;
    width: 90%;
    text-align: left;
    line-height: 1.6;
    margin-top: 20px;
`;

const EducationItem = styled.div`
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
`;

const SchoolName = styled.h3`
    margin: 0;
    font-size: 1.5rem;
`;

const Degree = styled.p`
    margin: 5px 0;
    font-size: 1.2rem;
    font-weight: bold;
`;

const Year = styled.p`
    margin: 0;
    font-size: 1rem;
    color: #666;
`;

export default function Education() {
    return (
        <Container>
            <h2>Education</h2>
            <EducationList>
                <EducationItem>
                    <SchoolName>Boston University</SchoolName>
                    <Degree>Bachelor of Science in Computer Science</Degree>
                    <Year>2021 - 2025</Year>
                </EducationItem>

                <EducationItem>
                    <SchoolName>Neyar High School</SchoolName>
                    <Degree>High School Diploma</Degree>
                    <Year>2017 - 2020</Year>
                </EducationItem>
            </EducationList>
        </Container>
    );
}
