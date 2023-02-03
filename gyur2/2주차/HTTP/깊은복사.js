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
console.log(JSON.stringify(newProfile));
// '{"name":"철수","age":13,"school":"다람쥐초등학교","hobby":{"one":"수영","two":"프로그래밍"}}'
console.log(JSON.parse(JSON.stringify(newProfile)))
/*
  {
    name: '철수',
    age: 13,
    school: '다람쥐초등학교',
    hobby: {
      one: '수영',
      two: '프로그래밍',
    }
  }
*/
