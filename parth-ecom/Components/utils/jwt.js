import jwt from 'jsonwebtoken';

export function generateToken(payload) {
    const token = jwt.sign(payload, '');
    return token;
}