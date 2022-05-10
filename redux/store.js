import { createStore } from "redux";

const initialStore = {
  lang: "ru",
  cuttedHeader: false,
};
const rootReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "CUT_HEADER":
      return { ...state, cuttedHeader: true };
    case "RETURN_HEADER":
      return { ...state, cuttedHeader: false };
    case "CHANGE_LANG":
      return { ...state, lang: action.lang };
    default:
      return { ...state };
  }
};

const store = createStore(rootReducer);
export default store;
