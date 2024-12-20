import React, { useState } from "react";

const Calculator = () => {
  const [data, setData] = useState(""); // For input and operations
  const [result, setResult] = useState(""); // For calculation result

  const getValue = (event) => {
    setData((prev) => prev + event.target.value);
  };

  const calculation = () => {
    try {
      if (data === "") {
        setResult("Error");
        return;
      }

      // Handle special cases
      if (data.includes("/0") && !data.includes("/0.")) {
        setResult(data === "0/0" ? "NaN" : "Infinity");
        return;
      }

      // Evaluate the expression safely
      const evalResult = eval(data); // eval is used cautiously here
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setData("");
    setResult("");
  };

  const back = () => {
    setData((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <div className="container">
        <div>
          <input type="text" placeholder="0" value={data} readOnly />
        </div>
        <div>
          <div>{result && <div>{result}</div>}</div>
        </div>
        <br />

        {/* Buttons */}
        <button onClick={getValue} value="(">
          (
        </button>
        <button onClick={getValue} value=")">
          )
        </button>
        <button onClick={getValue} value="%">
          %
        </button>
        <button onClick={clear}>C</button>

        <button onClick={getValue} value="7">
          7
        </button>
        <button onClick={getValue} value="8">
          8
        </button>
        <button onClick={getValue} value="9">
          9
        </button>
        <button onClick={getValue} value="*">
          *
        </button>

        <button onClick={getValue} value="4">
          4
        </button>
        <button onClick={getValue} value="5">
          5
        </button>
        <button onClick={getValue} value="6">
          6
        </button>
        <button onClick={getValue} value="-">
          -
        </button>

        <button onClick={getValue} value="1">
          1
        </button>
        <button onClick={getValue} value="2">
          2
        </button>
        <button onClick={getValue} value="3">
          3
        </button>
        <button onClick={getValue} value="+">
          +
        </button>

        <button onClick={getValue} value="0">
          0
        </button>
        <button onClick={back}>Back</button>
        <button onClick={calculation}>=</button>
        <button onClick={getValue} value="/">
          /
        </button>
      </div>
    </>
  );
};

export default Calculator;
