import prompt from "prompt-sync";
import os from "os";

let ram = os.totalmem()/(1024*1024*1024);
console.log(ram);
let model = parseInt (os.cpus()[0].model.split(" ")[2].charAt(1));
console.log(model);

let diskSize = 250
console.log(diskSize);

let prmpt = prompt();

let deviceModel = parseInt(prmpt("input your device model"));
console.log(" ");

let userDisksize = parseInt(prmpt("What is your hard disk size?"));

let deviceRam = parseInt(prmpt("What is the size of your RAM?"));
console.log(" ");

if( userDisksize >= diskSize && deviceModel >= model && deviceRam >= ram){
    
    while(true){
        let num : number = Math.random()*10;
        let attempts: number = 4;
        console.log("");
        for(let i = 0; i < 4; i++){
            attempts --;
            let guessNum = parseInt(prmpt("guess the number on my mind 😉😉"));
            console.log("");
            if(guessNum===num){
                console.log("You have read my mind 👍👍👍");
                break;
            } else if (guessNum !==num){
                if(guessNum < num){console.log(`Sorry! you are wrong! the number you chose is less than the corect answer. You have ${attempts} chances left`);}
                continue;
            } else if (guessNum > num){
                console.log(`Sorry you are wrong! the number you chose is greater than the correct answer. You have ${attempts} chances left `);
                continue;
            }
        }
        let entry = prmpt("Do you wish to continue?")
        if( entry === "Yes"){
            console.log();
            continue;
        } else if (entry !== "Yes"){
            console.log()
            break;
        }
    }
}else{
    console.log ("Oops! this game cannot run on your system!");
}