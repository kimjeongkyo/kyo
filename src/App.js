

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '존만이의 코딩생황';
  let [글제목,글제목변경] = useState(['남자코드추천','심심할땐역시', '오늘의하루', '과거같은 내일']);//state 자동렌더링 가능함으로  자주 바뀌가니 중요한 데이터를 변수 말고 state로 저장해서 사용
  let [따봉, 따봉변경] = useState(0);
  
  //글 변경 버튼 시작
   function TitleChange() {
   // 글제목변경[2] = '내일의 하루'; 이건 불가
   // state의 데이터 변경은 복사본을 만들어서 수정해야함
   var newArray =  [...글제목]; // var newArray = 글제목;을 사용하면 값 공유로 됨(deep copy) 그러므로 [글제목]를 사용
   newArray[2] = '나는 정교';
   글제목변경(newArray);
   }
  //글 변경 버튼 끝

  //글 정렬버튼
   function TitileArray() {
     var newCount = [...글제목];
     newCount.sort();//.sort state는 어레이 자료형이고 자바스크립트에서 어레이 자료형 문자순 정렬은.sort 함수이다.
     글제목변경(newCount);
   }// 정렬버튼 끝

  return (
    <div className="App">
      <div className="black-nav">
    {/* <img src={logo}/> */}
    <h4></h4>
    <h4>{posts}</h4>
    
      </div>
      <div className="list" >하나둘 가능
      <button onClick={TitleChange}>나는 정교 버튼</button>
      <button onClick={TitileArray}>정렬 버튼</button>
        <h3>{글제목[0]}</h3>
        <p>2우러 17일 발행</p>
        WARNING 잘못된 코드를 바로잡아 주는 라이브러리 자동 설치 되어있음..
        터미널에 뜨는 warning eslint보기 싫으면..
         맨 상단에 /* eslint-disable */을 위와 같이 작성. 
        <hr/>
        <h3>{글제목[1]}<span onClick={TitleChange}>👍</span> {따봉}</h3>
        <p>2우러 18일 발행</p>
        콜백함수
        <hr/>
        <h3>{글제목[2]} </h3>
        <p>2우러 19일 발행</p>
        ui 특수효과
        <hr/>
        <h3>{글제목[3]}</h3>
        <p>2우러 20일 발행</p>
        <hr/>
        </div>

   <Modal/>

      {/*
      modal 
      HTML을 한 단어로 줄여서 쓸 수 있는 방법:
      리액트의 Component 문법
      
      Component 주의사항::
      1.Name은 항상 대문자로 시작
      2. return() 안에 있는건 태그하나로 묶어야함
      
      
      
      
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          App.js는 MainPage 코딩하는 곳
          App.js 내용을 public 
          index.html로 보내 화면 송출
          node_modules는 라이브러리 보관
          public은 static 파일 보관
          src를 소스코드 보관
          package.json : 설치한 라이브러리 목록
          npm으로 설치할 경우 자동 저장됨
          리액트는 데이터 바인딩이 쉽다.
          바인딩이란 자바스크립트에 변수 선언 후 사용이 편하다.
          
           
          김정교
          node.js 설치이유 
          npm이라는 툴 이용가능
          npm 안에 quick start도 사용가능

          jsx란 



          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

function Modal() {
  return (
    <>
        <div className="modal">
          <h2>TITLE</h2>
          <p>Data</p>
          <p>content</p>
        </div>
    </>//<div>대신 사용 가능
  )
}

export default App;
