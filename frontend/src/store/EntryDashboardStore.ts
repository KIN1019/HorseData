import { createContext } from "react"
import BaseStore from "./BaseStore";
import { EMPTY_DASHBOARD_STORE, DashboardStore } from "./DashboardStore";


const EmptyDashboardStore = createContext<BaseStore<DashboardStore>>({
    entity:EMPTY_DASHBOARD_STORE
});
const SearchProvider = EmptyDashboardStore.Provider

export { EmptyDashboardStore, SearchProvider };