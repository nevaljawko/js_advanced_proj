function fight(p1, p2) {
	var char1 = p1.getCharacter(1);
	var char2 = p2.getCharacter(4);
	while (true) {
		try {
			char1.attack(char2);
			char2.attack(char1);
		} catch (e) {
			console.log(e);
			break;
		}
	}
}