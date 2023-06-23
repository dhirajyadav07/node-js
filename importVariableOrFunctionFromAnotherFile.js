//5. import variable or function from another file
//wrong meathod 
//import {x} from './app'
//right meathod
const app=require('./app')
console.log(app.x+app.y)
console.log(app.z)
console.log(app.z())