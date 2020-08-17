import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import CheckBox from "./components/CheckBox";
import Massage from "./components/Massage";
import Radio from "./components/Radio";

axios
  .get("https://www.kmdb.or.kr/info/api/apiDetail/6")
  .then((response) => {
    if (response.status === 200) {
      console.log("Loading Complate");
      console.log(response);
      document.querySelector(".movie").innerHTML = response.config.url;
    } else {
      console.log("failed");
    }
  })
  .catch(() => {
    console.log("failed");
  });

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "입력",
      food: "한식",
      obj: {
        season: [],
        massage: null,
        texture: [],
      },
    };
  }
  render() {
    const onSubmit = (e) => {
      e.preventDefault();
      axios({
        methd: "push",
        url: "",
        params: {
          id: 1,
        },
      });
    };

    const onChange = (props) => {
      const val = props.target.value;
      this.setState(() => {
        return { text: val };
      });
    };

    const onSelect = (props) => {
      const sel = props.target.options[props.target.selectedIndex].text;
      this.setState(() => {
        return { food: sel };
      });
    };

    return (
      <div className="content">
        <h1>Test</h1>
        <form className="first" onSubmit={onSubmit}>
          <input type="text" onChange={onChange} />
          <p>
            입력한 값은 <span className="final">{this.state.text}</span>입니다.
          </p>

          <h2>Select</h2>
          <select name="sel" id="sel" onChange={onSelect}>
            <option value="0">선택</option>
            <option value="1">치킨</option>
            <option value="2">피자</option>
            <option value="3">국수</option>
            <option value="4">냉면</option>
            <option value="5">라면</option>
            <option value="6">햄버거</option>
            <option value="7">닭갈비</option>
          </select>
          <p>
            선택하신 음식은 <span className="final">{this.state.food}</span>
            입니다.
          </p>
        </form>
        <h2>API</h2>
        <div className="movie"></div>

        <h2>Tab</h2>
        <ul>
          <li>
            <button>버튼1</button>
          </li>
          <li>
            <button>버튼2</button>
          </li>
        </ul>
        <div className="tabArea"></div>

        <h2>Form</h2>
        <form className="seasonForm" method="post">
          <p>여기 아래에 작성하세요.</p>
          <CheckBox />
          <Massage />
          <Radio />
          <input type="submit" id="submit" value="출력" />
        </form>
      </div>
    );
  }
}
