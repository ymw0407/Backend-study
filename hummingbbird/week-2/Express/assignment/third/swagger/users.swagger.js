// users.swagger.js

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 사용자 리스트 가져오기
 *     tags: [Users]
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
 *                              example: yunminwo1211@gmail.com
 *                          name:
 *                              type: string
 *                              example: 윤민우
 *                          phone:
 *                              type: string
 *                              example: 010-0000-0000
 *                          personal:
 *                              type: string
 *                              example: 000000-0000000
 *                          prefer:
 *                              type: string
 *                              example: ymw0407.github.io
 * 
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 사용자 리스트 가져오기
 *     tags: [Users]
 *     responses:
 *          200:
 *              description: 성공
 */