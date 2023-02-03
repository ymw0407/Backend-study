//chrome console

//1
const profile = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
  };
  const profile2 = profile;
  
  profile2; // { name: '철수', age: 8, school: '다람쥐초등학교' };
  
  //2
  profile.name = '영희';
  
  profile2; // { name: '영희', age: 8, school: '다람쥐초등학교' };
  
  //-> 결과. 원본 객체의 변화가 복사된 객체에 영향을 주고 있습니다.
  //profile과 profile2는 같은 주솟값을 공유함.

  /////////////////////
  //3
  const child = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
    money: 2000,
    hobby: '수영',
  };
money; // 2000
hobby; // "수영"
rest; // { name: '철수', age: 8, school: '다람쥐초등학교' }


  //4
  const { money, hobby, ...a } = child;
  money; // 2000
  hobby; // "수영"
  a; // { name: '철수', age: 8, school: '다람쥐초등학교' }