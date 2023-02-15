export function inDB(myphone, db){ 
    for (var i= 0; i < db.length ; i++){
      if (db[i].phone == myphone){
        return db[i]
      }else{
        continue
      }
    }
    return false
}

export async function getToken() {
    const count = 6
    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
      count,
      '0'
    )
    return result
}