import friendCardStyles from "./FriendCard.module.css"

export default function FriendCard({thisFriend, recentMessage, showChat}) {
    let dateTime = new Date(recentMessage.time)
    return (
        <div className={friendCardStyles.card} onClick={() => showChat(thisFriend)}>
            <img className={friendCardStyles.avatar} src={thisFriend.image}
                 alt={`${thisFriend.username}_logo`}/>
            <div className={friendCardStyles.friend_info}>
                <h3 className={friendCardStyles.username}> {thisFriend.username} </h3>
                <p className={friendCardStyles.time}>{dateTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                })}</p>
                <p className={friendCardStyles.recent_message}>{recentMessage.text}</p>
            </div>
        </div>
    );
}