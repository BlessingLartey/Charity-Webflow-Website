import { createCustomerController, getCustomerController, getCustomersController } from "../controllers/customerController";


const express  = require('express');

const router = express.Router();

console.log('Customers route is available');

router.get('/', getCustomersController);
router.post('/', createCustomerController);

router.get('/:id', getCustomerController);

module.exports = router;
