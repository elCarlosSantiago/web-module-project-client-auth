import { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFriend = {
  id: '',
  name: '',
  age: '',
  email: '',
};

const AddFriend = () => {
  const [newFriend, setNewFriend] = useState(initialFriend);

  const handleChange = (evt) => {
    setNewFriend({
      ...newFriend,
      [evt.target.name]: evt.target.value,
    });
  };

  const addFriend = () => {
    axiosWithAuth()
      .post('friends', newFriend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="add-friend-container">
      <form className="add-friend-form" onSubmit={addFriend}>
        <input
          placeholder="Name?"
          type="text"
          name="name"
          onChange={onChange}
          value={newFriend.name}
        />

        <input
          placeholder="Age?"
          type="number"
          name="age"
          onChange={onChange}
          value={newFriend.age}
        />

        <input
          placeholder="E-mail?"
          type="email"
          name="email"
          onChange={onChange}
          value={newFriend.email}
        />
        <button>Add Friend!</button>
      </form>
    </div>
  );
};

export default AddFriend;
