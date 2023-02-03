import {checkValidationnumber, getToken} from "./privateNumber.js";
function customRegistrationNumber(number) {
    const isValid = checkValidationnumber(number);
    
    if (isValid) {
        getToken(number);
    }
}

//customRegistrationNumber("210510-1010101");
//customRegistrationNumber("210510-1010101010101");
// checkValidationnumber("2105101010101");
