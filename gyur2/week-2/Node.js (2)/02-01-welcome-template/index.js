function getWelcomeTemplate() {
	return "<html>" +
						"<body><h1>환영합니다!</h1></body>" +
					"</html>"
}
console.log(getWelcomeTemplate());

const apple = 3;
const banana = 2;

console.log("철수는 사과를 " + apple + "개, " + "바나나를 " + banana + "개 가지고 있습니다.");
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`);  // 템플릿 리터럴