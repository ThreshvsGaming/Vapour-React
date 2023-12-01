export const searchGames = (games, text) => {
    let tokens = text.trim().split(/\s+/);
    tokens = tokens.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // Escape special characters
    // tokens = tokens.map(token => token === "" ? undefined : token).filter(token => token !== undefined);

    if (tokens.length > 0) {
        tokens = tokens.map(word => `(?=.*${word})`);
        let inputValueRegex = new RegExp(tokens.join(''), 'gim');
        // let inputValueRegex = new RegExp(text, 'i');
        return games.filter(game => game.title.match(inputValueRegex));
    }
    return games;
}
