const jwt = require('jsonwebtoken');
const SECRET = 'raunit45';

const authenticateJwt = (req, res, next) => {
    const token = req.cookies.accessToken || req.headers.authorization?.split(' ')[1];
    if (token) {
        jwt.verify(token, SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        })
    }
    else {
        res.sendStatus(401);
    }
};

module.exports = {
    authenticateJwt,
    SECRET
}