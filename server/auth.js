import OpenIDConnectStrategy from 'passport-openidconnect';
import passport from 'passport';

class Auth {
    constructor (app) {
        passport.use(
            new OpenIDConnectStrategy(
                {
                    issuer: 'https://accounts.google.com',
                    authorizationURL: 'https://accounts.google.com/o/oauth2/v2/auth',
                    tokenURL: 'https://oauth2.googleapis.com/token',
                    userInfoURL: 'https://openidconnect.googleapis.com/v1/userinfo',
                    clientID: process.env.OIDC_CLIENT_ID,
                    clientSecret: process.env.OIDC_CLIENT_SECRET,
                    callbackURL: process.env.OIDC_REDIRECT_URI,
                    scope: 'email profile'
                },
                (issuer, profile, cb) => {
                    const user = {
                        name: profile?.displayName ?? null,
                        email: profile?.emails?.[0]?.value ?? null
                    };
                    return cb(null, user);
                }
            )
        );

        passport.serializeUser((user, done) => {
            done(null, user);
        });
          
        passport.deserializeUser((user, done) => {
            done(null, user);
        });

        app.get('/login', passport.authenticate('openidconnect'));
        app.get(
            '/auth/openid/verify',
            passport.authenticate('openidconnect', { failureRedirect: '/login', failureMessage: true }),
            function(req, res) {
                res.redirect('/');
            }
        );
    }
}

export { Auth };
