// Playing with grabbing user arguments at the command line when calling file

const grab = flag => {
    let user = process.argv.indexOf(flag) +1;
    return process.argv[user];
}


const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);