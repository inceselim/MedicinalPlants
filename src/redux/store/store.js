import { configureStore } from '@reduxjs/toolkit';
import themeSlice from "../features/themeSlice/themeSlice";
import dataSlice from '../features/dataSlice.js/dataSlice';

export default configureStore({
  reducer: {
    counter: themeSlice,
    datas: dataSlice
  },
});
