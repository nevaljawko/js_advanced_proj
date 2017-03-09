function fight(p1, p2) {
    var char1 = p1.getRandomCharacter();
    var char2 = p2.getRandomCharacter();
    maxhealth = Math.max(char1.health, char2.health);

    setTimeout(function fun() {
        try {
            char1.attack(char2);
            char2.attack(char1);
        } catch (e) {
            LOG.add(e);
            if (char1.health < 0) {
                p1.kill(char1.id);
                char2.health += maxhealth;
            } else if (char2.health < 0) {
                p2.kill(char2.id);
                char1.health += maxhealth;
            }
            TEMPLATE.render();
            return;
        }
        fightTimer = setTimeout(fun, 100);
    }, 200);
}


TEMPLATE.init();