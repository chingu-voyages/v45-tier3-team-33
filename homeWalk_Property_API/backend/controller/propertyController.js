const Property = require('../models/propertyModels');

// Create a new property
const createProperty = async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(200).json({ message: 'property posted', data: property });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Get all properties
const getAllproperties = async (req, res) => {
  try {
    const properties = await Property.find();

    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get a specific property by ID

const getSingleProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update property by id
const updatePropertyById = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete property by id

const deletePropertyById = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json({
      message: ' selected property deleted',
      data: property,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProperty,
  getAllproperties,
  getSingleProperty,
  updatePropertyById,
  deletePropertyById,
};
