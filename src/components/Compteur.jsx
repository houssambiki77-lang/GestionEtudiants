import { useState } from 'react';

function Compteur() {

    const [compteur, setCompteur] = useState(0);

    return (

        // Exercice 5: Gestion d’un compteur avec useState

        <div>
            <h2>Compteur : {compteur}</h2>

            <button onClick={() => setCompteur(compteur + 1)}>
                Incrémenter
            </button>

            <button onClick={() => setCompteur(compteur - 1)}>
                Décrémenter
            </button>

            <button onClick={() => setCompteur(0)}>
                Remise à zéro
            </button>
        </div>
    );
}

export default Compteur