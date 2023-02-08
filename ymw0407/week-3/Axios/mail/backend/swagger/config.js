export const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: '입력한 전화번호 가져오기 API 명세서',
        version: '1.0.0',
      },
    },
    apis: ['./swagger/*.swagger.js'], // files containing annotations as above
  };