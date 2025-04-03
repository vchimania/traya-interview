import { useState } from "react";
import { items } from "./App";

export default function Accordion() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleToggle = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="App">
      {items.map((i, index) => (
        <div key={index}>
          <button onClick={() => handleToggle(index)}>{i.conetct}</button>
          {openAccordion === index && <div>{i.conetct}</div>}
        </div>
      ))}
    </div>
  );
}
