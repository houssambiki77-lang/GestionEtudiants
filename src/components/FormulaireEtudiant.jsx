import { useState } from 'react';

function FormulaireEtudiant() {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');

    const [etudiant, setEtudiant] = useState(null);

    // Exercice 6: Formulaire d’ajout d’un étudiant
    function ajouterEtudiant(e) {
        e.preventDefault();

        if (!nom.trim() || !prenom.trim() || !age.trim()) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        setEtudiant({
            nom: nom,
            prenom: prenom,
            age: age
        });

        setNom('');
        setPrenom('');
        setAge('');
    }

    return (
        <div>
            <h2>Ajouter un étudiant</h2>

            <form onSubmit={ajouterEtudiant}>

                <div>
                    <label>Nom :</label>

                    <input
                        type="text"
                        placeholder="Saisir nom..."
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <label>Prénom :</label>

                    <input
                        type="text"
                        placeholder="Saisir prénom..."
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <label>Âge :</label>

                    <input
                        type="number"
                        min="1"
                        placeholder="Saisir âge..."
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>

                <br />

                <button type="submit">
                    Ajouter
                </button>

            </form>

            {etudiant && (
                <div>
                    <h3>Étudiant ajouté</h3>

                    <p>Nom : {etudiant.nom}</p>
                    <p>Prénom : {etudiant.prenom}</p>
                    <p>Âge : {etudiant.age} ans</p>
                </div>
            )}

        </div>
    );
}

export default FormulaireEtudiant