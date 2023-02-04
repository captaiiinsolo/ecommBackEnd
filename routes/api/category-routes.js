const router = require('express').Router();
const { Category, Product, ProductTag, Tag } = require('../../models');

// The `/api/categories` endpoint


// Find all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}, {model: ProductTag}, {model: Tag}],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Find categories by ID
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}, {model: ProductTag}, {model: Tag}],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that ID!'});
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
