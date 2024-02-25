//declaring fs for the reading and writing in the operations
const fs = require("fs")

//creating the operation "registrar", which adds an object into the array in "citas.js"
const registrar = (name, age, species, color, illness) => {
    //creating variables to manage the information from "citas.js"
    const register = JSON.parse(fs.readFileSync("citas.json", "utf8"))
    //creating a random id
    const id = Math.floor(Math.random()*100).toString()
    //making sure there's all the info required for scheduling a date in the register
    if(!name||!age||!species||!color||!illness){
        console.error("Por favor ingresar todos los datos requeridos.")
        return
    }
    //adding the new date into the register
    register.push({id, name, age, species, color, illness})
    //overwriting the data in "citas.js" with the data in register
    fs.writeFileSync("citas.json", JSON.stringify(register))
    console.log(register)
}

//creating the operation "leer", which reads all the registered info in the file "citas.js"
const leer = () => {
    const register = JSON.parse(fs.readFileSync("citas.json", "utf8"))
    console.log(register)
}

//exporting the operations so they could be used in the file "index.js"
module.exports = {registrar, leer}