
export function right_type(number){
    if(number[6] != "-"){
        console.log("에러 발생!!! 형식이 올바르지 않습니다!!!")
        return false
    } else if(number.length != 14){
        console.log("에러 발생!!! 개수가 올바르지 않습니다!!!")
        return false
    }
    return true
}

export function change_number(number){
    return number.substr(0,8) + "******"
}