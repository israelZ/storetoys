const pasport =require('passport');
const GoogleStrategy=require('passport-google-oauth20')
const keys=require('./keys')

pasport.use(
    new GoogleStrategy({
        callbackURL:'/aoth/google/redirect', 
        clientID:keys.google.clientID,
        clientsecret:keys.google.clientsecret
        },()=>{}
        ))
