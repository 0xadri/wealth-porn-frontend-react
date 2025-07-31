import { useState, useEffect } from "react";
import { getLdnBottomWealthDistro } from "../services/apiWealthPorn";
import LdnBottomWealthDistro_Table from "../chart/LdnBottomWealthDistro_Table";
import LdnBottomWealthDistro_Bar from "../chart/LdnBottomWealthDistro_Bar";

function LdnBottomWealthDistro() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [ldnBottomWealthDistroData, setLdnBottomWealthDistroData] = useState();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getLdnBottomWealthDistro();
        console.log(data);
        setLdnBottomWealthDistroData(data);
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
            London Bottom Wealth Distribution in 2024
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* Source */}
        <h4 className="col-span-full font-semibold text-gray-800 dark:text-gray-100">
          Source: EqualityTrust and ONS.
        </h4>
        {/* Cards */}
        {!isLoading && ldnBottomWealthDistroData && (
          <>
            {/* Bar */}
            <LdnBottomWealthDistro_Bar
              distroData={ldnBottomWealthDistroData.ldnBottomWealthDistro}
            />
            {/* Table  */}
            <LdnBottomWealthDistro_Table
              distroData={ldnBottomWealthDistroData.ldnBottomWealthDistro}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default LdnBottomWealthDistro;
