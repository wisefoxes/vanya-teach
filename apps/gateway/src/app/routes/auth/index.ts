import * as express from 'express';
import * as authorization from 'libs/grpc/js/authorization_pb';

const authRouter = express.Router({ mergeParams: true });

authRouter.post('/google', (req: express.Request, res: express.Response) => {
	console.log(authorization);

	return res.json({
		success: true,
		request: JSON.stringify(req.body),
	});
});

export { authRouter };
