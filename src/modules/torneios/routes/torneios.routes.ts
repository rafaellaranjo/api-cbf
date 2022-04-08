import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import TorneiosController from '../controllers/TorneiosController';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';

const torneiosRouter = Router();
const torneiosController = new TorneiosController();

torneiosRouter.get('/', isAuthenticated, torneiosController.index);
torneiosRouter.get('/:id', isAuthenticated, torneiosController.index);
torneiosRouter.post('/', isAuthenticated, torneiosController.index);
torneiosRouter.put('/:id', isAuthenticated, torneiosController.index);
torneiosRouter.delete('/:id', isAuthenticated, torneiosController.index);

torneiosRouter.get('/', torneiosController.index);

torneiosRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  torneiosController.show,
);

torneiosRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      quantidade_times: Joi.number().required(),
      valor: Joi.number().required(),
    },
  }),
  torneiosController.create,
);

torneiosRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      quantidade_times: Joi.number().required(),
      valor: Joi.number().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  torneiosController.update,
);

torneiosRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  torneiosController.delete,
);

export default torneiosRouter;
