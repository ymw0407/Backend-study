// starbucks.swagger.js

/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 커피 종류 가져오기
 *     tags: [starbucks]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: coffee1
 *                          kcal:
 *                              type: int
 *                              example: 5
 */