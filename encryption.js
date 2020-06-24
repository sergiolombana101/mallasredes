const cr = require('crypto-js');
const key = 'redesmallas';

class Encrypt{
    constructor(){}
    encrypt(text){
        return cr.AES.encrypt(text,key).toString();
    }
    decrypt(text){
        var bytes  = cr.AES.decrypt(text,key);
        var originalText = bytes.toString(cr.enc.Utf8);
        return originalText;
    }
    comparePasswords(client_pass, db_pass){
        return (this.decrypt(client_pass) == this.decrypt(db_pass));
    }
}
exports.encrypt = new Encrypt();