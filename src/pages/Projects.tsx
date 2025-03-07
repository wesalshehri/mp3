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


export default function Projects() {
    return (
        <Container>
            <h2>Projects</h2>
            <p>Details about my projects.</p>
        </Container>
    );
}
