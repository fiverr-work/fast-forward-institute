import React from "react";
import styled from "styled-components";
import BButton from "react-bootstrap/Button";

const Button = ({ variant, children, ...rest }) => {
  const bg = variant === "dark" ? "#262626" : "#00c896";

  return (
    <ButtonStyle bg={bg} {...rest}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled(BButton)`
  background: ${({ bg }) => bg};
  border-color: ${({ bg }) => bg};
  border-radius: 15px;
  padding: 20px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;

  ${({ bg }) =>
    bg === "#262626" &&
    `
        :hover{
            background: #00c896;
            border-color: #00c896;
        }
    `};
`;
