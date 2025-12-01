// Simple messages map: you can customise every day here.
// Use \n for line breaks in the text.
const messages = {
    // Done
    1: {
        title: "Day 1 – Starting December With You",
        text: "This December, I wanted to give you something very small but meaningful.\nSo here it is: 31 little reminders of how much I love you."
    },
    // Done
    2: {
        title: "Day 2 – A Gift for You",
        text: "Looking for a gift? Here it is.\nOn your way to Beirut, pass through Chekka and say hello to your Santa's parents."
    },
    // Done
    3: {
        title: "Day 3 – A Memory",
        text: "Think of one of your favorite memories of us.\nI’m probably thinking of it too."
    },
    // Done
    4: {
        title: "Day 4 – You’re Beautiful",
        text: "You are beautiful.\nInside and out.\nNever forget that."
    },
    // Done
    5: {
        title: "Day 5 – Your Smile",
        text: "One of my favorite things in the world is your smile.\nIt makes my day feel special like you."
    },
    // Done
    6: {
        title: "Day 6 – Proud of You",
        text: "I am so proud of everything you do.\nEven the things you think no one notices."
    },
    // Done
    7: {
        title: "Day 7 – You are Strong",
        text: "No matter what life throws at you,\nI know you have the strength to get through it."
    },
    // Done
    8: {
        title: "Day 8 – You’re My Home",
        text: "No matter where we are, as long as you're there,\nit feels like home."
    },
    // Done
    9: {
        title: "Day 9 – A Warm Thought",
        text: "If today feels heavy, remember:\nyou’re not carrying anything alone."
    },
    // Done
    10: {
        title: "Day 10 – You Deserve A Gift",
        text: "Wait for it ...\nYou deserve a gift now and always."
    },
    // Done
    11: {
        title: "Day 11 – Time is Not Passing",
        text: "9 more days until I see you.\nTime isn’t passing fast enough."
    },
    // Done
    12: {
        title: "Day 12 – Beautiful Things Are Coming",
        text: "Sometimes we have to wait for the beautiful things to arrive.\nDieu fait bien les choses."
    },
    // Done
    13: {
        title: "Day 13 – Always Here For You",
        text: "No matter what happens,\nI’m always here for you.\nYou can count on that."
    },
    // Done
    14: {
        title: "Day 14 – Stronger Together",
        text: "Whatever comes our way,\nI know we can face it TOGETHER."
    },
    // Done
    15: {
        title: "Day 15 – Isaiah 41:10",
        text: "Fear not, for I am with you\nBe not dismayed, for I am your God.\nI will strengthen you,\nYes, I will help you,\nI will uphold you with My righteous right hand."
    },
    // Done
    16: {
        title: "Day 16 – 4 Days Left?",
        text: "Only 4 days left until I see you!\nThis what you think."
    },
    // 17 is missing
    // Done
    18: {
        title: "Day 18 – A Little Reminder",
        text: "You don’t have to be perfect.\nYou just have to be you.\nAnd that’s more than enough."
    },
    // Done
    19: {
        title: "Day 19 – Unexpected Gifts",
        text: "The best gifts are the unexpected ones.\nExpect the unexpected every day."
    },
    // Done
    20: {
        title: "Day 20 – Thinking of You",
        text: "Wherever you are today, whatever you're doing,\nI’m thinking of you with so much love."
    },
    // Done
    21: {
        title: "Day 21 – سفر إرميا 29: 11",
        text: "لأَنِّي عَرَفْتُ الأَفْكَارَ الَّتِي أَنَا مُفْتَكِرٌ بِهَا عَنْكُمْ، يَقُولُ الرَّبُّ، أَفْكَارَ سَلاَمٍ لاَ شَرّ، لأُعْطِيَكُمْ آخِرَةً وَرَجَاءً."
    },
    // Done
    22: {
        title: "Day 22 – I Believe in You",
        text: "I believe in you.\nMore than you know.\nMore than you think you deserve."
    },
    // Done
    23: {
        title: "Day 23 – A Promise",
        text: "Whatever happens in life,\nI’ll always choose you.\nEvery day. Every time."
    },
    // Done
    24: {
        title: "Day 24 – Christmas Eve",
        text: "No matter where we are or how we celebrate,\nbeing with you is my favorite part of Christmas."
    },
    // Done
    25: {
        title: "Day 25 – Christmas With You",
        text: "You're the best gift I could ever ask for.\nALWAYS!"
    },
    // Done
    26: {
        title: "Day 26 – After Christmas",
        text: "Christmas may be over,\nbut my love for you isn’t going anywhere."
    },
    // Done
    27: {
        title: "Day 27 – Little Things",
        text: "It’s the little things you do.\nThe little laughs, the little gestures.\nI notice all of them."
    },
    // Done
    28: {
        title: "Day 28 – Looking Back",
        text: "Look back at this month.\nEvery day, you were loved. Every day, you mattered.\n\nAnd Always you will."
    },
    // Done
    29: {
        title: "Romans 6:4",
        text: "We too may live a new life."
    },
    // Done
    30: {
        title: "Day 30 – You & Me",
        text: "Before the year ends,\nI want you to remember this:\nI choose you.\nAlways."
    },
    // Done
    31: {
        title: "Day 31 – Into the New Year",
        text: "Thank you for this year.\nI can’t wait to live the next ones with you."
    }
};

let musicStarted = false;
const bgMusic = document.getElementById("bg-music");

(function () {
    const backdrop = document.getElementById("modal-backdrop");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const closeBtn = document.getElementById("modal-close");
    const dayCards = document.querySelectorAll(".day-card");

    function openModal(day) {
        const today = new Date().getDate();
        const month = new Date().getMonth() + 1; // Months are zero-based

        // Start music on first user interaction
        if (!musicStarted) {
            bgMusic.volume = 0.2;  // soft start
            bgMusic.play().catch(e => { });
            musicStarted = true;
        }

        if (month < 12) {
            // Block if it's not December
            modalTitle.textContent = "Too Early";
            modalText.textContent = "You can't open this yet.\nPlease wait for December.";
            backdrop.classList.add("is-visible");
            document.body.classList.add("modal-open");
            return;
        }

        // Block if it's not today's date
        if (day > today) {
            modalTitle.textContent = "Not Yet";
            modalText.textContent = "You can’t open this day yet.\nBe patient, my love.";
            backdrop.classList.add("is-visible");
            document.body.classList.add("modal-open");
            return;
        }

        // Load the message
        const entry = messages[day];
        if (entry) {
            modalTitle.textContent = entry.title;
            modalText.textContent = entry.text;
        }

        backdrop.classList.add("is-visible");
        document.body.classList.add("modal-open");
    }

    function closeModal() {
        backdrop.classList.remove("is-visible");
        document.body.classList.remove("modal-open");
    }

    // Attach click events to day cards
    dayCards.forEach(card => {
        card.addEventListener("click", () => {
            const day = card.getAttribute("data-day");
            if (!day) return;
            openModal(day);
        });
    });

    // Close button
    closeBtn.addEventListener("click", closeModal);

    // Click outside the modal (on backdrop)
    backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop) {
            closeModal();
        }
    });

    // Escape key closes modal
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });
})();
