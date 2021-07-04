import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import './Chat.scss';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
import {
  filteredMessageByLoginUser,
  reduceToNames,
} from '../helpers/messageHelper';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Chat = (props) => {
  let { id } = useParams();

  const { messages, users, setMessages, setSelectedUserId, loading } = props;

  const userAllMessages = filteredMessageByLoginUser(messages, id);
  const reducedMessage = reduceToNames(userAllMessages, id);

  const [userPhoto, setUserPhoto] = useState('');
  const [userFirstName, setUserFirstName] = useState('');

  useEffect(() => {
    if (users.length !== 0) {
      setUserPhoto(users[Number(id) - 1]['profile_photo']);
      setUserFirstName(users[Number(id) - 1]['first_name']);
    }
  }, [loading]);

  const reducedMessagesComp = reducedMessage.map((message) => {
    return (
      <SidebarChat
        key={message.id}
        to_user_id={message['to_user_id']}
        from_name={users[message['from_user_id'] - 1]['first_name']}
        to_name={users[message['to_user_id'] - 1]['first_name']}
        message={message}
        profilePic={users[message['to_user_id'] - 1]['profile_photo']}
        setSelectedUserId={setSelectedUserId}
      />
    );
  });

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar className="chat__image" alt="Zio" src={userPhoto} />
        <h2> {userFirstName}</h2>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar_chats">{reducedMessagesComp}</div>
    </div>
  );
};

export default Chat;
