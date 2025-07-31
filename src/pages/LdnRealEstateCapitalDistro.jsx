import { useState, useEffect } from "react";
import { getLdnRealEstateCapitalDistro } from "../services/apiWealthPorn";
import LdnRealEstateCapitalDistro_Table from "../chart/LdnRealEstateCapitalDistro_Table";
import LdnBottomWealthDistro_Bar from "../chart/LdnBottomWealthDistro_Bar";

function LdnRealEstateCapitalDistro() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [ldnRealEstateCapitalDistroData, setLdnRealEstateCapitalDistroData] =
    useState();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getLdnRealEstateCapitalDistro();
        console.log(data);
        setLdnRealEstateCapitalDistroData(data);
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
            London: Distribution of Capital Invested in Real-Estate
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* Source */}
        <h4 className="col-span-full font-semibold text-gray-800 dark:text-gray-100">
          Source: ChatGPT Estimates.
        </h4>
        {/* Cards */}
        {!isLoading && ldnRealEstateCapitalDistroData && (
          <>
            {/* Bar */}
            {/* <LdnBottomWealthDistro_Bar
              distroData={ldnRealEstateCapitalDistroData.ldnBottomWealthDistro}
            /> */}
            {/* Table  */}
            <LdnRealEstateCapitalDistro_Table
              distroData={ldnRealEstateCapitalDistroData.ldnResRealEstateInv}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default LdnRealEstateCapitalDistro;
