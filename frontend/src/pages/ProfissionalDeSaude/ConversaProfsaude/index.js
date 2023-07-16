import ConversaComponente from "../../../Components/ConversaComponente"
import ToobarProfissionalDeSaude from "../ToobarProfissionalDeSaude";
import Usuario from "../../../services/Usuario";

export default function ConversaProfsaude() {
const isPsicologo = false;

    return (

        <div>
            <ToobarProfissionalDeSaude></ToobarProfissionalDeSaude>
            <ConversaComponente
                visualizadoPeloProfSaude={true}
                visualizadoPeloPsicologo={false}
                metadata={'metadataProfissionaldeSaude'}
                isPsicologo={isPsicologo}
            ></ConversaComponente>
        </div>

    );
}
