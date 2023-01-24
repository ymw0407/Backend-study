const now = () => {
    const date = new Date();
    const yyyy = String(date.getFullYear()).padStart(4, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const mi = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");

    return `${yyyy}년 ${mm}월 ${dd}일 ${hh}:${mi}:${ss}`;
};

const welcome = () => {
    const date = now();
    const text = `오늘은 ${date}입니다.`
    console.log(text)
};

welcome()