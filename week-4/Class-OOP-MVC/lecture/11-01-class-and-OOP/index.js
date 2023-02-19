// index.js

/**
class Date{
	getFullYear(){
	 }
	getMonth(){
	 }
}
**/

const aaa = new Date()
console.log(aaa.getFullYear())
aaa.getMonth()
// index.js

class Monster {
    power = 10;
  
    attack = () => {
      console.log("공격하자!!");
      console.log("내 공격력은 " + this.power + " 이야!!!");
    };
  
    run = () => {
      console.log("도망가자!!");
    };
  }
  
  const mymonster1 = new Monster();
  mymonster1.attack();
  mymonster1.run();
  
  const mymonster2 = new Monster();
  mymonster2.attack();
  mymonster2.run();