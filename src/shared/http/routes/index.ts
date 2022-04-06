import timesRouter from '@modules/times/routes/times.routes';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import { Router } from 'express';
import jogadoresRouter from '@modules/jogadores/routes/jogadores.routes';
import transferenciasRouter from '@modules/transferencias/routes/transferencia.routes';
import torneiosRouter from '@modules/torneios/routes/torneios.routes';
import timeTorneiosRouter from '@modules/timeTorneios/routes/timeTorneios.routes';

const routes = Router();

routes.use('/times', timesRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/jogadores', jogadoresRouter);
routes.use('/transferencias', transferenciasRouter);
routes.use('/torneios', torneiosRouter);
routes.use('/timeTorneios', timeTorneiosRouter);

export default routes;
