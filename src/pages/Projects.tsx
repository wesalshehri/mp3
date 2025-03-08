import { useState } from "react";
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

const CalculatorWrapper = styled.div`
    margin-top: 50px;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 400px;
`;

const InputField = styled.input`
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 80px;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

export default function Projects() {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<string>("");

    function power(base: number, exponent: number) {
        if (exponent === 0) return 1;
        let res = 1;
        const absExponent = Math.abs(exponent);
        for (let i = 0; i < absExponent; i++) {
            res *= base;
        }
        return exponent < 0 ? (1 / res).toFixed(6) : res;
    }

    function calculate(operation: string) {
        if (num1 === "" || num2 === "") {
            setResult("Enter numbers");
            return;
        }
        const a = Number(num1);
        const b = Number(num2);
        let res;
        switch (operation) {
            case "+": res = a + b; break;
            case "-": res = a - b; break;
            case "*": res = a * b; break;
            case "/": res = b !== 0 ? a / b : "Error (Div by 0)"; break;
            case "**": res = power(a, b); break;
            default: res = "Invalid Operation";
        }
        setResult(res.toString());
    }

    function clearFields() {
        setNum1("");
        setNum2("");
        setResult("");
    }

    return (
        <Container>
            <h2>Projects</h2>

            <CalculatorWrapper>
                <h2>Calculator</h2>
                <div>
                    <InputField type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                    <InputField type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
                </div>
                <ButtonContainer>
                    <Button onClick={() => calculate("+")}>+</Button>
                    <Button onClick={() => calculate("-")}>-</Button>
                    <Button onClick={() => calculate("*")}>*</Button>
                    <Button onClick={() => calculate("/")}>/</Button>
                    <Button onClick={() => calculate("**")}>^</Button>
                    <Button onClick={clearFields}>Clear</Button>
                </ButtonContainer>
                <h3>Result: {result}</h3>
            </CalculatorWrapper>
        </Container>
    );
}
