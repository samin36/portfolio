module.exports = (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.json({
    message: "communicating with backend!",
  });
};
