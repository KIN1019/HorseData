import BaseStore from "../store/BaseStore";

export default interface BaseVM {
    stores: BaseStore<any>[]
}
