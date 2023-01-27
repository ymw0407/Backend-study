import {right_type, change_number} from "./day01-sub.js"
function createToken(number){
    if(right_type(number)){
        const result = change_number(number)
        console.log(result)
    }
}

createToken("210510-1010101")
createToken("210510-1010101010101")
createToken("2105101010101")