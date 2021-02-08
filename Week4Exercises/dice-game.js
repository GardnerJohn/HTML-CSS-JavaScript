function rollDice() {
    let goldCoins = 0;

    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert(`You rolled a ${roll}.`);
        if (roll === 1) {
            alert(`Game over, no more rolls!`);
            break;
        }
        if (roll < 5) {
            if (roll === 4) {
                alert(`You have rolled a 4. Subtract 1 gold coin.`);
                goldCoins--;
            }
            alert(`You have won ${goldCoins} gold coins so far!`)
            continue;
        }
        alert(`Congratulations, you win ${roll} gold coins`);
        goldCoins += roll;
    }
    alert(`You have won a total of ${goldCoins} gold coins!`);
}