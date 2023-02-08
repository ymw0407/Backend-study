// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
    document.querySelector("#ValidationInputWrapper").style.display = "flex";
    const phone =
        document.getElementById("PhoneNumber01").value +
        document.getElementById("PhoneNumber02").value +
        document.getElementById("PhoneNumber03").value;
    console.log(phone);
    axios
        .post("http://localhost:8000/tokens/phone", {
            myphone: phone,
        })
        .then((res) => {
            console.log(res);
        });
    console.log("인증 번호 전송");
};

// 회원 가입 API 요청
const submitSignup = async () => {
    const email = document.getElementById("SignupEmail").value;
    const name = document.getElementById("SignupName").value;
    const phone =
        document.getElementById("PhoneNumber01").value +
        document.getElementById("PhoneNumber02").value +
        document.getElementById("PhoneNumber03").value;
    const site = document.getElementById("SignupPrefer").value;
    const password = document.getElementById("SignupPwd").value;
    const personalNumber = document.getElementById("SignupPersonal").value;
    const myuser = { email, name, phone, site, password, personalNumber };
    axios
        .post("http://localhost:8000/users", {
            myuser: myuser,
        })
        .then((res) => {
            console.log(res);
        });
    console.log("회원 가입 이메일 전송");
};
