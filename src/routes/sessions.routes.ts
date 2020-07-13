import { Router } from 'express';

import SessionService from '../service/SessionService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  console.log('session');
  const { email, password } = request.body;

  const session = new SessionService();

  const { user, token } = await session.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionRouter;
