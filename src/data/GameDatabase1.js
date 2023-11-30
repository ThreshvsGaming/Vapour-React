const games = [
    {
        title: "Idle Champions of the Forgotten Realms",
        publisher: "Codename Entertainment Inc.",
        genre: "Simulator",
        description: "Collect Iconic Champions\nUnlock Champions from across the Dungeons & Dragons multiverse including fan-favorites from novels, adventures, and live streams like Force Grey: Lost City of Omu, Acquisitions Incorporated, Black Dice Society, and The Oxventurers Guild.\nDungeons & Dragons Strategy Game\nMaster each Champion's formation abilities to complete adventures based on official Dungeons & Dragons books like Wild Beyond the Witchlight, Waterdeep: Dragon Heist, Baldur's Gate: Descent into Avernus, and Curse of Strahd.\nAdventure in the Forgotten Realms\nJourney throughout the Sword Coast and beyond, visiting cities like Waterdeep, Neverwinter, and Baldur's Gate. Venture to Icewind Dale, Chult, Barovia, the Nine Hells of Baator, and more!\nWeekly Content Updates\nIdle Champions has been actively developed since launching in 2017, releasing new campaigns each year, exciting new Champions every month, and new in-game features frequently.",
        image: "./images/idle.jpg",
        ratings: 65,
        price: 75,

        owned: false

    },
    {
        title: "My Memory of Us",
        publisher: "IMGN.PRO",
        genre: "Simulator",
        description: "The Evil King plunders the city and his robot soldiers appear everywhere. Citizens are segregated, some of them marked and forced to move out of their homes. They are made to live in a place that is sealed off from the rest of the city by a huge wall. Fortunately, the children are not alone – they have each other. Their friendship allows them to stay together, even though fate tries to tear them apart.\nTake control of two characters with different abilities. Connect them into pair and don’t let them be separated! She can run fast and shoot her slingshot, he can sneak in the shadows. When they work together as a team can they overcome all adversities!",
        image: "./images/memory.jpg",
        ratings: 91,
        price: 35,

        owned: false

    },
    {
        title: "PixARK",
        publisher: "Snail Game",
        genre: "Simulator",
        description: "Welcome to PixARK, a vast, wild world filled with vicious dinosaurs, magical creatures and endless adventure! To survive in this mysterious land, you must tame creatures both ferocious and cuddly, craft high tech and magical tools, and build your own base out of cubes.\nWith a robust character creator, an infinite number of voxel based maps and procedurally generated quests, your PixARK adventure will be completely unique. Team up with friends to form a tribe, or play on your own. Spend your time building a towering fortress or go on a quest in a sprawling cavern. Fly on the back of a dragon and smite your enemies with a magic wand, or ride a mighty T-Rex and blast your foes with a rocket launcher. In the world of PixARK, how you play is up to you – as long as you survive!",
        image: "./images/pixark.jpg",
        ratings: 46,
        price: 55,

        owned: false

    }

];
export default games;

//     const recentGames = [games[3], games[13], games[24], games[52], games[1]];
//
//     let max = 1000;
//
//     for (let i = 0; i < games.length; i++) {
//         if (games[i].owned) {
//             games[i].playerHours = Math.floor(Math.random() * max);
//         } else {
//             games[i].playerHours = 0;
//         }
//     }
//
//
//
//     //Creates an "xDB" item in localStorage containing the games of x genre.
//     //We utilize localStorage because this allows the team global access and control to the game database
//     //in a simple and easy manner.
//     if (JSON.parse(localStorage.getItem('recent')) == null) {
//         localStorage.setItem('recent', JSON.stringify(recentGames));
//     }
//     if (JSON.parse(localStorage.getItem('games')) == null) {
//         localStorage.setItem('games', JSON.stringify(games));
//     }
//
// }
//
// function clearDB() {
//     localStorage.setItem('games', null);
//     localStorage.setItem('recent', null);
//     localStorage.setItem('friends', null);
//     setDb();
// }
//
// setDb();
