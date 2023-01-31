// 커피 목록 조회 API를 요청해주세요.
const getCoffee = (res) => {
  // 1. 백엔드 서버로 /starbucks API 요청해 커피 데이터를 받는다.
  console.log(res) // res 타입 확인 -> 배열 내 객체 다수
  // 2. 받은 데이터로 createMenuCard 함수를 이용해 메뉴 카드를 모두 만들어주세요.
  res.forEach(createMenuCard) // forEach : 배열 내 모든 원소에 함수 적용
}

const createMenuCard = (data) => {
  const menuCardWrapper = document.createElement('div')
  menuCardWrapper.className = 'Menu_Card_Wrapper'

  const menuCardImgBox = document.createElement('div')
  menuCardImgBox.className = 'Menu_Card_ImgBox'

  const menuCardName = document.createElement('div')
  menuCardName.className = 'Menu_Card_Name'
  menuCardName.textContent = data?.name || '메뉴이름'

  const menuCardInfo = document.createElement('div')
  menuCardInfo.className = 'Menu_Card_Info'
  menuCardInfo.textContent = data?.kcal || '칼로리'

  const menuWrapper = document.querySelector('#Menu_Background')
  menuCardWrapper.appendChild(menuCardImgBox)
  menuCardWrapper.appendChild(menuCardName)
  menuCardWrapper.appendChild(menuCardInfo)
  menuWrapper.appendChild(menuCardWrapper)
}
