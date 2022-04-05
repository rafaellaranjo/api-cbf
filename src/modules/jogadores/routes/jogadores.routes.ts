import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import JogadoresController from '../controllers/JogadoresController';

const jogadoresRouter = Router();
const jogadoresController = new JogadoresController();

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
