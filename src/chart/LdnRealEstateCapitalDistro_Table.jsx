import { formatTickBln } from "../utils/Utils";

function LdnRealEstateCapitalDistro_Table({ distroData }) {
  return (
    <div className="col-span-full xl:col-span-5 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-center">Year</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Total Capital Invested £
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Indiv_vs_corpo_buyers %
                  </div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {distroData.map((yearData) => (
                <tr key={yearData._id}>
                  <td className="p-2">
                    <div className="text-center text-sky-500">
                      {yearData.year}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-green-500">
                      {yearData.total_invested_bln_gbp % 1 != 0
                        ? (
                            Math.round(
                              Number(yearData.total_invested_bln_gbp) * 100
                            ) / 100
                          ).toFixed(1)
                        : yearData.total_invested_bln_gbp}
                      <span className="sm:hidden">B</span>
                      <span className="hidden sm:inline">B GBP</span>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">
                      {yearData.indiv_vs_corpo_buyers_percent}%
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LdnRealEstateCapitalDistro_Table;
