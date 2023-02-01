function checkCount(number){
    let a = number.split('-');
    if(a[0].length == 6 && a[1].length == 7){
        return true;
    } else{
        console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!");
        return false;
    }
};

function checkValidationNumber(number){
    //a.형식이 올바른지 확인
    if(number[6] != "-"){
        console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
        return false;
    } return true;
};


// customRegistrationNumber("210510-1010101");
// customRegistrationNumber("210510-1010101010101");
// customRegistrationNumber("2105101010101");


export function customRegistrationNumber(number){
    //1.주민 번호가 올바른 형식으로 입력되었는지 확인하는 함수
    if(checkValidationNumber(number) && checkCount(number)){
        //2.올바르게 변경해서 콘솔에 출력하는 함수
        let result = number.substr(0, 8) + "******"
        console.log(result);
    }
    return;
};