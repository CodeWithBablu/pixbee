import { atom } from "recoil"

const defaultDataState = {
  images: null
}

export const dataState = atom({
  key: "dataState",
  default: defaultDataState,
})