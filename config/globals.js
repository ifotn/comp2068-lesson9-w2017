/**
 * Created by RFreeman on 2/8/2017.
 */

// array of global variables
module.exports = {
    // db: 'mongodb://localhost/comp2068-w2017' // local mongodb
    db: 'mongodb://w2017dba:Willnotcopy**@ds145669.mlab.com:45669/comp2068-w2017',
    facebook: {
        clientID: '694312980775759',
        clientSecret: '**bae3b6566ae136006c44edc3aa47c5',
        callbackURL: 'http://localhost:3000/facebook/callback'
    },
    google: {
        clientID: '771555578311-1g9oc612irrk83cakfnvuqq9bm503sda.apps.googleusercontent.com',
        clientSecret: '**5y0yBuplOkcK3ljMt7wkk9',
        callbackURL: 'http://localhost:3000/google/callback'
    }
};
