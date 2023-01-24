const checkValidationNumber = (str) => {
    if (checkShape(str).result) {
        const registrationNumber = checkShape(str).number;
        if (
            registrationNumber[0].length == 6 &&
            registrationNumber[1].length == 7
        ) {
            return true;
        } else {
            console.log("에러 발생!! 개수를 제대로 입력해 주세요!!!");
            return false;
        }
    }
    return false;
};

const checkShape = (str) => {
    const registrationNumber = str.split("-");
    if (registrationNumber.length == 2) {
        return { result: true, number: registrationNumber };
    } else {
        console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
        return { result: false };
    }
};

export function customRegistrationNumber(number) {
    if (checkValidationNumber(number)) {
        const result = number.slice(0, -6).padEnd(number.length, "*");
        console.log(result);
    }
}
