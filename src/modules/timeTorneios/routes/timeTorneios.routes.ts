import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import TimeTorneiosController from '../controllers/TimeTorneioController';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';

const timeTorneiosRouter = Router();
const timeTorneiosController = new TimeTorneiosController();

timeTorneiosRouter.get('/', isAuthenticated, timeTorneiosController.index);
timeTorneiosRouter.post('/', isAuthenticated, timeTorneiosController.index);
timeTorneiosRouter.get('/:id', isAuthenticated, timeTorneiosController.index);
timeTorneiosRouter.put('/:id', isAuthenticated, timeTorneiosController.index);
timeTorneiosRouter.delete(
  '/:id',
  isAuthenticated,
  timeTorneiosController.index,
);

timeTorneiosRouter.get('/', timeTorneiosController.index);

timeTorneiosRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  timeTorneiosController.show,
);

timeTorneiosRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      time: Joi.string().required(),
      torneio: Joi.string().required(),
    },
  }),
  timeTorneiosController.create,
);

timeTorneiosRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      time: Joi.string().required(),
      torneio: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  timeTorneiosController.update,
);

timeTorneiosRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  timeTorneiosController.delete,
);

export default timeTorneiosRouter;
