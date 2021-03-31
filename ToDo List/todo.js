
let input = prompt("What would you like to do?");
const todos = [];


while( input.toLocaleLowerCase() !== 'quit' && input.toLocaleLowerCase() !== 'q'){
    
    if(input === 'list'){
        for (let index = 0; index < todos.length; index++) {
            console.log(`${index}: ${todos[index]}`);
        }
        
    }else if (input === 'new'){
        const newTodo = prompt('ok, whats the new item??');
        todos.push(newTodo);
        console.log(`${newTodo} was added to the list`);
    }else if (input === 'delete'){
        const indexDelete = parseInt(prompt("Ok, enter number to delete"));

        if (!Number.isNaN(indexDelete)){
            const removed = todos.splice(indexDelete, 1);
            console.log(`ok, deleted ${removed}`);
        }else{
            console.log('UNKNOWN index');
        }
        
    }

    input = prompt("What would you like to do?");

}

console.log("you quit the app");