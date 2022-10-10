import './App.css';
import {useState} from 'react';

function App() {

  let list = ['강남 우동 맛집','남자 코트 추천', '리액트 재밌다'];

  let [titles, setTitles] = useState(list);
  let [good, setGood] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [ipt,setipt] = useState('');
  let fn_setTitles = ()=>{
    // 기존 state와 신규 state 를 비교하기때문에 깊은복사 조져야함
    // 참고 : Spread 문법은 1레벨 깊이만 복사
    let a= [...list];
    a[0] = '강북 우동 맛집';
    setTitles(a);
  }
  let [title, setTitle] = useState(0);
  let logo = '블로그임';
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'lightgrey', fontSize: '18px'}}>{logo}</h4>
      </div>
      {
        titles.map(function(v,i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{
                setTitle(i);
                setModal(true);
              }}>
                {v}
                <span className="good" onClick={(e)=> {
                  e.stopPropagation();
                  let a = [...good];
                  a[i] += 1;
                  setGood(a);
                }}>👍</span> {good[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy= [...titles];
                copy.splice(i,1);
                console.log(copy);
                setTitles(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      <input type="text" onInput={(e)=>{
        setipt(e.target.value);
        console.log(ipt);
      }}/>
      <button onClick={()=>{
        let copy= [...titles];
        copy.unshift(ipt);
        setTitles(copy);
      }}>등록</button>
      <span>{ipt}</span>
      <hr/>
      {
        modal ? <Modal titles={titles} title={title}/> : null
      }

      <button onClick={fn_setTitles}>글제목배열 변경버튼</button>
      {/*<div className="list">*/}
      {/*  <h4 onClick={()=>{ setModal(!modal); }}>*/}
      {/*    {titles[0]}*/}
      {/*    <span className="good" onClick={(e)=> {*/}
      {/*      e.stopPropagation();*/}
      {/*      setGood(good+1);*/}
      {/*    }}>👍</span> {good}*/}
      {/*  </h4>*/}
      {/*  <p>2월 17일 발행</p>*/}
      {/*</div>*/}
      {/*<div className="list">*/}
      {/*  <h4>{titles[1]} <span className="good" onClick={()=> {}}>👍</span> {good} </h4>*/}
      {/*  <p>2월 17일 발행</p>*/}
      {/*</div>*/}
      {/*<div className="list">*/}
      {/*  <h4>{titles[2]} <span className="good" onClick={()=> {}}>👍</span> {good} </h4>*/}
      {/*  <p>2월 17일 발행</p>*/}
      {/*</div>*/}
    </div>
  );
}

/**
 * 컴포넌트
 *  - 첫글자는 대문자
 *   - case1. 반복적인 html축약
 *   - case2. 큰페이지
 *   - case3. 자주변경되는 것들
 */
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.titles[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
