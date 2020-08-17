import React from "react";
import styled from "styled-components";

const RadioArea = styled.div`
  margin: 5px 0;
  input {
    margin-right: 10px;
  }

  label {
    margin: 0 3px;
  }
`;

const Radio = () => {
  return (
    <RadioArea>
      <strong>촉감</strong>
      <label for="soft">부드러움</label>
      <input type="radio" name="texture" id="soft" />
      <label for="normal">보통</label>
      <input type="radio" name="texture" id="normal" />
      <label for="rough">까칠함</label>
      <input type="radio" name="texture" id="rough" />
    </RadioArea>
  );
};

export default Radio;
