import jwt from 'jsonwebtoken';
import config from 'config';
import User from '../models/User';

function createAccessToken(req, res) {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      user.comparePassword(password, (isMatch) => {
        if (!isMatch) {
          res.status(401).json({
            success: false,
            params: {
              message: 'Authentication failed, incorrect password.'
            }
          });
        }
        else {
          // eslint-disable-next-line
          const { _id, name, email, role, status } = user;
          const payload = {
            _id,
            name,
            email,
            role,
            status
          };

          const token = jwt.sign(payload, config.get('auth.secret'), {
            expiresIn: '1h'
          });

          res.status(200).json({
            success: true,
            params: {
              token
            }
          });
        }
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({
        success: false,
        params: {
          message: 'Not found, no associated user with this email.'
        }
      });
    });
}

export default { createAccessToken };
