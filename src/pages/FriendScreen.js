import React, {useEffect, useState} from "react";
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import slfCommon from "./Store_Library_Friends_Common.module.css"
import friendStyles from "./FriendScreen.module.css"
import FriendCard from "../components/FriendCard";
import TextBubble from "../components/TextBubble";

export default function FriendScreen() {
    const [selectedFriend, setSelectedFriend] = useState({friend: null, selected: false})
    const [allFriends, setAllFriends] = useState(() => JSON.parse(localStorage.getItem("Friends")) || []);
    const [displayedFriends, setDisplayedFriends] = useState(allFriends);
    const [activeChat, setActiveChat] = useState([]);
    const [currText, setCurrText] = useState("")

    useEffect(() => {
        if (selectedFriend.selected) {
            setAllFriends(prevFriends => prevFriends.map(friend => friend.id === selectedFriend.friend.id ? {
                        ...friend, messages: activeChat
                    } :
                    friend
            ))
        }
    }, [activeChat]);

    useEffect(() => {
        localStorage.setItem("Friends", JSON.stringify(allFriends));
        setDisplayedFriends(allFriends)
    }, [allFriends]);

    function selectAttachment() {
        document.getElementById('fileInput').click();
    }

    function showChat(friend) {
        setSelectedFriend({friend: friend, selected: true});
        setActiveChat(friend.messages);
    }

    function sortMessages(messages) {
        return [...messages].sort((a, b) => new Date(a.time) - new Date(b.time));
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
        setDisplayedFriends(searchFriends(allFriends, text));
    }

    function handleSend() {
        if (currText) {
            document.getElementById("chat_input_textbox").value = "";
            let messageObj = {sender: "", text: currText, time: Date.now()};
            setActiveChat(prevChat => [...prevChat, messageObj])
            setCurrText("");
        }
    }

    return (
        <div className={friendStyles.friendScreen}>
            <Header pageTitle="Friends" isHomeScreen={false}/>
            <div className={slfCommon.content_section}>
                <div className={friendStyles.friends_list_section}>
                    <div className={friendStyles.fixed_section}>
                        <SearchBar onInputChange={handleSearch}/>
                        <div className={friendStyles.add_friend_btn_container}>
                            <button className={friendStyles.add_friend_btn} type="button" onClick={() =>
                                alert("Let's be real, we don't have more than 6 friends..")
                            }>
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
                        <h3 style={{color:"white"}}>{selectedFriend.selected ? selectedFriend.friend.username : "Username appears here"}</h3>
                    </div>

                    {/*Text messages*/}
                    {selectedFriend.selected ?
                        <div className={friendStyles.chat_section} id="chat-box">
                            {
                                sortMessages(activeChat).map((message, index) => <TextBubble
                                    key={index} message={message}/>)
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