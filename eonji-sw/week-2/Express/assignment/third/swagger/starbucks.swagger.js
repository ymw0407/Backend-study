// API 명세서 만들기(Swagger)

/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 커피 메뉴 리스트 가져오기
 *     tags: [Starbucks]
 *     responses:
 *       200:
 *         details: Response body
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: 아메리카노
 *                          kcal:
 *                              type: int
 *                              example: 5
 */