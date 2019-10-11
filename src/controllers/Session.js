const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;
    let user;

    try {
      user = await User.findOne({ email });

      if (!user) {
        user = await User.create({ email });
      }
    } catch (ex) {
      return res.status(400).json(`Erro ao inserir o usuário: ${ex}`);
    }

    return res.json(user);
  },
};
