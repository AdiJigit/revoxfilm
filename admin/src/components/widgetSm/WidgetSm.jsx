import './widgetSm.css';
import { MdVisibility } from 'react-icons/md';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE0ODMzNzBhNjEyMDdmNzMxMTZiZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDIxOTgwOCwiZXhwIjoxNjc0NjUxODA4fQ.uNmhfOyNwVF7rKTg6SiS8_7hsWrozE_fsCMfKpQjpaM',
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user, i) => (
          <li className="widgetSmListItem" key={i}>
            <img
              src={user.profilePic || 'https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg'}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
