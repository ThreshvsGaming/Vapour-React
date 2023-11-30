import friendCardStyles from "./FriendCard.module.css"

export default function FriendCard({thisFriend, recentMessage, showChat}) {
    return (
        <div className={friendCardStyles.card} onClick={() => showChat(thisFriend)}>
            <img className={friendCardStyles.avatar} src={process.env.PUBLIC_URL + thisFriend.image}
                 alt={`${thisFriend.username}_logo`}/>
            <div className={friendCardStyles.friend_info}>
                <h3 className={friendCardStyles.username}> {thisFriend.username} </h3>
                <p className={friendCardStyles.time}>{recentMessage.time.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                })}</p>
                <p className={friendCardStyles.recent_message}>{recentMessage.text}</p>
            </div>
        </div>
    );
}