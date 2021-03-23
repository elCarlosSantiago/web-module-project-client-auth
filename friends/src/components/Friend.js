const Friend = ({ friend }) => {
  return (
    <div className="friend">
      <p>Name:{friend.name}</p>
      <p>Age:{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  );
};

export default Friend;
