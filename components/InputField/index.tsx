import React from "react";

export enum EInputFieldType {
  input = "input",
  textarea = "textarea",
}

interface IProps {
  name: string;
  placeholder: string;
  required?: boolean;
  classes: string;
  type?: EInputFieldType;
  inputType?: string;
  value: string;
  onChange: ({ target: { name, value } }: { target: { name: string; value: string } }) => void;
}

const InputField = ({ name, placeholder = "", required = true, classes = "_2rIha", type = EInputFieldType.input, inputType = "text", value = "", onChange = () => {} }: IProps) => (
  <div className={`_3cjLo ${classes}`}>
    <label style={{ width: "100%" }}>
      <div className="_1yJAO">
        {type === EInputFieldType.input ? (
          <input required={required} type={inputType} defaultValue={value} onChange={onChange} name={name} placeholder={placeholder} />
        ) : (
          <textarea required={required} defaultValue={value} onChange={onChange} name={name} placeholder={placeholder} />
        )}
        <svg width={21} height={16} viewBox="0 0 21 16" xmlns="http://www.w3.org/2000/svg" className="_2Nu2h">
          <path d="M20 1L6.626 14 1 8.532" stroke="black" strokeWidth={2} fill="none" fillRule="evenodd" />
        </svg>
      </div>
    </label>
  </div>
);

export default InputField;
