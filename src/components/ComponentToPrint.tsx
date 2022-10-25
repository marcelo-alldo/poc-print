import React, { forwardRef } from "react";

interface ComponentToPrintPros {
  title: string;
}

const ComponentToPrint = forwardRef<HTMLDivElement, ComponentToPrintPros>(
  (props, ref) => {
    return (
      <div style={{ display: "none" }}>
        <div ref={ref}>
          <h1>Aqui o que vai imprimir</h1>
          <div>{props.title}</div>
        </div>
      </div>
    );
  }
);

export default ComponentToPrint;
