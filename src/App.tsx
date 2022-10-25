import React, { useRef } from "react";
import "./App.css";
import ComponentToPrint from "./components/ComponentToPrint";
import ReactToPrint from "react-to-print";

function App() {
  let componentRef: any = useRef();

  return (
    <div>
      <header className="App-header">
        <p>
          <ReactToPrint
            trigger={() => <button>Imprimir!</button>}
            content={() => componentRef.current}
          />
          <ComponentToPrint ref={componentRef} title={"Teste de title"} />
        </p>
      </header>
    </div>
  );
}

export default App;
