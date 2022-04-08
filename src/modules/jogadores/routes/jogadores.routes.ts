import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import JogadoresController from '../controllers/JogadoresController';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';

const jogadoresRouter = Router();
const jogadoresController = new JogadoresController();

jogadoresRouter.get('/', isAuthenticated, jogadoresController.index);
jogadoresRouter.get('/:id', isAuthenticated, jogadoresController.index);
jogadoresRouter.post('/', isAuthenticated, jogadoresController.index);
jogadoresRouter.put('/:id', isAuthenticated, jogadoresController.index);
jogadoresRouter.delete('/:id', isAuthenticated, jogadoresController.index);

jogadoresRouter.get('/', jogadoresController.index);

jogadoresRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  jogadoresController.show,
);

jogadoresRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      data_nascimento: Joi.string().required(),
      pais: Joi.string().required(),
      time: Joi.string().required(),
    },
  }),
  jogadoresController.create,
);

jogadoresRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      data_nascimento: Joi.string().required(),
      pais: Joi.string().required(),
      time: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  jogadoresController.update,
);

jogadoresRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  jogadoresController.delete,
);

export default jogadoresRouter;
