const ADMIN = 'Admin';
const PROFISSIONAL_DE_SAUDE = 'profissionalDeSaude';
const PSICOLOGO = 'psicologo';
const SERVIDOR = 'servidor';

class Usuario {

    get_ADMIN() {
        return ADMIN;
    }

    get_PROFISSIONAL_DE_SAUDE() {
        return PROFISSIONAL_DE_SAUDE;
    }

    get_PSICOLOGO() {
        return PSICOLOGO;
    }

    get_SERVIDOR() {
        return SERVIDOR;
    }

}

export default new Usuario();