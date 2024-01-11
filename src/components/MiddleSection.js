import React from "react";
import ReactApexChart from "react-apexcharts";

import charts from "../assets/charts.svg";

import { chartThreeData } from "../data/chartsData";

const MiddleSection = () => {
  return (
    <div className="grid gap-3 grid-cols-4 my-5">
      <section className="h-full col-span-3 rounded-lg border-solid border-2 px-5 py-2">
        <p className="flex gap-2 text-second-h text-[16px] font-[600]">
          Evolution des avis positifs <img src={charts} alt="message_icon" />
        </p>
        <ReactApexChart
          options={chartThreeData.options}
          series={chartThreeData.series}
          width="100%"
        />
      </section>
      <section className="h-full flex flex-col justify-between rounded-lg border-solid border-2 px-5 py-2 drop-shadow-md bg-[#fff] py-5">
        <div>
          <p className="flex gap-2 text-second-h text-[16px] font-[600]">
            ✨ Analyse générée par IA
          </p>
          <ul>
            <li className="text-[14px] font-[500]">
              Plusieurs nouveaux avis portent sur la catégorie{" "}
              <p className="text-[16px] font-[600]">Service client.</p>
            </li>
            <li className="text-[14px] font-[500]">
              Le mot-clé le plus utitlisé pendant cette période est{" "}
              <p className="text-[16px] font-[600]">Livraison.</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end gap-2 text-fourth-h font-[700] text-[14px]">
          <section className="flex items-center gap-3 rounded-lg border-solid border-gradient-text border-2 p-2 drop-shadow-md bg-[#fff]">
            <p className="text-first-h bg-clip-text font-[700] px-3">
              ✨ Générer rapport IA
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default MiddleSection;
