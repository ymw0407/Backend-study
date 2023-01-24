// string copy 확인
{
    let stringCopy = "철수";
    let stringCopy2 = stringCopy;

    stringCopy = "철수 아님";

    console.log(stringCopy); // 철수 아님
    console.log(stringCopy2); // 철수
}
/**
 * string 및 Number, undefined, Boolean, Symbol, BigInt와 같은 경우에는
 * 변경 불가능한 immutable value라고 볼 수 있습니다.
 * 이와 같은 변수 타입들은 copy를 하게 되었을때, 값 자체를 복사하기 때문에
 * deep copy를 한다고 볼 수 있습니다.
 */

// Object copy 확인
{
    let objectCopy = {
        name: "철수",
        age: 20,
        school: "Kookmin Univ.",
    };
    let objectCopy2 = objectCopy;

    objectCopy.age = 21;

    console.log(objectCopy.age); // 21
    console.log(objectCopy2.age); // 21
}
/**
 * Object 및 Array, function 타입은 참조 타입으로, 메모리 할당 같은 경우에는 주소를 참조하게 된다.
 * 참조타입들은 값이 변할 수 있기 때문에 immutable하지 않다고 한다.
 * 따라서 const로 선언을 하더라도, properties들은 변할 수 있다.
 * 또한 copy를 했을때, properties가 바뀌어도, 주소 값은 변하지 않기 때문에 내부의 값들은 동기화가 되고
 * 이를 shallow copy라고 한다.
 */

// spread 연산자 ...
{
    let objectCopy = {
        name: "철수",
        age: 20,
        school: "Kookmin Univ.",
        hobby: {
            one: "피아노",
            two: "산책",
        },
    };
    let objectCopy2 = { ...objectCopy };

    objectCopy.age = 22;

    console.log(objectCopy.age); // 22
    console.log(objectCopy2.age); // 20

    objectCopy.hobby.one = "피아노 아닌뒈...";

    console.log(objectCopy.hobby.one); // 피아노 아닌뒈...
    console.log(objectCopy2.hobby.one); // 피아노 아닌뒈...
}
/**
 * spread 연산자를 사용하여 원시타입을 갖고 있는 properties들은 제대로 copy된 것을 확인할 수 있습니다.
 * 하지만, 내부에 존재하는 참조타입은 주소값이 copy가 된 것을 확인할 수 있고, 이를 통해서 spread 또한 shallow copy임을 확인할 수 있습니다.
 */
