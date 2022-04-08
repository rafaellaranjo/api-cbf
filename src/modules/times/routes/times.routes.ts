import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import TimesController from '../controllers/TimesController';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';

const timesRouter = Router();
const timesController = new TimesController();

timesRouter.get('/', isAuthenticated, timesController.index);
timesRouter.get('/:id', isAuthenticated, timesController.index);
timesRouter.post('/', isAuthenticated, timesController.index);
timesRouter.put('/:id', isAuthenticated, timesController.index);
timesRouter.delete('/:id', isAuthenticated, timesController.index);

timesRouter.get('/', timesController.index);

timesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  timesController.show,
);

timesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      localidade: Joi.string().required(),
    },
  }),
  timesController.create,
);

timesRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      localidade: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  timesController.update,
);

timesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  timesController.delete,
);

export default timesRouter;
