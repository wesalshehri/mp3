import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: white;
    padding: 10px;
    text-align: center;
    width: 100%;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <p>© 2025 My Resume | <a href="#">Credits</a></p>
        </FooterContainer>
    );
}

