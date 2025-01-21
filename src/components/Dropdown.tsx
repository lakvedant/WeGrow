/* eslint-disable @next/next/no-img-element */
'use client'
import React, { ReactNode, useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export const ShiftingDropDown = () => {
  return (
      <Tabs />
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | "l" | "r">(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? " bg-blue-50 text-black regular-16"
          : "text-blue-100 regular-16"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({
  selected,
  dir,
}: {
  selected: number | null;
  dir: null | "l" | "r";
}) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-gray-200"
    />
  );
};

const Products = () => {
  return (
    <div >
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-semibold">Crypto Currency</h3>
          <a href="/market/crypto/btc" target="_blank" className="mb-1 block text-sm text-neutral-800 hover:text-blue-50">
            Bitcoin
          </a>
          <a href="/market/crypto/eth" target="_blank" className="mb-1 block text-sm text-neutral-800  hover:text-blue-50">
            Ethereum
          </a>
          <a href="/market/crypto/solana" target="_blank" className="mb-1 block text-sm text-neutral-800  hover:text-blue-50">
            Solana
          </a>
          <a href="/market/crypto/dogecoin" target="_blank" className="mb-1 block text-sm text-neutral-800  hover:text-blue-50">
            Dogecoin
          </a>
          <a href="/market/crypto/all-crypto" target="_blank" className="mb-1 block text-sm text-neutral-800  hover:text-blue-50 hover:underline">
            View All
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold">Indices</h3>
          <a href="/market/indices/dow-jones" target="_blank" className="mb-1 block text-sm text-neutral-800  hover:text-blue-50">
            Dow Jones 30
          </a>
          <a href="/market/indices/s&p500" target="_blank" className="mb-1 block text-sm text-neutral-800  hover:text-blue-50">
            S&P 500
          </a>
          <a href="/market/indices/sensex" target="_blank" className="block text-sm text-neutral-800  hover:text-blue-50">
            SenSex
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold">Stocks</h3>
          <a href="/market/stocks/hdfc" target="_blank" className="mb-1 block text-sm text-neutral-800 hover:text-blue-50">
            HDFC 
          </a>
          <a href="/market/stocks/rel" target="_blank" className="mb-1 block text-sm text-neutral-800 hover:text-blue-50">
            Reliance
          </a>
          <a href="/market/stocks/tcs" target="_blank" className="block text-sm text-neutral-800 hover:text-blue-50">
            TCS
          </a>
          <a href="/market/stocks/tata" target="_blank" className="block text-sm text-neutral-800 hover:text-blue-50">
            Tata Motors
          </a>
          <a href="/market/stocks/icici" target="_blank" className="block text-sm text-neutral-800 hover:text-blue-50">
            ICICI 
          </a>
          <a href="/market/stocks/all-stock" target="_blank" className="block text-sm text-neutral-800 hover:text-blue-50 hover:underline">
            View All
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold">Forex</h3>
          <a href="/market/forex/euro-usd" target="_blank" className="mb-1 block text-sm text-neutral-800  hover:text-blue-50">
            EURO/USD
          </a>
          <a href="/market/forex/gbp-usd" target="_blank" className="mb-1 block text-sm text-neutral-800  hover:text-blue-50">
            POUND/USD
          </a>
          <a href="/market/forex/usd-inr" target="_blank" className="block text-sm text-neutral-800  hover:text-blue-50">
            USD/INR
          </a>
          <a href="/market/forex/usd-yen" target="_blank" className="block text-sm text-neutral-800  hover:text-blue-50">
            USD/YEN
          </a>
        </div>
      </div>
    </div>
  );
};



const TABS = [
  {
    title: "Market",
    Component: Products,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));