'use client'
import React from 'react'
import { StockMarket } from "react-ts-tradingview-widgets";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
const page = () => {
  return (
    <div>
        <StockMarket colorTheme="light" width="100%" height={640}></StockMarket>
        {/* <TechnicalAnalysis colorTheme="light"  height={640} symbol='BTCUSD'></TechnicalAnalysis> */}
    </div>
  )
}

export default page
