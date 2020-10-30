import React, { useState } from "react";
import DonateForm from "./DonateForm";
import {warnings} from "./warnings";

const CharityForm = () => {
  const [pageNum, setPageNum] = useState(0);

  return (
    <section className="donate-section">
      
        <div className="important-info">
          <h3>Ważne!</h3>
          <p>{warnings[pageNum]}</p>
        </div>

        <div className="form-display">
          <DonateForm page={pageNum} />
        </div>

    </section>
  );
};

export default CharityForm;
