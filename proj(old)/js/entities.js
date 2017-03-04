var Entities = {
    Player: function(data, sdfsd) {
        Entities.Base.apply(this, arguments);
        this.info = data.info;
        this.age = data.age;
        this.playRate = data.playRate;
        this.characters = [];
    },
    Character: function(data) {
        Entities.Base.apply(this, arguments);
        this.skills = data.skills;
        this.health = data.health;
        this.money = data.money;
        this.lvl = data.lvl;
    },
    Base: function(data) {
        this.id = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
        this.name = data.name;
        var date = new Date();
        this.createdAt = date;
        this.updatedAt = date;
    },
};




Entities.Player.prototype = Object.create(Entities.Base.prototype)
Entities.Player.constructor = Entities.Player;

Entities.Character.prototype = Object.create(Entities.Base.prototype)
Entities.Character.constructor = Entities.Character;




Entities.Player.prototype.attachCharacter = function(character) {
    if (!(character instanceof Entities.Character)) {
        throw "Can't set character";
    }
    this.characters.push(character);
}

Entities.Player.prototype.getCharacter = function(id) {
    var chars = this.characters.filter(function(char) {
        return char.id == id;
    });
    if (!chars.length) {
        throw "Can't find character";
    }
    return chars[0];
}

Entities.Player.prototype.kill = function(id) {
    var chars = this.characters;
    for (var key in chars) {
        if (chars[key].id != id) continue;
        this.characters.splice(key, 1);
    }
    return this;
}

Entities.Player.prototype.attack = function() {

}

Entities.Player.prorotype.defend = function() {

}