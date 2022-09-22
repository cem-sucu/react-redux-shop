import { createStore } from "redux";
import phoneReduce from "./phone/reducerPhone";

const store = createStore(phoneReduce);

export default store;
