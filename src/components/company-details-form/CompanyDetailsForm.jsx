import React, { Component, Fragment } from "react";
import "./CompanyDetailsForm.scss";

import CompanyInfo from "./CompanyInfo";
import PersonInfo from "./PersonInfo";

export default class CompanyDetailsForm extends Component {
  state = {
    step: 1
  };

  nextStep = (evt) => {
    evt.preventDefault();
    this.setState((prevState) => {
      return { step: prevState.step + 1 };
    });
  };

  prevStep = () => {
    this.setState((prevState) => {
      return { step: prevState.step - 1 };
    });
  };

  formSubmitHandler = (evt) => {
    evt.preventDefault();
    const { closeModal } = this.props;

    closeModal();
  };

  render() {
    const {
      closeModal,
      fieldChangeHandler,

      companyName,
      bin,
      country,
      state,
      city,
      index,
      address,
      phone,
      fio,
      position,
      based
    } = this.props;

    const { step } = this.state;

    const calcStepContent = () => {
      const step1Fields = { companyName, bin, country, state, city, index };
      const step2Fields = { address, phone, fio, position, based };

      switch (step) {
        case 1: {
          return (
            <CompanyInfo
              fields={step1Fields}
              fieldChangeHandler={fieldChangeHandler}
            />
          );
        }
        case 2: {
          return (
            <PersonInfo
              fields={step2Fields}
              fieldChangeHandler={fieldChangeHandler}
            />
          );
        }
        default:
          return null;
      }
    };

    const calcFooterContent = () => {
      switch (step) {
        case 1: {
          return (
            <Fragment>
              <button
                className="CompanyDetailsForm__btn  btn"
                type="button"
                onClick={closeModal}
              >
                Отмена
              </button>
              <button
                className="CompanyDetailsForm__btn  btn  btn--ok"
                type="button"
                onClick={this.nextStep}
              >
                Продолжить
              </button>
            </Fragment>
          );
        }
        case 2: {
          return (
            <Fragment>
              <button
                className="CompanyDetailsForm__btn  btn"
                type="button"
                onClick={this.prevStep}
              >
                Назад
              </button>
              <button
                className="CompanyDetailsForm__btn  btn  btn--ok"
                type="submit"
              >
                Сохранить
              </button>
            </Fragment>
          );
        }
        default:
          return null;
      }
    };

    return (
      <section className="CompanyDetailsForm">
        <header className="CompanyDetailsForm__header">
          <h2 className="CompanyDetailsForm__title">Реквизиты Компании</h2>
          <small className="CompanyDetailsForm__step">Шаг {step} из 2</small>
        </header>
        <form
          className="CompanyDetailsForm__form"
          onSubmit={this.formSubmitHandler}
        >
          <fieldset className="CompanyDetailsForm__fieldset">
            {calcStepContent()}
          </fieldset>
          <div className="CompanyDetailsForm__btn-group">
            {calcFooterContent()}
          </div>
        </form>
      </section>
    );
  }
}
