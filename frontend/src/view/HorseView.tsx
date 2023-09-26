import { useState } from "react";
import { SearchProvider } from "../store/EntryDashboardStore";
import { DashboardStore, EMPTY_DASHBOARD_STORE } from "../store/DashboardStore";
import LoginPage from "./LoginView";


export const HorseView = () => {
    const [SearchModel, setSearchModel] = useState<DashboardStore>(EMPTY_DASHBOARD_STORE);

    return (
        <SearchProvider value={{
            entity: SearchModel,
            dispatch: (newSearchModel) => {
                setSearchModel(newSearchModel)
            }
        }}>
            <LoginPage />
        </SearchProvider>
    )
}
