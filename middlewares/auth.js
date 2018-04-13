import jwt from 'jsonwebtoken';
import config from 'config';

function auth(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, config.get('auth.secret'), (error, decoded) => {
      if (error) {
        console.log(error);
        res.status(401).json({
          success: false,
          message: 'Unauthorized, invalid access token.'
        });
      }
      else {
        req.decoded = decoded;
        next();
      }
    });
  }
  else {
    res.status(403).json({
      success: false,
      message: 'Forbidden, access token not found.'
    });
  }
}

export default auth;
