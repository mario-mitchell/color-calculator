//In this project we'll create a program that can combine and deconstruct colors according to the following tables

const prompt = require('prompt-sync')({ sigint: true });

let choice = (prompt("Do you want to construct or deconstruct colors?: "));

if (choice === "construct") {
    let color1 = (prompt("Pick the first color you want combined: "));
    let color2 = (prompt("Pick the second color you want combined: "));
    if ((color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red")) {
        console.log("Red and Blue mix to make Purple")
    } else if ((color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red")) {
        console.log("Red and Yellow mix to make Orange")
    } else if ((color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue")) {
        console.log("Blue and Yellow mix to make Green")
    } else console.log("Error!")
    //Constructor
} else if (choice === "deconstruct") {
    let color3 = (prompt("Pick the color you want deconstucted: "));
    if (color3 === "purple") {
        console.log("Purple deconstructed makes Red and Blue")
    } else if (color3 === "orange") {
        console.log("Orange deconstructed makes Red and Yellow")
    } else if (color3 === "green") {
        console.log("Green deconstructed makes Blue and Yellow")
    } else console.log("Error!")
    //Deconstructor
}
