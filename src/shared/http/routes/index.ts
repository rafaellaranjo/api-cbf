import timesRouter from '@modules/times/routes/times.routes';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import { Router } from 'express';
import jogadoresRouter from '@modules/jogadores/routes/jogadores.routes';
import transferenciasRouter from '@modules/transferencias/routes/transferencia.routes';

const routes = Router();

routes.use('/times', timesRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/jogadores', jogadoresRouter);
routes.use('/transferencias', transferenciasRouter);

export default routes;
