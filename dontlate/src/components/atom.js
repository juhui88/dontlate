import { atom } from "recoil";

export const idState = atom({
  key: "idState",
  default: "",
});

export const changeState = atom({
  key: "changeState",
  default: false,
});
