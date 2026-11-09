import { useState } from 'react';

//Exercice 7: Ajouter un étudiant à une liste

function GestionEtudiants() {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');

    const [etudiants, setEtudiants] = useState([]);

    function ajouterEtudiant(e) {
        e.preventDefault();

        if (!nom.trim() || !prenom.trim() || !age.trim()) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        const nouvelEtudiant = {
            id: Date.now(),
            nom: nom,
            prenom: prenom,
            age: age
        };

        setEtudiants([...etudiants, nouvelEtudiant]);


        setNom('');
        setPrenom('');
        setAge('');
    }

    return (
        <div>
            <h2>Gestion des étudiants</h2>

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

            <hr />

            <h2>Liste des étudiants</h2>

            {etudiants.length === 0 ? (
                <p>Aucun étudiant pour le moment.</p>
            ) : (
                etudiants.map((etudiant) => (
                    <p key={etudiant.id}>
                        {etudiant.nom} {etudiant.prenom} — {etudiant.age} ans
                    </p>
                ))
            )}

        </div>
    );
}

export default GestionEtudiants
