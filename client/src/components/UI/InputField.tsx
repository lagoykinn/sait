import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "../../styles/UserPage.module.scss";
import { ICustomInput } from "../../types/types";

const InputField: FC<ICustomInput> = ({ type, inputType, value, onChange, disabled }) => {
  return (
    <div className={styles.dto}>
      <span>{type}</span>
      <input
        type={inputType ? inputType : "text"}
        value={value}
        onChange={onChange && onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
