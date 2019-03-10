import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

import "./scss/blocks/btn.scss";
import Modal from "./components/modal";

import CompanyDetailsForm from "./components/company-details-form";

class App extends Component {
  state = {
    isModalOpen: false,

    companyName: 'ТОВАРИЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "WESSAR IT"',
    bin: "180940000890",
    country: "Казахстан",
    state: "",
    city: "",
    index: "",
    address: "",
    phone: "",
    fio: "Шериев Мади Нурланович",
    position: "",
    based: ""
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  fieldChangeHandler = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const { isModalOpen, ...fields } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo" />

          <button
            className="App__button  btn  btn--purple"
            onClick={this.openModal}
          >
            Редактировать данные
          </button>
        </header>
        <main className="App__main">
          <Modal show={isModalOpen} closeModal={this.closeModal}>
            <CompanyDetailsForm
              closeModal={this.closeModal}
              {...fields}
              fieldChangeHandler={this.fieldChangeHandler}
            />
          </Modal>
        </main>
      </div>
    );
  }
}

export default App;
