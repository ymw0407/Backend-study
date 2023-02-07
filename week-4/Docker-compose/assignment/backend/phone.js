export async function getToken() {
  const count = 6
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    '0'
  )
  return result
}
export function getData(myphone, db){ // 함수를 phone.js 로 빼고 싶었는데 error.....왜?
  for (var i= 0; i < db.length ; i++){
    if (db[i].phone == myphone){
      return db[i]
    }else{
      continue
    }
  }
  return false
}
