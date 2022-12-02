import { Router } from 'express';
import { CreateCategoryController } from './controllers/Category/CreateCategoryController';
import { DeleteCategoryController } from './controllers/Category/DeleteCategoryController';
import { GetCategoriesController } from './controllers/Category/GetCategoriesController';
import { GetUniqueCategory } from './controllers/Category/GetUniqueCategory';
import { UpdateCategoryController } from './controllers/Category/UpdateCategoryController';
import { BuyProductController } from './controllers/Product/BuyProductController';
import { CreateProductController } from './controllers/Product/CreateProductController';
import { DeleteProductController } from './controllers/Product/DeleteProductController';
import { GetAllProductsController } from './controllers/Product/GetAllProductsController';
import { GetBestProductsController } from './controllers/Product/GetBestProductsController';
import { GetUniqueProductController } from './controllers/Product/GetUniqueProductController';
import { UpdateProductController } from './controllers/Product/UpdateProductController';
import { AuthController } from './controllers/User/AuthController';
import { CreateUserController } from './controllers/User/CreateUserController';
import { DeleteUserController } from './controllers/User/DeleteUserController';
import { UpdateUserController } from './controllers/User/UpdateUserController';

const router = Router();

router.post('/register', new CreateUserController().handle)
router.post('/login', new AuthController().handle)
router.post('/updateUser', new UpdateUserController().handle)
router.post('/deleteUser', new DeleteUserController().handle)

router.post('/createProduct', new CreateProductController().handle)
router.get('/getUniqueProduct/:productId', new GetUniqueProductController().handle)
router.get("/getAllProducts", new GetAllProductsController().handle)
router.get("/getBestProducts", new GetBestProductsController().handle)
router.post("/deleteProduct", new DeleteProductController().handle)
router.post("/updateProduct", new UpdateProductController().handle)

router.post('/buyProduct', new BuyProductController().handle)

router.post('/createCategory', new CreateCategoryController().handle)
router.get("/getUniqueCategory/:categoryId", new GetUniqueCategory().handle)
router.get("/getCategories", new GetCategoriesController().handle)
router.post("/updateCategory", new UpdateCategoryController().handle)

router.post("/deleteCategory", new DeleteCategoryController().handle)

export { router }