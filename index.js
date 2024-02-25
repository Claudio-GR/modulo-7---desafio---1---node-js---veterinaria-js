// importing the operations from the file "operaciones.js"

const {leer, registrar} = require ("./operaciones.js")

// declaring variables for the use of the operations imported
const [action, name, age, species, color, illness]=process.argv.slice(2)

//Conditions in order to excecute one operation or the other
if(action==="registrar"){
    registrar(name, age, species, color, illness)
}

if(action==="leer"){
    leer()
}
