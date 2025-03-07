import { useState } from "react";
import styled from "styled-components";

// Styled container to properly center the calculator
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px); /* Ensures it takes full viewport height minus navbar */
  width: 100vw;
  max-width: 100%;
  padding: 20px;
  text-align: center;
  margin: 0 auto;
`;

// Styled wrapper for input fields and buttons
const CalculatorWrapper = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export default function Calculator() {
    const [num1, setNum1] = useState<number | "">("");
    const [num2, setNum2] = useState<number | "">("");
    const [result, setResult] = useState<number | string>("");

    function calculate(operation: string) {
        if (num1 === "" || num2 === "") return;
        const a = Number(num1);
        const b = Number(num2);
        let res;
        switch (operation) {
            case "+": res = a + b; break;
            case "-": res = a - b; break;
            case "*": res = a * b; break;
            case "/": res = b !== 0 ? a / b : "Error"; break;
            case "**": res = Math.pow(a, b); break;
            default: res = "Invalid Operation";
        }
        setResult(res);
    }

    function clearFields() {
        setNum1("");
        setNum2("");
        setResult("");
    }

    return (
        <Container>
            <CalculatorWrapper>
                <h2>Calculator</h2>
                <div>
                    <input type="number" value={num1} onChange={(e) => setNum1(e.target.valueAsNumber || "")} />
                    <input type="number" value={num2} onChange={(e) => setNum2(e.target.valueAsNumber || "")} />
                </div>
                <div>
                    <button onClick={() => calculate("+")}>+</button>
                    <button onClick={() => calculate("-")}>-</button>
                    <button onClick={() => calculate("*")}>*</button>
                    <button onClick={() => calculate("/")}>/</button>
                    <button onClick={() => calculate("**")}>^</button>
                    <button onClick={clearFields}>Clear</button>
                </div>
                <h3>Result: {result}</h3>
            </CalculatorWrapper>
        </Container>
    );
}
