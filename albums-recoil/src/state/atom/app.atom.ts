import { atom } from "recoil";

type SliceState = { isLoading: boolean; error: string | null | undefined };
const initialState: SliceState = { isLoading: false, error: null };

const appAtom = atom({
  key: "appAtom",
  default: initialState,
});

export { appAtom };
