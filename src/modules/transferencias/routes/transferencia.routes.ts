import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import TransferenciasController from '../controllers/TransferenciaController';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';

const transferenciasRouter = Router();
const transferenciasController = new TransferenciasController();

transferenciasRouter.get('/', isAuthenticated, transferenciasController.index);
transferenciasRouter.post('/', isAuthenticated, transferenciasController.index);
transferenciasRouter.get(
  '/:id',
  isAuthenticated,
  transferenciasController.index,
);
transferenciasRouter.put(
  '/:id',
  isAuthenticated,
  transferenciasController.index,
);
transferenciasRouter.delete(
  '/:id',
  isAuthenticated,
  transferenciasController.index,
);

transferenciasRouter.get('/', transferenciasController.index);

transferenciasRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  transferenciasController.show,
);

transferenciasRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      jogador: Joi.string().required(),
      time_origem: Joi.string().required(),
      time_destino: Joi.string().required(),
      data: Joi.string().required(),
      valor: Joi.number().required(),
    },
  }),
  transferenciasController.create,
);

transferenciasRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      jogador: Joi.string().required(),
      time_origem: Joi.string().required(),
      time_destino: Joi.string().required(),
      data: Joi.string().required(),
      valor: Joi.number().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  transferenciasController.update,
);

transferenciasRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  transferenciasController.delete,
);

export default transferenciasRouter;
