const notFound = (req, res) => {
  res.status(404).send(`Page not found ${req.originalUrl}`);
};

module.exports = notFound;
