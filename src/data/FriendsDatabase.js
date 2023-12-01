const friends = [
    // Sender ="" represents that the user sent the message not received
    {
        id: 1,
        username: "Beluga",
        image: "./images/beluga.jpeg",
        messages: [
            {
                id: 1,
                sender: "Beluga",
                text: "Friend's message here",
                time: new Date(2023, 8, 29, 11, 13)
            },
            {
                id: 2,
                sender: "Beluga",
                text: "Friend's latest message here",
                time: new Date(2023, 8, 29, 11, 20)
            },
            {
                id: 3,
                sender: "",
                text: "My message here",
                time: new Date(2023, 8, 29, 11, 15)
            },
            {
                id: 4,
                sender: "",
                text: "My latest message here",
                time: new Date(2023, 8, 29, 11, 21)
            }
        ],
    },
    {
        id: 2,
        username: "ThreshvsVapour",
        image: "./images/MonkieKid-S04E05-AoLie.png",
        messages: [
            {
                id: 1,
                sender: "ThreshvsVapour",
                text: "hey",
                time: new Date(2023, 9, 29, 17, 13, 1)
            },
            {
                id: 2,
                sender: "ThreshvsVapour",
                text: "hey",
                time: new Date(2023, 9, 29, 17, 20, 2)
            },
            {
                id: 3,
                sender: "ThreshvsVapour",
                text: "hey",
                time: new Date(2023, 9, 29, 17, 20, 3)
            },
            {
                id: 4,
                sender: "ThreshvsVapour",
                text: "hey",
                time: new Date(2023, 9, 29, 17, 20, 4)
            },
            {
                id: 5,
                sender: "ThreshvsVapour",
                text: "hey",
                time: new Date(2023, 9, 29, 17, 20, 5)
            },
            {
                id: 6,
                sender: "ThreshvsVapour",
                text: "hey",
                time: new Date(2023, 9, 29, 17, 20, 6)
            },
            {
                id: 7,
                sender: "ThreshvsVapour",
                text: "hey you",
                time: new Date(2023, 9, 29, 17, 20, 7)
            },
            {
                id: 8,
                sender: "ThreshvsVapour",
                text: "Yeah you",
                time: new Date(2023, 9, 29, 17, 20, 8)
            },
            {
                id: 9,
                sender: "ThreshvsVapour",
                text: "chicken butt",
                time: new Date(2023, 9, 29, 17, 20, 10)
            },
            {
                id: 10,
                sender: "",
                text: "WHAT",
                time: new Date(2023, 9, 29, 17, 20, 9)
            }
        ],
    },
    {
        id: 3,
        username: "BustlingFungus",
        image: "./images/leon.jpg",
        messages: [
            {
                id: 1,
                sender: "BustlingFungus",
                text: "HELP SOMEONE IS CHASING ME",
                time: new Date(2023, 1, 2, 11, 13)
            },
            {
                id: 2,
                sender: "BustlingFungus",
                text: "PICK ME UP",
                time: new Date(2023, 1, 2, 11, 14)
            },
            {
                id: 3,
                sender: "",
                text: "Huuh",
                time: new Date(2023, 1, 2, 11, 15)
            },
            {
                id: 4,
                sender: "BustlingFungus",
                text: "AHHHHHHHHHHHHHHHHHHHHHHHH",
                time: new Date(2023, 1, 2, 11, 21)
            }
        ],
    },
    {
        id: 4,
        username: "Hep Me",
        image: "./images/hep_me.jpg",
        messages: [
            {
                id: 1,
                sender: "Hep Me",
                text: "What were the chances? It would have to be a lot more than 100 to 1. It was likely even more than 1,000 to 1. The more he thought about it, the odds of it happening had to be more than 10,000 to 1 and even 100,000 to 1. People often threw around the chances of something happening as being 1,000,000 to 1 as an exaggeration of an unlikely event, but he could see that they may actually be accurate in this situation. Whatever the odds of it happening, he knew they were big. What he didn't know was whether this happening was lucky or unlucky.",
                time: new Date(2023, 5, 15, 2, 3)
            },
            {
                id: 2,
                sender: "Hep Me",
                text: "It's an unfortunate reality that we don't teach people how to make money (beyond getting a 9 to 5 job) as part of our education system. The truth is there are a lot of different, legitimate ways to make money. That doesn't mean they are easy and that you won't have to work hard to succeed, but it does mean that if you're willing to open your mind a bit you don't have to be stuck in an office from 9 to 5 for the next fifty years o your life.",
                time: new Date(2023, 5, 15, 2, 4)
            },
            {
                id: 3,
                sender: "",
                text: "What are you on rn????!?!?!??!?!",
                time: new Date(2023, 5, 15, 2, 5)
            }
        ],
    },
    {
        id: 5,
        username: "Marker",
        image: "./images/crazy.png",
        messages: [
            {
                id: 1,
                sender: "",
                text: "Hey you should give us 100% on MS3. It would be nice and funny if you can do that for us. Did you know that if you do a nice deed, you get good karma! That's pretty crazy. Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy. Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy. Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy. Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy. Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy. Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy.",
                time: new Date(2023, 5, 15, 2, 3)
            },
            {
                id: 2,
                sender: "Marker",
                text: "Umm...",
                time: new Date(2023, 5, 15, 2, 4)
            }
        ],
    },
    {
        id: 6,
        username: "Ooga Booga",
        image: "./images/dog.png",
        messages: [
            {
                id: 1,
                sender: "Ooga Booga",
                text: "Who is this?",
                time: new Date(2023, 7, 1, 9, 20)
            },
            {
                id: 2,
                sender: "",
                text: "Who are you?",
                time: new Date(2023, 7, 1, 9, 21)
            }
        ],
    },
];

export default friends;