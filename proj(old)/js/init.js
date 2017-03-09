var player = new Entities.Player({
    name: 'player1',
    info: 'ssdfsdfsdf',
    age: 22,
    playRate: 100
});

var player2 = new Entities.Player({
    name: 'player2',
    info: 'azazaza',
    age: 111,
    playRate: 7
});

for (var i = 4; i >= 0; i--) {
    player.attachCharacter(new Entities.Character({
        name: 'Character' + i,
        skills: {
            fire: 100,
            stun: 10
        },
        money: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        lvl: Math.floor(Math.random() * (15 - 1 + 1)) + 1,
    }))
}

for (var i = 4; i >= 0; i--) {
    player2.attachCharacter(new Entities.Character({
        name: 'Character' + i,
        skills: {
            fire: 100,
            stun: 10
        },
        money: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        lvl: Math.floor(Math.random() * (15 - 1 + 1)) + 1,
    }))
}