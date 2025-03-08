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


const ContentWrapper = styled.div`
    max-width: 700px; 
    width: 90%; 
    text-align: center;
    line-height: 1.6; 
`;

export default function Home() {
    return (
        <Container>
            <h2>Welcome to My Online Resume!</h2>
            <ContentWrapper>
                <p>
                    Hi! I am Wesam Alshehri. I'm currently a senior at Boston University studying Computer Science.
                    This portfolio showcases my projects, experiences, and achievements as I continue learning and growing in the field.
                </p>
                <p>
                    Throughout my academic journey, I've worked on various technical projects, including web development,
                    cybersecurity, and AI-based applications. I am passionate about problem-solving and continuously
                    expanding my knowledge in the field of technology.
                </p>
                <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "20px" }}>
                    <strong>Disclaimer:</strong> This website has been created for academic purposes as part of a class project.
                    The content, including projects and experiences, may not reflect real-world work or actual employment history.
                </p>
            </ContentWrapper>
        </Container>
    );
}
