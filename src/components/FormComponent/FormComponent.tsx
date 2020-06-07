import React, { FormEvent, useState } from "react";

export interface FormComponentProps {
  fieldData: string,
  updateReduxState: (fieldData: string) => void;
}

const FormComponent = (props: FormComponentProps) => {
  const [fieldData, setFieldData] = useState(props.fieldData);
  return (
    <form onSubmit={(event: FormEvent<HTMLFormElement>) => {
      console.log(`onSubmit - updating redux state with "${fieldData}"`)
      event.preventDefault();
      props.updateReduxState(fieldData);
    }}>
      <input name="fieldData" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`onChange - setting field data to: "${event.target.value}"`);
        setFieldData(event.target.value)
      }} value={fieldData} />
      <button type="submit">submit</button>
    </form>
  );
};

export default FormComponent;
