const UserItem = ({user, onDelete}) => { //props 받아오기
  return (//받아온 props 기반으로 userName과 유저정보삭제 클릭시 onDelete함수 실행되게 구현
    <div>
      <span>유저 이름: {user.userName}</span>
      <button onClick={onDelete}>유저 정보 삭제</button>
    </div>
  );
};

export default UserItem;
