import React from "react";
import styled from "styled-components";

const CheckBoxArea = styled.div`
  margin: 5px 0;

  input {
    margin-right: 10px;
  }
  label {
    margin: 0 3px;
  }
`;

const CheckBox = () => {
  return (
    <CheckBoxArea>
      <strong>계절감</strong>
      <label for="all">전체</label>
      <input type="checkbox" name="season" id="all" />
      <label for="spring">봄</label>
      <input type="checkbox" name="season" id="spring" />
      <label for="summer">여름</label>
      <input type="checkbox" name="season" id="summer" />
      <label for="fall">가을</label>
      <input type="checkbox" name="season" id="fall" />
      <label for="winter">겨울</label>
      <input type="checkbox" name="season" id="winter" />
    </CheckBoxArea>
  );
};

export default CheckBox;
