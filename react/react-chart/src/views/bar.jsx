import { useEffect, useState } from "react";
import { UserData } from "../data.js";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function BarPage() {
  const [data, setData] = useState({
    labels: UserData.map(item => item.year),
    datasets: [{
      label: "User Gained",
      data: UserData.map(item => item.usergain),
      backgroundColor: ['red', 'blue', 'yellow','green','brown'],
      borderColor: "black",
      borderWidth: 2,
      borderRadius: 4
    }]
  });

  return (
    <>
      <h1>Bar</h1>
      <div style={{width: 700}}>
        <Bar data={data} />
      </div>
    </>
  );
}
