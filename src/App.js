/* eslint-disabled */

import './App.css';
import { useState } from 'react';



function App() {
  //즉시 렌더링이 필요할 때 useState를 사용해서 바인딩한다.
  //state는 등호로 변경할 수 없다.
  let [a, b] = useState(['리눅스 실전정복','React 학습','겨울 코트 추천']);
  let [logo, setLogo] = useState('ReactBlog');
  let [like, sumLike] = useState([0,0,0]); 
  let [modal, setModal] = useState(false);
  let [titles,setTitle] = useState(0);

  // map의 기능
  // 1. array 자료 갯수만큼 함수안의 코드를 실행해줌
  // 2. 함수의 파라미터는 array 안에 있던 자료이다
  // 3. return에 뭐 적으면 array로 담아준다.

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color : 'red', fontSize : '20px'}}>{logo}</h4>
      </div>
      {/* <button onClick={()=>{
        let copyTitle = [...a];
        copyTitle[1] = 'SQLD 완전정복';
        b(copyTitle);
      }}>제목변경버튼</button> */}
      {/* <button onClick={function(){
          let copyTitle = [...a];
          copyTitle.sort();
          b(copyTitle);
      }}>글 정렬</button>
      <div className='list'>
        <h4>{a[0]} <span onClick={()=>sumLike(like+1)}>👍</span>{like}</h4>
        <p>발행일</p>
      </div>
      <div className='list'>
        <h4>{a[1]}</h4>
        <p>발행일</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}>{a[2]}</h4>
        <p>발행일</p>
      </div> */}

      {
        a.map(function(e, i){
          return (
          <div className='list' key={i}>
          <h4 onClick={()=>{setModal(!modal);
                            setTitle(i);
            }}>{a[i]}
          <span onClick={()=>{
              let copyLike = [...like];
              copyLike[i] = 1;
              sumLike(copyLike);}}>👍</span>{like[i]}
          </h4>
          <p>발행일</p>
          </div>)
            
          })
      }

      
      {
        modal == true ? <Modal color={'skyblue'} titles={titles} change={b} title={a} /> : null
      }
      

      </div>
  );
}



function Modal(props){
  return (
      <div className="modal" style={{background : props.color}}>
        <h4>{props.title[props.titles]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
         let copyTitle = [...props.title];
          copyTitle[0] = 'Vue.js 특강!';
          props.change(copyTitle);
        }}>수정</button>
      </div>
    )
  }


  export default App;
