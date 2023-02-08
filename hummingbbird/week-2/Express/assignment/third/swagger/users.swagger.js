//users.swagger.js

/**
 * @swagger
 * /boards:
 *   get:
 *     summary: 회원 목록 가져오기
 *     tags: [User]
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
 *                              example: aaa@gmail.com
 *                          nname:
 *                              type: string
 *                              example: 철수1
 *                          phone:
 *                              type: string
 *                              example: 010-1234-5678
 *                          personal:
 *                              type: string
 *                              example: 210110-1111111
 *                          prefer:
 *                              type: string
 *                              example: https://naver.com
 */
