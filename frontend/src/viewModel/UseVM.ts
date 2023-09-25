import { useContext } from "react"
import { EmptyLoginStore } from "../store/EntryLoginStore"
import { LoginVM } from "./LoginVM"

export const UseVM =()=>{
    const loginStore = useContext(EmptyLoginStore)
    const loginVM = LoginVM({
        stores : [loginStore],
    })
            
    return loginVM
}