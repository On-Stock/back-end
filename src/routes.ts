import { Router } from 'express';
import { CreateCategoryController } from './controllers/Category/CreateCategoryController';
import { CreateProductController } from './controllers/Product/CreateProductController';
import { AuthController } from './controllers/User/AuthController';
import { CreateUserController } from './controllers/User/CreateUserController';

const router = Router();

router.post('/register', new CreateUserController().handle)
router.post('/login', new AuthController().handle)
router.post('/createProduct', new CreateProductController().handle)
router.post('/createCategory', new CreateCategoryController().handle)

export { router }