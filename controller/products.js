const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'products' });
};

module.exports = {
  getAllProducts,
};
