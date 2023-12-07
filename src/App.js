import Item from "./components/UserItem";

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
  const createUserInfo = () => {};
  const deleteUserInfo = () => {};

  return (
    <div>
      <h1>Hello, GSM 신규 입학 지원자 명단</h1>
      {/* 여기에 지원자 명단 표시 */}
      <input placeholder="지원자의 이름을 입력해주세요" />
      <button>지원자 추가</button>
    </div>
  );
}

export default App;
