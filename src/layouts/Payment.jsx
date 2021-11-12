import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as CloseIcon } from "../img/icons/close.svg";
import { ReactComponent as LeftArrowIcon } from "../img/icons/leftArrow.svg";
import DownArrowIcon from "../img/icons/downArrow.svg";

import { Countries } from "../Countries";

const Payment = ({ setModal, price }) => {
  function handleSubmit(e) {
    e.preventDefault();
    // setModal(false);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <header>
        <LeftArrowIcon onClick={() => setModal(false)} />
        <h3>Payment</h3>
        <CloseIcon onClick={() => setModal(false)} />
      </header>
      <input type="email" placeholder="Email Address" required />
      <input type="text" placeholder="Name (Optional)" />
      <input type="text" placeholder="Company Name (Optional)" />
      <input type="text" placeholder="VAT Number (Optional)" />
      <input type="text" placeholder="Address" required />
      <div className="grid">
        <input type="text" placeholder="City" required />
        <input type="number" placeholder="Postal Code" required />
      </div>
      <div className="select-wrapper">
        <select>
          <option disabled>Country</option>
          {Countries?.map((country, i) => (
            <option value={country.value} key={i}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className="agree">
        <input type="checkbox" id="agree" required />
        <label htmlFor="agree">
          I agree with <Link to="/terms-conditions">Terms and Conditions</Link>
        </label>
      </div>
      <Button type="submit" variant="dark">
        Proceed to pay: {price}€
      </Button>
    </Form>
  );
};

export default Payment;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    h3 {
      letter-spacing: 0.75px;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
    }
    svg {
      cursor: pointer;
      :first-child {
        visibility: hidden;
        pointer-events: none;
      }
    }
    @media (max-width: 576px) {
      svg {
        :first-child {
          visibility: visible;
          pointer-events: all;
        }
        :last-child {
          visibility: hidden;
          pointer-events: none;
        }
      }
    }
  }
  .grid {
    display: flex;
    input {
      :first-child {
        flex: 2;
        margin-right: 15px;
      }
      :last-child {
        flex: 1;
      }
    }
    @media (max-width: 576px) {
      display: block;
    }
  }
  .agree {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: auto;
      margin-bottom: 0;
      margin-right: 7px;
    }
    label {
      font-size: 14px;
      line-height: 22px;
      a {
        color: #00c896;
      }
    }
  }
  button {
    margin: 20px auto 0;
    min-width: 195px;
  }
  .select-wrapper {
    position: relative;
    margin-bottom: 15px;
    select {
      margin-bottom: 0;
    }
    ::after {
      content: url(${DownArrowIcon});
      top: 50%;
      transform: translateY(-50%);
      right: 24px;
      position: absolute;
    }
  }
`;
