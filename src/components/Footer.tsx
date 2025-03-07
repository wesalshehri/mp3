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
            <p>© 2024 My React Resume | <a href="#">Credits</a></p>
        </FooterContainer>
    );
}
