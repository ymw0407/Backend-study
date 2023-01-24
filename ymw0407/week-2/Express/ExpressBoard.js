import express from 'express';

const app = express();

app.use(express.json())
app.get('/boards', (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {
      number: 1,
      writer: '철수',
      title: '제목입니다~~',
      contents: '내용이에요@@@',
    },
    {
      number: 2,
      writer: '영희',
      title: '영희 제목입니다~~',
      contents: '영희 내용이에요@@@',
    },
    {
      number: 3,
      writer: '훈이',
      title: '훈이 제목입니다~~',
      contents: '훈이 내용이에요@@@',
    },
  ];

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post('/boards', (req, res) => {
  console.log(req.body);

  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

  // 2. 저장 결과 응답 주기
  res.send('게시물 등록에 성공하였습니다!!');
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});