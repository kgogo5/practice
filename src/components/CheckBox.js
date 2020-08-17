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

const CheckBox = ({ obj }) => {
  function onChangeAll(season) {
    const checkBoxList = document.querySelectorAll("input[type='checkbox']");
    obj.season = [];
    season.target.checked === true
      ? checkBoxList.forEach((props) => {
          props.checked = true;
          if (props.id !== "all") {
            obj.season.push(props.id);
          }
        })
      : checkBoxList.forEach((props) => {
          props.checked = false;
          obj.season.pop();
        });
    console.log(obj.season);
  }

  function onChange(season) {
    season.target.checked === true
      ? obj.season.push(season.target.id)
      : obj.season.splice(obj.season.indexOf(season.target.id), 1);
    console.log(obj.season);
  }

  return (
    <CheckBoxArea>
      <strong>계절감</strong>
      <label htmlFor="all">전체</label>
      <input type="checkbox" name="season" id="all" onChange={onChangeAll} />
      <label htmlFor="spring">봄</label>
      <input type="checkbox" name="season" id="spring" onChange={onChange} />
      <label htmlFor="summer">여름</label>
      <input type="checkbox" name="season" id="summer" onChange={onChange} />
      <label htmlFor="fall">가을</label>
      <input type="checkbox" name="season" id="fall" onChange={onChange} />
      <label htmlFor="winter">겨울</label>
      <input type="checkbox" name="season" id="winter" onChange={onChange} />
    </CheckBoxArea>
  );
};

export default CheckBox;
