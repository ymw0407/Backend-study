//1.이메일이 정상적인 형태인지 확인
export function checkValidationEmail(email){
    if (email==undefined || !email.includes("@")){
        console.log("이메일을 올바르게 입력해주세요.");
        return false;
    } else{
        return true;
    }
}

//2.주민번호가 정상적인 형태인지 확인
export function checkValidationNumber(number){
    //갯수와 형식이 올바른지 확인
    let a = number.split('-');
    if((a[0].length != 6 || a[1].length != 7)||number[6] != "-"){
        console.log("주민번호를 올바르게 입력해주세요.");
        return false;
    }
    return true;
};


//3.전화번호 형식 확인
export function checkValidationPhone(myphone){
    if (myphone.length != 10 && myphone.length != 11){
        console.log("핸드폰 번호를 올바르게 입력해주세요.");
        return false;
    } else return true;
}
