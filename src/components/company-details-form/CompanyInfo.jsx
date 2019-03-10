import React, { Fragment } from "react";
import Input from "../input";
import Row from "../row";

const CompanyInfo = ({ fields, fieldChangeHandler }) => {
  const labels = [
    {
      name: "companyName",
      label: "Наименование Компании",
      disabled: true
    },
    {
      name: "bin",
      label: "БИН",
      disabled: true
    },
    {
      name: "country",
      label: "Страна",
      disabled: true
    },
    {
      name: "state",
      label: "Область",
      notNecessary: true
    }
  ];

  return (
    <Fragment>
      {labels.map(({ name, label, notNecessary, disabled }) => {
        return (
          <Input
            key={name}
            label={label}
            value={fields[name]}
            name={name}
            notNecessary={notNecessary}
            disabled={disabled}
            fieldChangeHandler={fieldChangeHandler}
          />
        );
      })}

      <Row
        left={
          <Input
            label="Город"
            value={fields.city}
            fieldChangeHandler={fieldChangeHandler}
            name="city"
          />
        }
        right={
          <Input
            label="Индекс"
            value={fields.index}
            fieldChangeHandler={fieldChangeHandler}
            name="index"
          />
        }
      />
    </Fragment>
  );
};

export default CompanyInfo;
