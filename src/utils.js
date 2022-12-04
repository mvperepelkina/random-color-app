export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let randomColor = '#';
    for(let i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * letters.length)];
    };
    return randomColor;
};