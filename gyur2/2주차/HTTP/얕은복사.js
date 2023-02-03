const newProfile = {
    name: '철수',
    age: 13,
    school: '다람쥐초등학교',
    hobby: {
      one: '수영',
      two: '프로그래밍',
    },
  };
  
  const newProfile2 = { ...newProfile };
  
  newProfile2;
  /*
      {
        name: '철수',
        age: 13,
        school: '다람쥐초등학교',
        hobby: {
          one: '수영',
          two: '프로그래밍',
        }
      };
  */
  
  newProfile.hobby.one = '공부';
  console.log(newProfile2.hobby.one); // '공부'