import { createSlice } from "@reduxjs/toolkit";
import { braidData } from "../../../data/braidData";

import CategoryData from "../../../data/CategoryData"
import { cleaningData } from "../../../data/cleaningData";
import { cureData } from "../../../data/cureData";
import { foodData } from "../../../data/foodData";
import { interestingData } from "../../../data/interestingData";
import { plantData } from "../../../data/plantData";
import { soapData } from "../../../data/soapData";
import { stoneData } from "../../../data/stoneData";
import { yogaData } from "../../../data/yogaData";

export const dataSlice = createSlice({
    name: "datas",
    initialState: {
        CategoryData: CategoryData,
        cleaningData: cleaningData,
        cureData: cureData,
        interestingData: interestingData,
        stoneData: stoneData,
        braidData: braidData,
        soapData: soapData,
        plantData:plantData,
        foodData:foodData,
        yogaData:yogaData,
    },
})

export const { dataShow } = dataSlice.actions

export const selectAllData = (state) => state.datas.dataValue
export const selectCleaningData = (state) => state.datas.cleaningData
export const selectCureData = (state) => state.datas.cureData
export const selectInterestingData = (state) => state.datas.interestingData
export const selectStoneData = (state) => state.datas.stoneData
export const selectBraidData = (state) => state.datas.braidData
export const selectSoapData = (state) => state.datas.soapData
export const selectPlantData = (state) => state.datas.plantData
export const selectFoodData = (state) => state.datas.foodData
export const selectYogaData = (state) => state.datas.yogaData


export default dataSlice.reducer