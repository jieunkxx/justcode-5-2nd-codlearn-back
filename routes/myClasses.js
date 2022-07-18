const { Router } = require('express');
const asyncWrap = require('../async-wrap');
const router = Router();

const {
  getMyClassItemsController,
  addMyClassItemsController,
  deleteMyClassItemController,
  updateMyClassItemsController,
} = require('../controller/myClasses');

router.get('/:id', asyncWrap(getMyClassItemsController));
router.put('/:id', asyncWrap(addMyClassItemsController));
router.put('/:id/update', asyncWrap(updateMyClassItemsController));
router.delete('/:id', asyncWrap(deleteMyClassItemController));

module.exports = router;
