import React, { useEffect, useState } from "react";
import formatNumber from "@/lib";
import getFinancialAdvice from "@/lib/getFinancialAdvice";
import {
  PiggyBank,
  ReceiptText,
  Wallet,
  Sparkles,
  CircleDollarSign,
} from "lucide-react";

interface Hub {
  amount: number;
  risk: number;
  avgReturn: number;
}

interface CardInfoProps {
  HubsList: Hub[];
}

const CardInfo: React.FC<CardInfoProps> = ({ HubsList }) => {
  const [Investment, setInvestment] = useState<number>(0);
  const [Profit, setProfit] = useState<number>(0);
  const [Hubs, setHubs] = useState<number>(0);
  const [Risk, setRisk] = useState<number>(0);
  const [financialAdvice, setFinancialAdvice] = useState<string>("");
  const [displayedAdvice, setDisplayedAdvice] = useState<string>("");

  useEffect(() => {
    if (HubsList.length >= 0) {
      CalculateCardInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [HubsList]);

  useEffect(() => {
    if (Investment > 0) {
      const fetchFinancialAdvice = async () => {
        const advice = await getFinancialAdvice({
          Investment,
          Profit,
          Risk,
        });
        setFinancialAdvice(advice);
        // animateText(advice);
      };

      fetchFinancialAdvice();
    }
  }, [Investment, Profit, Risk]);

// //   const animateText = (text: string) => {
//     let index = 0;
//     setDisplayedAdvice(""); // Reset the displayed advice

//     const interval = setInterval(() => {
//       setDisplayedAdvice((prev) => prev + text[index]);
//       index++;

//       if (index === text.length) {
//         clearInterval(interval);
//       }
//     }, 5); // Adjust the speed here
//   };

  const CalculateCardInfo = () => {
    console.log(HubsList);
    let Investment_ = 0;
    let avgReturn_ = 0;
    let Risk_ = 0;
    let Profit_ = 0;
    let Hubs_ = 0;

    HubsList.forEach((element) => {
      Investment_ += Number(element.amount);
      Risk_ += Number(element.risk);
      avgReturn_ += element.avgReturn;
    });
    avgReturn_ /= HubsList.length;
    Risk_ /= HubsList.length;
    Profit_ = Investment_ * 0.01 * avgReturn_;
    Hubs_ = HubsList.length;

    setInvestment(Investment_);
    setProfit(Profit_);
    setHubs(Hubs_);
    setRisk(Risk_);
  };

  return (
    <div>
      {HubsList?.length > 0 ? (
        <div>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Investment</h2>
                <h2 className="font-bold text-2xl">
                  ₹{formatNumber(Investment)}
                </h2>
              </div>
              <PiggyBank className="bg-blue-20 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Profit Yearly</h2>
                <h2 className="font-bold text-2xl">
                  ₹{formatNumber(Profit)}
                </h2>
              </div>
              <ReceiptText className="bg-blue-20 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">No. Of Hubs</h2>
                <h2 className="font-bold text-2xl">{Hubs}</h2>
              </div>
              <Wallet className="bg-blue-20 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Risk Factor</h2>
                <h2 className="font-bold text-2xl">
                  {(Risk).toFixed(2)}%
                </h2>
              </div>
              <CircleDollarSign className="bg-blue-20 p-3 h-12 w-12 rounded-full text-white" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item, index) => (
            <div
              className="h-[110px] w-full bg-slate-200 animate-pulse rounded-lg"
              key={index}
            ></div>
          ))}
        </div>
      )}
      <div className="p-7 border mt-5 -mb-1 rounded-2xl flex items-center justify-between">
        <div className="">
          <div className="flex mb-2 flex-row space-x-1 items-center ">
            <h2 className="text-md text-lg">We Grow AI</h2>
            <Sparkles
              className="rounded-full text-white w-7 h-7 p-[5px] bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 background-animate"
            />
          </div>
          <h2 className="font-light text-md">
            {financialAdvice || "Loading financial advice..."}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
