import {Dispatch, SetStateAction} from "react";

export default interface BaseStore<T> {
    entity: T;
    dispatch?: Dispatch<SetStateAction<T>>;
};
