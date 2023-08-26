const express = require('express');
const {
  createProperty,
  getAllproperties,
  getSingleProperty,
  updatePropertyById,
  deletePropertyById,
} = require('../controller/propertyController');

const router = express.Router();
router.post('/create', createProperty);
router.get('/getAll', getAllproperties);
router.get('/:id', getSingleProperty); // path variable
router.put('/:id', updatePropertyById);
router.delete('/:id', deletePropertyById);

module.exports = router;
