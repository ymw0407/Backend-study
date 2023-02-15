// 휴대폰 인증 토큰 전송하기

const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  const phone = document.getElementById('PhoneNumber01').value + document.getElementById('PhoneNumber02').value
                + document.getElementById('PhoneNumber03').value
  await axios.post('http://localhost:3000/tokens/phone',{
    phone: phone
  }).then(function(res){
    console.log(res.data) // res 는 부가정보도 함께 , res.data 는 response문만!!
  })
  
}

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  const phone = document.getElementById('PhoneNumber01').value + document.getElementById('PhoneNumber02').value
                + document.getElementById('PhoneNumber03').value
  const token = document.getElementById('TokenInput').value
  await axios.patch('http://localhost:3000/tokens/phone',{
    phone: phone,
    token: token
  }).then(function(res){
    console.log(res.data)
  })
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById('SignupName').value 
  const personal = document.getElementById('SignupPersonal1').value + document.getElementById('SignupPersonal2').value 
  const phone = document.getElementById('PhoneNumber01').value + document.getElementById('PhoneNumber02').value
                + document.getElementById('PhoneNumber03').value
  const prefer = document.getElementById('SignupPrefer').value
  const email = document.getElementById('SignupEmail').value
  const pwd = document.getElementById('SignupPwd').value
  await axios.post('http://localhost:3000/user', {
    name: name,
    phone: phone,
    personal: personal,
    prefer: prefer,
    email: email,
    pwd: pwd
  }).then(function(res){
    console.log(res.data)
  })
}
