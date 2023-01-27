import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/users', (req, res)=> {
    const result = [
    // 회원 1명 데이터 객체 예시
    { 
	email : "aaa@gmail.com", 
	name : "person1",
	phone : "010-1234-5678",
	personal : "220110-2222222",
	prefer : "https://naver1.com"
    },
    { 
	email : "aaa@gmail.com", 
	name : "person2",
	phone : "010-1234-5678",
	personal : "220110-2222222",
	prefer : "https://naver2.com"
    },
    { 
	email : "aaa@gmail.com", 
	name : "person3",
	phone : "010-1234-5678",
	personal : "220110-2222222",
	prefer : "https://naver3.com"
    },
    { 
	email : "aaa@gmail.com", 
	name : "person4",
	phone : "010-1234-5678",
	personal : "220110-2222222",
	prefer : "https://naver4.com"
    },
    { 
	email : "aaa@gmail.com", 
	name : "person5",
	phone : "010-1234-5678",
	personal : "220110-2222222",
	prefer : "https://naver5.com"
    }
    ]

    res.send(result)
})

app.get('/starbucks', (req, res)=>{
    const result =[
    // 커피 1개 객체 데이터 예시
    { name: 'coffee1', kcal: 5 },
    { name: 'coffee2', kcal: 5 },
    { name: 'coffee3', kcal: 5 },
    { name: 'coffee4', kcal: 5 },
    { name: 'coffee5', kcal: 5 },
    { name: 'coffee6', kcal: 5 },
    { name: 'coffee7', kcal: 5 },
    { name: 'coffee8', kcal: 5 },
    { name: 'coffee9', kcal: 5 },
    { name: 'coffee10', kcal: 5 }
    ]

    res.send(result)
})

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`) 
  }) // 3000번 포트에서 실행