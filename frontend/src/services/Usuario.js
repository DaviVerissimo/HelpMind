const ADMIN = 'Admin';
const PROFISSIONAL_DE_SAUDE = 'profissionalDeSaude';
const PSICOLOGO = 'psicologo';

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

}

export default new Usuario();