import jwt from 'jsonwebtoken';

class JWTAuth {

    private jwt: any;
    private secret : string = 'danke_schon_fur_login';

    constructor(jwt: any) {
        this.jwt = jwt;
    }

    assinar(payload: any) {
        return this.jwt.sign(payload, this.secret, {expiresIn: 120});
    }

    async validateToken(authorization: any) {
        return await this.jwt.verify(authorization, this.secret);
    }
}

export default new JWTAuth(jwt);