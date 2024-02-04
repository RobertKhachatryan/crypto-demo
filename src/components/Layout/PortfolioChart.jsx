import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useCrypto } from "../../context/crypto-context";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PortfolioChart = () => {
  const { assets } = useCrypto();

  const data = {
    labels: assets.map((a) => a.name),
    datasets: [
      {
        label: "$",
        data: assets.map((a) => a.totalAmount.toFixed(2)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        marginTop: "1rem",
        justifyContent: "center",
        height: 400,
      }}
    >
      <Pie data={data} />
    </div>
  );
};
