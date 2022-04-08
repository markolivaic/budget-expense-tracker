import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "5px 10%" }}>
      Try saying: <br />
      Add {isIncome ? " Income " : " Expense "}
      for {isIncome ? " 100$ " : " 50$ "}
      in Catergory {isIncome ? " Business " : " House "}
      for {isIncome ? " Monday " : " Friday "}
    </div>
  );
};

export default InfoCard;
