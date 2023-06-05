let randomNumber = Math.floor(Math.random() * 3);

let signs = ['Aquarius', 'Cancer', 'Capricorn', 'Pisces'];
let luck = ['bad luck', 'average luck', 'amazing luck', 'absolutely horrible luck'];
let should = ['just give up', 'work harder', 'stop being a little bitch', 'play the lottery', 'be a superstar'];



function generatedMessage() {
    console.log(`Youre an idiot for believing in this, but if you must know your sign is ${signs[Math.floor(Math.random() * signs.length)]}`);
    console.log(`You are having ${luck[Math.floor(Math.random() * luck.length)]}`);
    console.log(`You should: ${should[Math.floor(Math.random() * should.length)]}`);
}

generatedMessage();
