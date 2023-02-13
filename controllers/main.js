const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError('Provide username and password');
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '2h' });
  res.status(200).json({ status: 'success', msg: 'User created', token });
};

const dashboard = async (req, res) => {
  // console.log(req.user);
  const luckyNum = Math.floor(Math.random() * 100);
  res.status(200).json({
    status: 'success',
    msg: `Hello ${req.user.username}`,
    secret: `You're authorized, your lucky number is: ${luckyNum}`,
  });
};

module.exports = { login, dashboard };
