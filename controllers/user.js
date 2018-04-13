import User from '../models/User';

function createUser(req, res) {
  User.create(req.body)
    .then(user => res.status(201).json({ success: true, params: { user } }))
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        success: false,
        params: {
          message: 'Internal sever error.'
        }
      });
    });
}

export default { createUser };
