import calendar from "./assets/calendar.svg";
import MiddleSection from "./components/MiddleSection";
import UpperSection from "./components/UpperSection";

function App() {
  return (
    <div className="flex flex-col mx-9 my-5 gap-4 h-screen">
      <h1 className="font-[700] text-[32px] text-first-header">
        Analysez et comparer vos avis client
      </h1>
      <div className="flex items-center justify-between">
        <p className="text-[24px] text-first-h font-[700]">
          Analyse sémantique des avis positifs
        </p>
        <div className="flex items-center gap-5 text-[14px]">
          <section className="flex items-center gap-3 rounded-lg border-solid border-2 p-2">
            <img src={calendar} alt="calendar_icon" />
            <p className="text-gray-h font-[500] text-[14px]">
              Jan 6,2022 - Jan 13, 2022
            </p>
          </section>
          <section className="flex items-center gap-3 rounded-lg border-solid border-gradient-text border-2 p-2 drop-shadow-md bg-[#fff]">
            <p className="text-first-h bg-clip-text font-[700] px-3">
              ✨ Générer rapport IA
            </p>
          </section>
        </div>
      </div>
      <UpperSection />
      <MiddleSection />
    </div>
  );
}

export default App;
