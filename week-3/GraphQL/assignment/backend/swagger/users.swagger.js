// users.swagger.js

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 회원 정보 가져오기
 *     tags: [users]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: naver.com
 *                          name:
 *                              type: string
 *                              example: coffee1
 *                          phone:
 *                              type: string
 *                              example: 01012345678
 *                          personal: 
 *                              type: string
 *                              example: 012345-6789012
 *                          prefer:
 *                              type: string
 *                              example: http://naver1.com
 */