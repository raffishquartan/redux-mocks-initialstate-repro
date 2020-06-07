import FormComponent, { FormComponentProps } from "components/FormComponent/FormComponent";
import React from "react";
import { connect } from "react-redux";
import { DispatchFunctionType, setData } from "reduxCode";

export interface AppState {
  fieldData: string;
}

function mapStateToProps(state: AppState) {
  return { fieldData: state.fieldData };
}

function mapDispatchToProps(dispatch: DispatchFunctionType) {
  return {
    updateReduxState: (fieldData: string) => {
      dispatch(setData(fieldData));
    },
  };
}

const FormContainer = (props: FormComponentProps) => {
  return <FormComponent {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
