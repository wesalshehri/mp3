import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #34495e;
    color: white;
    padding: 10px 20px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px; 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; 
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1 style={{ fontSize: "20px", margin: 0 }}>My React Resume</h1>
        </StyledHeader>
    );
}
