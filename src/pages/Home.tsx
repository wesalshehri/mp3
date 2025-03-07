
import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 80px);
    width: 100vw;
    max-width: 100%;
    padding: 20px;
    text-align: center;
    margin: 0 auto;
`;

export default function Home() {
    return (
        <Container>
            <h2>Welcome to My Online Resume</h2>
            <p>This website showcases my education, experience, certifications, and projects.</p>
        </Container>
    );
}
