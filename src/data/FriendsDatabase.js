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
    }
];

export default friends;