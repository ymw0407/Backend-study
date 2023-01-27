// 주민번호 만들기

import { checkValidationNumber, blindNumber } from './privateNumber.js';

function customRegistrationNumber(mynum) {
    // 1. 주민번호 올바르게 구성되었는지 확인하기
    const isValid = checkValidationNumber(mynum);

    if (isValid === true) {
        // 2. 주민번호 뒷자리 가리기
        const result = blindNumber(mynum);
        console.log(result);
    }
}

// API 실행하기
customRegistrationNumber("210510-1010101");
customRegistrationNumber("210510-1010101010101");
customRegistrationNumber("2105101010101");