import React, {useEffect, useState} from "react";
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import slfCommon from "./Store_Library_Friends_Common.module.css"
import friendStyles from "./FriendScreen.module.css"
import FriendCard from "../components/FriendCard";

import friends from "../data/FriendsDatabase";
import TextBubble from "../components/TextBubble";

export default function FriendScreen() {
    const [selectedFriend, setSelectedFriend] = useState({friend: null, selected: false})
    const [displayedFriends, setDisplayedFriends] = useState(friends);
    const [chatMessages, setChatMessages] = useState([]);
    const [currText, setCurrText] = useState("")

    function selectAttachment() {
        document.getElementById('fileInput').click();
    }

    function showChat(friend) {
        setSelectedFriend({friend: friend, selected: true});
        setChatMessages(friend.messages);
    }

    function sortMessages(messages) {
        return [...messages].sort((a, b) => a.time - b.time);
    }

    const searchFriends = (friends, text) => {
        let tokens = text.trim().split(/\s+/);
        tokens = tokens.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // Escape special characters
        // tokens = tokens.map(token => token === "" ? undefined : token).filter(token => token !== undefined);

        if (tokens.length > 0) {
            tokens = tokens.map(word => `(?=.*${word})`);
            let inputValueRegex = new RegExp(tokens.join(''), 'gim');
            // let inputValueRegex = new RegExp(text, 'i');
            return friends.filter(friend => friend.username.match(inputValueRegex));
        }
        return friends;
    }

    function handleSearch(text) {
        setDisplayedFriends(searchFriends(friends, text));
    }

    function handleSend() {
        document.getElementById("chat_input_textbox").value = "";
        let messageObj = {sender: "", text: currText, time: Date.now()};
        setChatMessages(prevChat => [...prevChat, messageObj])
    }

    return (
        <div className={friendStyles.friendScreen}>
            <Header pageTitle="Friends" isHomeScreen={false}/>
            <div className={slfCommon.content_section}>
                <div className={friendStyles.friends_list_section}>
                    <div className={friendStyles.fixed_section}>
                        <SearchBar onInputChange={handleSearch}/>
                        <div className={friendStyles.add_friend_btn_container}>
                            <button className={friendStyles.add_friend_btn} type="button">
                                <PersonAddAlt1RoundedIcon className={friendStyles.mui_icons}/>
                            </button>
                        </div>
                    </div>
                    <div className={friendStyles.scrollable_friends_section}>
                        {displayedFriends.map(friend => <FriendCard key={friend.id} thisFriend={friend}
                                                                    recentMessage={sortMessages(friend.messages).at(friend.messages.length - 1)}
                                                                    showChat={showChat}/>)}
                    </div>
                </div>

                <div className={friendStyles.chat_section_container}>
                    {/*Username Header*/}
                    <div className={`${friendStyles.fixed_section} ${friendStyles.username_bar}`}>
                        <h4>{selectedFriend.selected ? selectedFriend.friend.username : "Username appears here"}</h4>
                    </div>

                    {/*Text messages*/}
                    {selectedFriend.selected ?
                        <div className={friendStyles.chat_section} id="chat-box">
                            {
                                // sortMessages(selectedFriend.friend.messages);
                                chatMessages.map(message => <TextBubble
                                    key={message.id} message={message}/>)
                            }
                        </div>
                        : <div className={friendStyles.default_chat_section} id="chat-box"><p>
                            Select a chat to start messaging
                        </p></div>
                    }
                    {/*Text input box*/}
                    {selectedFriend.selected &&
                        <div className={`${friendStyles.fixed_section} ${friendStyles.input_bar}`}>
                            <input
                                type="file"
                                id="fileInput"
                                style={{display: 'none'}}
                                onChange={() => alert("oops! we can't let you upload a virus to our amazing app 🤭")}
                            />
                            <button className={friendStyles.chatbox__buttons} onClick={selectAttachment}>
                                <AttachFileRoundedIcon className={friendStyles.mui_icons}/>
                            </button>
                            <input id="chat_input_textbox" className={friendStyles.chat_input_textbox} autoFocus={true}
                                   autoComplete={"off"} type="text"
                                   placeholder="Say hii :)" onChange={(e) => {
                                setCurrText(e.target.value)
                            }}/>
                            <button className={friendStyles.chatbox__buttons} onClick={handleSend}>
                                <SendRoundedIcon className={friendStyles.mui_icons}/>
                            </button>
                        </div>}
                </div>
            </div>
        </div>
    );
}