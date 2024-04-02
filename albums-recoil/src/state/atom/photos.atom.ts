import { atom } from "recoil";

const photosAtom = atom({
  key: "photosAtom",
  default: "",
});

export { photosAtom };
