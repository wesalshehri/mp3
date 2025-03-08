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

const RefList = styled.div`
    max-width: 700px;
    width: 90%;
    text-align: left;
    line-height: 1.6;
    margin-top: 20px;
`;

const RefItem = styled.div`
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
`;

const Name = styled.h3`
    margin: 0;
    font-size: 1.5rem;
`;

const Position = styled.p`
    margin: 5px 0;
    font-size: 1.2rem;
    font-weight: bold;
`;

const Contact = styled.p`
    margin: 0;
    font-size: 1rem;
    color: #666;
`;

export default function References() {
    return (
        <Container>
            <h2>References</h2>
            <RefList>
                <RefItem>
                    <Name>Jane Doe</Name>
                    <Position>Senior Software Engineer, Google</Position>
                    <Contact>Email: janedoe@google.com | Phone: (650) 555-5678</Contact>
                </RefItem>

                <RefItem>
                    <Name>Madonna</Name>
                    <Position>Tech Industry Advisor & Innovation Consultant</Position>
                    <Contact>Email: madonna@musictech.com | Phone: (212) 555-1983</Contact>
                </RefItem>

                <RefItem>
                    <Name>References available upon request</Name>
                    <Contact>If needed, additional references can be provided.</Contact>
                </RefItem>
            </RefList>
        </Container>
    );
}
