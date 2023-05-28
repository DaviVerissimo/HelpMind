import ConversaComponente from "../../../Components/ConversaComponente"
import ToobarPsicologo from "../ToobarPsicologo";
import Usuario from "../../../services/Usuario";

export default function ConversaPsicologo() {
const isPsicologo = true;

    return (

        <div>
            <ToobarPsicologo></ToobarPsicologo>
            <ConversaComponente
                visualizadoPeloProfSaude={false}
                visualizadoPeloPsicologo={true}
                metadata={'metadataPsicologo'}
                isPsicologo={isPsicologo}
            ></ConversaComponente>
        </div>

    );
}
