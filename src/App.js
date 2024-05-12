import "./App.css";
import { useState } from "react";

function App() {
  const post = "강남 우동 맛집";

  let [contentsTitle, setContentsTitle] = useState([
    "여자 에반게리온 추천",
    "해석 커트 맛집",
    "파이썬 독학",
  ]);

  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <h2 className="head" style={{ color: "red", fontSize: "20px" }}>
        ReactBlog
      </h2>
      <h4>{post}</h4>

      <button
        onClick={() => {
          let copy = [...contentsTitle];
          //독립적인 array 사본
          //기존 state가 array나 object다? -> 독립적 카피본을 만들어서 수정하자
          copy[0] = "여자 코트 추천";
          setContentsTitle(copy);
        }}
      >
        글 수정
      </button>

      <button
        onClick={() => {
          let copy = [...contentsTitle];
          copy.sort();
          setContentsTitle(copy);
        }}
      >
        가나다순 정렬
      </button>

      <div className="list">
        <h4>
          {contentsTitle[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>{" "}
          {like}
        </h4>
        <p> 2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{contentsTitle[1]}</h4>
        <p> 2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{contentsTitle[2]}</h4>
        <p> 2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>글 제목</h4>
        <p> 2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
