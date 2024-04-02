import { atom } from "recoil";

const albumsAtom = atom({
  key: "albumsAtom",
  default: "",
});

export { albumsAtom };
