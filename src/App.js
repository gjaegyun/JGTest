import { useState } from "react";
import UserItem from "./components/UserItem";

const userList = [
  {
    id: 0,
    userName: "방가온",
  },
  {
    id: 1,
    userName: "신희성",
  },
  {
    id: 2,
    userName: "이승제",
  },
  {
    id: 3,
    userName: "전예빈",
  },
  {
    id: 4,
    userName: "하제우",
  },
  {
    id: 5,
    userName: "최장우",
  },
  {
    id: 6,
    userName: "김하온",
  },
  {
    id: 7,
    userName: "박준호",
  },
  {
    id: 8,
    userName: "김주은",
  },
  {
    id: 9,
    userName: "장예슬",
  },
];

function App() {
  const [inputUser, setInputUser] = useState("");//user이름 받기 위한 state생성
  const [userArr, setUserArr] = useState(userList);//초기값을 userList로 해줘서 userList를 기준으로 더 추가하게 list state생성

  const createUserInfo = () => {
    const newUser = {
      id: userArr.length, //입력받은거 토대로 객체 생성
      userName: inputUser,
    };
    setUserArr([...userArr, newUser]); //...userArr로 전에있던 배열유지, newUser로 새 객체 배열에 담기
    setInputUser(""); //setUserArr로 array에 저장 한뒤에 빈 string으로 set해서 input 초기화
  };

  const deleteUserInfo = (userId) => {
    setUserArr(userArr.filter((user) => user.id !== userId)); //props로 받은 userId와 다른 id만 filter()로 걸러 set해준다.
  };

  return (
    <div>
      <h1>Hello, GSM 신규 입학 지원자 명단</h1>
      {/* 여기에 지원자 명단 표시 */}
      {userArr.map((user) => 
        <UserItem key={user.id} user={user} onDelete={() => deleteUserInfo(user.id)}></UserItem> //userItem 컴포넌트에 id와 user컴포넌트로 전달 및 delete에 id를 props로 전달 해줘서 정해진 id 삭제할수 있게 함
      )}
      <input 
        value={inputUser} //value를 inputUser로 둬서 입력하는 값으로 둠
        onChange={(e) => setInputUser(e.target.value)}//e.target.value를 통해서 사용자가 입력한 값을 setInputUser로 inputUser을 사용자가 입력한 user로 바꾸어줌
        placeholder="지원자의 이름을 입력해주세요" 
      />
      <button onClick={createUserInfo}>지원자 추가</button>
    </div>
  );
}

export default App;
