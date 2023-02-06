//데이터 타입에 따른 저장 방식

//1.문자열과 숫자 -> 메모리에 값이 직접 저장
let myMoney = 1000;
let myMoney2 = myMoney;

myMoney2; // 1000
myMoney = 500;
myMoney2; // 1000
//--> 이렇게 myMoney의 값을 바꿔주어도 myMoney2의 값이 바뀌지 않음(얕은 복사)

//2.배열과 객체 -> 메모리에 데이터의 '주소값'이 저장 됨
//그러면 기존 값이 바뀌면 복사한 2 값도 같이 바뀌는 거임(깊은 복사)

/////////////////////////////////////////////////////////////////////
//얕은 복사와 깊은 복사
//1.얕은 복사
const profile = {
    name: "영희", // profile.name의 값(문자열)을 직접 주입
    age: 12,
    school: "국민초등학교",
  };

const profile3 = {
    name: profile.name, // profile.name의 값(문자열)을 직접 주입
    age: profile.age,
    school: profile.school,
  };
  
profile.name = '훈이';
  
profile3.name; // '영희'
// 실제 값인 문자열을 복사해주었기 때문에 서로 영향을 끼치지 않음!(깊은 복사야?)
//근데 귀찮잖아 언제 저렇게 하나씩 해주고 있어 -> spread 연산자 사용
const profile4 = {...profile3};
profile3.name = "맹구";
profile4.name; //영희

const result = [];
const arr = [1,2,3];
const arr2 = [4,5,6];

result.push(...arr, ...arr2); //[1,2,3,4,5,6]
//이렇게 배열의 원소들이 하나씩 result에 들어가는 거야
//이게 깊은 복사냐?? 그렇지 않음 !!!!! spread 연산자는 얕은 복사를 함



//2.깊은 복사
//객체 마냥 생겼지만 사실은 문자열인 상황
const newProfile = `{
    name: '철수',
    age: 13,
    school: '다람쥐초등학교',
    hobby: {
      one: '수영',
      two: '프로그래밍',
    },
  }`

//JSON.stringfy()와 JSON.parse()
//이렇게 JSON을 이용하면 깊은 복사가 가능함
JSON.parse(JSON.stringify(newProfile));

//REST 파라미터
//1.delete 메소드
const child = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
    money: 2000,
    hobby: '수영',
  };

// delete child.hobby;
// delete child.money;
//이렇게 하면 원본 객체를 제어하는 것 -> 옳지 x

//구조 분해 할당을 통해 해결!
const {money, hobby, ...rest} = child;
//rest = {이름, 나이, 학교} (이 때 이 아이들은 얕은 복사로 생성되는 애들임)



