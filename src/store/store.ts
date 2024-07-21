/** @format */

// import { pickAddonsType, pickAddonsdata } from "@/components/Steps/PickAddOns";
import { investType, InvestmentType } from "@/constants";
import { atom, useAtom } from "jotai";

export const investTypeAtom = atom<InvestmentType>(investType[0]);
