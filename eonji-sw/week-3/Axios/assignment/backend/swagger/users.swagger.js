// API 명세서 만들기(Swagger)

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 회원 리스트 가져오기
 *     tags: [User]
 *     responses:
 *       200:
 *         details: Response body
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          eamil:
 *                              type: string
 *                              example: aaa@aaa.com
 *                          name:
 *                              type: string
 *                              example: 철수
 *                          phone:
 *                              type: string
 *                              example: 010-1234-5678
 *                          personal:
 *                              type: string
 *                              example: 220110-2222222
 *                          prefer:
 *                              type: string
 *                              example: https://naver.com
 */