function findFriend(friend){
    var friends = JSON.parse(localStorage.getItem('friends'));
    for(let i = 0; i < friends.length; i++){
            if(friend.replaceAll("'","").localeCompare(friends[i].username.replaceAll("'","")) == 0)
            {
                console.log(friends[i]);
                return friends[i];
            }
    }
}

function updateMessages(username, valueName, newValue)
{
    var games = JSON.parse(localStorage.getItem('games'));
    for(let i = 0; i < allGamesUpdate.length; i++)
    {
        let valueChanged = false;
        if(title.replaceAll("'","").localeCompare(games[i].title.replaceAll("'","")) == 0)
        {
            games[i][valueName] = newValue;
            valueChanged = true;
        }
    }
    if(valueChanged)
    {
        //console.log("Before updating: ");
        //console.log(JSON.parse(localStorage.getItem(categoryNames[i])));
        localStorage.setItem(categoryNames[i], JSON.stringify(allGamesUpdate[i]));

        //console.log("After updating: ");
        //console.log(JSON.parse(localStorage.getItem(categoryNames[i])));
    }
}