//In this project we'll create a program that can combine and deconstruct colors according to the following tables

const prompt = require('prompt-sync')({ sigint: true });

let choice = (prompt("Do you want to construct or deconstruct colors?: "));
//Constructor
if (choice === "construct") {
    let color1 = (prompt("Pick the first color you want combined: "));
    let color2 = (prompt("Pick the second color you want combined: "));
    if ((color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red")) {
        console.log("Red and Blue together to make Purple")
    } else if ((color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red")) {
        console.log("Red and Yellow together to make Orange")
    } else if ((color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue")) {
        console.log("Blue and Yellow together to make Green")
    } else if ((color1 === "red" && color2 === "green") || (color1 === "green" && color2 === "red")) {
        console.log("Red and Green together to make Brown")
    } else if ((color1 === "blue" && color2 === "green") || (color1 === "green" && color2 === "blue")) {
        console.log("Blue and Green together to make Blue-Green")
    } else if ((color1 === "red" && color2 === "white") || (color1 === "white" && color2 === "red")) {
        console.log("Red and White together to make Pink")
    } else if ((color1 === "White" && color2 === "Black") || (color1 === "Black" && color2 === "White")) {
        console.log("Black and White together to make Gray")
    } else if ((color1 === "Yellow" && color2 === "Red") || (color1 === "Red" && color2 === "Yellow")) {
        console.log("Red and Yellow together to make Orange")
    } else if ((color1 === "Blue" && color2 === "White") || (color1 === "White" && color2 === "Blue")) {
        console.log("Blue and White together to make Light Blue")
    } else console.log("Error!")
 //Deconstructor 
} else if (choice === "deconstruct") {
    let color3 = (prompt("Pick the color you want deconstucted: "));
    if (color3 === "purple") {
        console.log("Purple deconstructed makes Red and Blue")
    } else if (color3 === "orange") {
        console.log("Orange deconstructed makes Red and Yellow")
    } else if (color3 === "green") {
        console.log("Green deconstructed makes Blue and Yellow")
    } else if (color3 === "blue-green") {
        console.log("Blue-Green deconstructed makes Blue and Green")
    } else if (color3 === "brown") {
        console.log("Brown deconstructed makes Red and Green")
    } else if (color3 === "pink") {
        console.log("Pink deconstructed makes Red and White")
    } else if (color3 === "Gray") {
        console.log("Gray deconstructed makes Black and White")
    } else if (color3 === "orange") {
        console.log("Orange deconstructed makes Red and Yellow")
    } else if (color3 === "light blue") {
        console.log("Light Blue deconstructed makes White and Blue")
    } else console.log("Error!")
    
}
