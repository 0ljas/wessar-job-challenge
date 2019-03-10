import React from "react";
import "./Input.scss";

const Input = ({
  label,
  value,
  notNecessary,
  name,
  disabled,
  fieldChangeHandler
}) => {
  return (
    <label className="Input">
      <span className="Input__label-text">{label}</span>
      {notNecessary && (
        <span className="Input__description">не обязательно</span>
      )}
      <input
        type="text"
        className="Input__input"
        value={value}
        placeholder={label}
        name={name}
        disabled={disabled}
        onChange={fieldChangeHandler}
      />
    </label>
  );
};

export default Input;
