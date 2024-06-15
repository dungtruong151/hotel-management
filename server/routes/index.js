import { Router } from 'express';
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct,
    getAllRooms, getRoom, createR, deleteR, updateR, 
    getAllRates, getRate, createRA, deleteRA, updateRA,
    getAllDeals, getDeal, createD, deleteD, updateD
} from '../handlers/index.js';

const appRouter = Router();

//Products
appRouter.get('/products', getAllProducts);
appRouter.get('/products/:id', getProduct);
appRouter.post('/products/create', createProduct);
appRouter.put('/products/update/:id', updateProduct);
appRouter.delete('/products/delete/:id', deleteProduct);

//Room
appRouter.get('/rooms', getAllRooms);
appRouter.get('/rooms/:id', getRoom);
appRouter.post('/rooms/create', createR);
appRouter.put('/rooms/update/:id', updateR);
appRouter.delete('/rooms/delete/:id', deleteR);

// Rate
appRouter.get('/rates', getAllRates);
appRouter.get('/rates/:id', getRate);
appRouter.post('/rates/create', createRA);
appRouter.put('/rates/update/:id', updateRA);
appRouter.delete('/rates/delete/:id', deleteRA);

// Deal
appRouter.get('/deals', getAllDeals);
appRouter.get('/deals/:id', getDeal);
appRouter.post('/deals/create', createD);
appRouter.put('/deals/update/:id', updateD);
appRouter.delete('/deals/delete/:id', deleteD);

export default appRouter;
