import User from '../models/User';

function listUsers(req, res) {
  User.find({})
    .then((users) => {
      if (req.decoded.role === 'admin') {
        res.status(200).json({
          success: true,
          params: {
            users
          }
        });
      }
      else {
        res.status(403).json({
          success: false,
          params: {
            message: 'Forbidden, permission denied.'
          }
        });
      }
    })
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

export default { listUsers };
