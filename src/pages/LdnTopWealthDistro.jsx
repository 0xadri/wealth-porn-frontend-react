import { useState, useEffect } from "react";
import { getLdnTopWealthDistro } from "../services/apiWealthPorn";
import LdnTopWealthDistro_Table from "../chart/LdnTopWealthDistro_Table";
import LdnTopWealthDistro_Bar from "../chart/LdnTopWealthDistro_Bar";

function LdnTopWealthDistro() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [ldnTopWealthDistroData, setLdnTopWealthDistroData] = useState();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getLdnTopWealthDistro();
        console.log(data);
        setLdnTopWealthDistroData(data);
      } catch (err) {
        setErrorMsg(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Dashboard actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
            London Top Wealth Distribution in 2024
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* Source */}
        <h4 className="col-span-full font-semibold text-gray-800 dark:text-gray-100">
          Source: EqualityTrust and ONS.
        </h4>
        {/* Cards */}
        {!isLoading && ldnTopWealthDistroData && (
          <>
            {/* Bar */}
            <LdnTopWealthDistro_Bar
              distroData={ldnTopWealthDistroData.ldnTopWealthDistro}
            />
            {/* Table  */}
            <LdnTopWealthDistro_Table
              distroData={ldnTopWealthDistroData.ldnTopWealthDistro}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default LdnTopWealthDistro;
