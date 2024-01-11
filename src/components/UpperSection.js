import ReactApexChart from "react-apexcharts";

//Assets
import message from "../assets/message.svg";
import upperArrow from "../assets/upperArrow.svg";
import rightArrow from "../assets/rightArrow.svg";

import charts from "../assets/charts.svg";

//charts data
import { chartOneData, chartTwoData } from "../data/chartsData";

const UpperSection = () => {
  return (
    <div>
      <div className="grid gap-3 grid-cols-3">
        <section className="flex flex-col align-baseline gap-5">
          <div className="rounded-lg border-solid border-2 px-5 py-2">
            <p className="flex gap-2 text-second-h text-[16px] font-[600]">
              Avis positifs <img src={message} alt="message_icon" />
            </p>
            <p>48</p>
            <p className="flex text-[#4285F4] text-[14px] font-[700]">
              +7% <img src={upperArrow} alt="upper_arrow_icon" />
            </p>
            <ReactApexChart
              options={chartOneData}
              series={chartOneData.series}
              type="bar"
              width="80%"
            />
          </div>
          <div className="flex flex-col justify-between h-48 rounded-lg border-solid border-2 px-5 py-2">
            <div className="flex flex-col gap-2 justify-between">
              <p className="flex gap-2 text-[16px] font-[600] text-second-h">
                Analyse des mots clés
              </p>
              <div className="flex gap-2">
                <p className="text-third-h text-[14px] rounded-lg font-[500] bg-back-third p-1 box-border">
                  Table
                </p>
                <p className="text-third-h text-[14px] rounded-lg font-[500] bg-back-third p-1 box-border">
                  Délicieux
                </p>
                <p className="text-third-h text-[14px] rounded-lg font-[500] bg-back-third p-1 box-border">
                  Fiable
                </p>
                <p className="text-third-h text-[14px] rounded-lg font-[500] bg-back-third p-1 box-border">
                  Rapide
                </p>
                <p className="text-third-h text-[14px] rounded-lg font-[500] bg-back-third p-1 box-border">
                  Rapide
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 text-fourth-h font-[700] text-[14px]">
              <p>Voir tous les mots clés</p>
              <img src={rightArrow} alt="right_arrow_icon" />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2 col-span-2 justify-between rounded-lg border-solid border-2 px-5 py-2">
          <div className="">
            <p className="flex gap-2 text-second-h text-[16px] font-[600]">
              Analyse des catégories <img src={charts} alt="message_icon" />
            </p>
            <ReactApexChart
              options={chartTwoData.options}
              series={chartTwoData.series}
              type="bar"
              width="100%"
            />
          </div>
          <div className="flex items-center justify-end gap-2 text-fourth-h font-[700] text-[14px]">
            <p>Voir toutes les catégories</p>
            <img src={rightArrow} alt="right_arrow_icon" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default UpperSection;
