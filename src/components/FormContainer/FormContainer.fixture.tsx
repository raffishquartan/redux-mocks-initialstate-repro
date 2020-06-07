import React from "react";
import { ReduxMock } from "react-cosmos-redux";
import { configureStore } from "reduxCode";
import FormContainer, { AppState } from "./FormContainer";

interface AppReduxMockProps {
  children: React.ReactNode;
  initialState?: any;
}

export const AppReduxMock = ({ children, initialState }: AppReduxMockProps) => (
  <ReduxMock configureStore={configureStore} initialState={initialState}>
    {children}
  </ReduxMock>
);

const specifiedInitialState: AppState = {
  fieldData: "i should appear in the fieldData text input",
};

const FormContainer_fixtures = {
  no_initial_state_specified: (
    <AppReduxMock>
      <FormContainer />
    </AppReduxMock>
  ),
  initial_state_specified: (
    <AppReduxMock initialState={specifiedInitialState}>
      <FormContainer />
    </AppReduxMock>
  ),
};

export default FormContainer_fixtures;
