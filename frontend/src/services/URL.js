const DOMINIO = 'http://localhost:8080';
//const DOMINIO = 'https://adsmt.ifpb.edu.br:3101';

const CLIENT_ID = '';
const REDIRECT_URI  = '';

class URL {

    getDominio() {
        return DOMINIO;
    }

    getClientId() {
        return CLIENT_ID;
    }

    getRedirectUri() {
        return REDIRECT_URI;
    }

}

export default new URL();
