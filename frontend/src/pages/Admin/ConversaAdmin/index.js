import ConversaComponente from "../../../Components/ConversaComponente"
import ToobarAdmin from "../ToobarAdmin";
import Usuario from "../../../services/Usuario";

export default function ConversaAdmin() {
const isPsicologo = false;

    return (

        <div>
            <ToobarAdmin></ToobarAdmin>
            <ConversaComponente
                visualizadoPeloProfSaude={true}
                visualizadoPeloPsicologo={false}
                metadata={'metadataAdmin'}
                isPsicologo={isPsicologo}
            ></ConversaComponente>
        </div>

    );
}
