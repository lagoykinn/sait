import React, { FC } from "react";
import styles from "../../styles/UI/PhoneInput.module.scss";
import { PhoneIpnutProps } from "../../types/PhoneInput";
import PhoneInputElem from "react-phone-input-2";

const PhoneInput: FC<PhoneIpnutProps> = ({ state, setState }) => {
  return (
    <div className={`${styles.phone__container} phone__container`}>
      <PhoneInputElem country="ru" value={state} onChange={setState} />
    </div>
  );
};

export default PhoneInput;
