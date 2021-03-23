import { useEffect, useState } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getFriends = () => {
      axiosWithAuth()
        .get('/friends')
        .then((res) => {
          setFriends(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    };
    getFriends();
  }, []);
  return (
    <>
      <div className="friend-page-container">
        <h1>Friends Page</h1>
        {!isLoading ? (
          <div className="friend-container">
            {friends.map((friend) => {
              return (
                <Friend className="friend" friend={friend} key={friend.id} />
              );
            })}
          </div>
        ) : (
          <h2>Fetching Friends!</h2>
        )}
      </div>
      <AddFriend />
    </>
  );
};

export default Friends;
