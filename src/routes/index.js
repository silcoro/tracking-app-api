const { Router } = require('express');

const userRouter = require('./UserRouter');
const productRouter =  require('./ProductRouter');

const router = Router();

router.use('/user', userRouter);
router.use('/product', productRouter);

module.exports = router;