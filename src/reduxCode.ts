import { configureStore as toolkitConfigureStore, } from "@reduxjs/toolkit";
import { AppState } from "components/FormContainer/FormContainer";
import { AnyAction } from "redux";
import { createLogger } from "redux-logger";
import { ThunkDispatch, ThunkMiddleware } from "redux-thunk";

export const SET_DATA = "SET_DATA";

interface SetData {
  type: typeof SET_DATA;
  fieldData: string;
}

export function setData(fieldData: string): SetData {
  return { type: SET_DATA, fieldData };
}

export type ActionTypes = SetData;

export type DispatchFunctionType = ThunkDispatch<AppState,
  undefined,
  AnyAction>;

const initialState = {
  fieldData: "",
};

export function reducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case SET_DATA:
      return Object.assign({}, state, { fieldData: action.fieldData });
    default:
      return state;
  }
}

const middleware: ThunkMiddleware<{}, AnyAction, any>[] = [];
if(process.env.NODE_ENV === `development`) {
  middleware.push(
    createLogger({
      duration: true,
      timestamp: true,
      diff: true,
      collapsed: (getState, action, logEntry) =>
        logEntry !== undefined && !logEntry.error,
    })
  );
}

export function configureStore() {
  return toolkitConfigureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware,
  });
}
