import React, { Fragment } from "react";
import Input from "../input";

const CompanyInfo = ({ fields, fieldChangeHandler }) => {
  const labels = [
    {
      name: "address",
      label: "Адрес"
    },
    {
      name: "phone",
      label: "Рабочий телефон"
    },
    {
      name: "fio",
      label: "ФИО Руководителя",
      disabled: true
    },
    {
      name: "position",
      label: "Должность"
    },
    {
      name: "based",
      label: "На основании"
    }
  ];

  return (
    <Fragment>
      {labels.map(({ name, label, disabled }) => {
        return (
          <Input
            key={name}
            label={label}
            value={fields[name]}
            name={name}
            disabled={disabled}
            fieldChangeHandler={fieldChangeHandler}
          />
        );
      })}
    </Fragment>
  );
};

export default CompanyInfo;
