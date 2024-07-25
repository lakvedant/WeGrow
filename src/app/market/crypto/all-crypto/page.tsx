'use client'
import React from 'react'
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
const page = () => {
  return (
    <div>
        <CryptoCurrencyMarket colorTheme="light" width="100%" height={640}></CryptoCurrencyMarket>
    </div>
  )
}

export default page
