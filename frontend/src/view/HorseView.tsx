'use client'
import { useState } from "react";
import { SearchProvider } from "../store/EntryLoginStore";
import { LoginStore, EMPTY_LOGIN_STORE } from "../store/LoginStore";
import { MainView } from "./MainView";


export const HorseView = () => {
    const [SearchModel, setSearchModel] = useState<LoginStore>(EMPTY_LOGIN_STORE);

    return (
        <SearchProvider value={{
            entity: SearchModel,
            dispatch: (newSearchModel) => {
                setSearchModel(newSearchModel)
            }
        }}>
            <MainView />
        </SearchProvider>
    )
}
