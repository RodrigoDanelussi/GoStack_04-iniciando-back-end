import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SessionService from '@modules/users/services/SessionService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    console.log('session');
    const { email, password } = request.body;

    const session = container.resolve(SessionService);
    const { user, token } = await session.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  }
}
