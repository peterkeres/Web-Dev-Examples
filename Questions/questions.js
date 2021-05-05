const quesitons = [
    "what is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i=0) => {
    process.stdout.write(`\n ${quesitons[i]}`);
    process.stdout.write(` > `);
}

ask();

const answers = [];

process.stdin.on("data", data =>{
    answers.push(data.toString().trim());

    if (answers.length < quesitons.length){
        ask(answers.length);
    } else{
        process.exit();
    }


});

process.on("exit", () => {

    const [name, activity, lang] = answers;

    console.log(`\nThank you for your answers.\nGo ${activity} ${name} you can write ${lang} anytime!`);

});