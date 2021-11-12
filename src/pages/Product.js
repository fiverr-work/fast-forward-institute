import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import Thumbnails from "../layouts/Thumbnails";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";

import Payment from "../layouts/Payment";

// Tmp thumbnails
import Thumbnail1 from "../img/thumbnails/img1.png";
import Thumbnail2 from "../img/thumbnails/img2.png";
import Thumbnail3 from "../img/thumbnails/img3.png";
import Thumbnail4 from "../img/thumbnails/img4.png";
import Thumbnail5 from "../img/thumbnails/img5.png";

Modal.setAppElement("#root");

const Product = () => {
  const [modal, setModal] = useState(false);
  const price = 10;
  const thumbnails = [Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4, Thumbnail5];
  return (
    <>
      <Breadcrumb
        prevLink="/books"
        prevPages={["home", "books"]}
        active="THE EFFICIENCY OF SUCCESS"
      />
      <Article>
        <Thumbnails data={thumbnails} />
        <Content>
          <h1>THE EFFICIENCY OF SUCCESS</h1>
          <p className="description">
            My goal is to share with you what I have learnt during my life that helped me to be more
            efficient towards success.
          </p>
          <p>What you can learn from this book:</p>
          <ul>
            <li>
              Three pillars for your success, which are the minimum you need for a long term
              successful life.
            </li>
            <li>Tips to overcome the hurdles in each of those pillars</li>
            <li>To know in which phase are you in your progress to a long-lasting fulfillment</li>
            <li>Practice tips for every day (some of them you will hate, others you will love)</li>
          </ul>
          <Actions>
            <div>
              <span className="price">{price} €</span>
              <span>You can get this book for free!</span>
            </div>
            <Button onClick={() => setModal(true)}>Purchase</Button>
          </Actions>
          <p>
            I hope you learn from the book, you get tools that you could use in your every-day life
            and then you can back and buy it again for the price you consider is fair.
          </p>
        </Content>
        <Modal
          isOpen={modal}
          onRequestClose={() => setModal(false)}
          hideModal={() => setModal(false)}
        >
          <Payment setModal={setModal} price={price} />
        </Modal>
      </Article>
    </>
  );
};

export default Product;

const Content = styled.div`
  .description {
    margin-top: 34px;
    margin-bottom: 34px;
    font-size: 24px;
    line-height: 33px;
    color: #262626;
  }
  p {
    font-size: 18px;
    :nth-of-type(2) {
      margin-bottom: 0;
    }
  }
  ul {
    margin-bottom: 34px;
  }
`;

const Article = styled.article`
  display: flex;
  > * {
    :not(:last-child) {
      margin-right: 55px;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    > * {
      :not(:last-child) {
        margin-right: 0;
        margin-bottom: 55px;
      }
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: flex-start;

  > div {
    span {
      display: block;
      :first-child {
        border: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        border-radius: 15px;
        font-size: 30px;
        line-height: 41px;
        color: #262626;
      }
      :last-child {
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        margin-top: 5px;
        margin-bottom: 34px;
        text-align: center;
      }
    }
  }
  button {
    width: 196px;
    margin-left: 30px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    margin-bottom: 20px;
    button {
      width: 100%;
      margin-left: 0;
    }
    div {
      width: 100%;
      span {
        :last-child {
          margin-bottom: 24px;
        }
      }
    }
  }
`;
