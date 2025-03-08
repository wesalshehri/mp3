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

const CertList = styled.div`
    max-width: 700px;
    width: 90%;
    text-align: left;
    line-height: 1.6;
    margin-top: 20px;
`;

const CertItem = styled.div`
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

const Issuer = styled.p`
    margin: 5px 0;
    font-size: 1.2rem;
    font-weight: bold;
`;

const Year = styled.p`
    margin: 0;
    font-size: 1rem;
    color: #666;
`;

export default function Certifications() {
    return (
        <Container>
            <h2>Certifications</h2>
            <CertList>
                <CertItem>
                    <Title>AWS Certified Cloud Practitioner</Title>
                    <Issuer>Amazon Web Services</Issuer>
                    <Year>2024</Year>
                </CertItem>

                <CertItem>
                    <Title>Google Advanced Data Analytics Professional Certificate</Title>
                    <Issuer>Google & Coursera</Issuer>
                    <Year>2024</Year>
                </CertItem>

                <CertItem>
                    <Title>HackerRank SQL (Advanced) Certification</Title>
                    <Issuer>HackerRank</Issuer>
                    <Year>2023</Year>
                </CertItem>
            </CertList>
        </Container>
    );
}
