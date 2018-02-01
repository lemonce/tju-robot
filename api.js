/**
 * @api {post} /api/connection
 * 
 * @apiParamExample {json} Request-Example:
 * 		{
 * 			"name": "",
 * 			"baudrate": "115200",
 * 			"switch": "opened"
 *		}

 * @apiDescription Create a port connection
 */

/**
 * @api {delete} /api/connection
 * 
 * @apiDesecription Close a port connection
 */

/**
 * @api {put} /api/joint/angle?number=15
 * 
 * @apiDescription Zero point homing of all joints
 */

/**
 * @api {post} /api/config
 * 
 * @apiParamExample {json} Request-Example:
 * 		{
 * 			"zeroAngle": "135",
 *		}

 * @apiDescription Save zero point angle
 */

/**
 * @api {put} /api/joint/:jointId
 * 
 * @apiParamExample {json} Request-Example:
 * 		{
 * 			"id": "",
 * 			"angle": "",
 * 			"mode": ""
 *		}

 * @apiDescription Set a single joint
 */

/**
 * @api {put} /api/joint
 * 
 * @apiParamExample {json} Request-Example:
 * 		{
 * 			"id": "",
 * 			"angle": "",
 *		}
 * 
 * @apiDescription Set all angle of all joints
 */

/**
 * @api {put} /api/speed
 * 
 * @apiDescription Set speed
 */

/**
 * @api {patch} /api/joint/:id
 * 
 * @apiParamExample {json} Request-Example:
 * 		{
 * 			"id": "",
 * 			"newId": "",
 *		}

 * @apiDescription Reset joint id
 */

/**
 * @api {post} /api/action
 * 
 * @apiParamExample {json} Request-Example:
 * 		{
 * 			"cmd": "speed/position/delay",
 * 			"args": "",
 *		}

 * @apiDescription Create action
 */

/**
 * @api {get} /api/joint?number
 * 
 * @apiDescription Read all angle of all joints
 */

/**
 * @api {get} /api/joint/:jointId
 * 
 * @apiDescription Read anlge of joint by id
 */

/**
 * @api {get} /api/action/name
 * 
 * @apiDescription Read all action names
 */

/**
 * @api {get} /api/action/:name
 * @apiDescription Read action by name
 */

/**
 * @api {head} /api/action/:name
 * 
 * @apiDescription Execute action by name
 */
