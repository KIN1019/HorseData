import { createContext } from "react"
import BaseStore from "./BaseStore";
import { EMPTY_LOGIN_STORE, LoginStore } from "./LoginStore";


const EmptyLoginStore = createContext<BaseStore<LoginStore>>({
    entity: EMPTY_LOGIN_STORE
});
const SearchProvider = EmptyLoginStore.Provider

export { EmptyLoginStore, SearchProvider };