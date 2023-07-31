"use client";

import { Provider } from "react-redux";
import Store from "./store";

export default function ReduxProvider({ children }: any) {
  return <Provider store={Store}>{children}</Provider>;
}
