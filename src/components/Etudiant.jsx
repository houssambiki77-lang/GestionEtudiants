function Etudiant({ nom, prenom, age, filiere }) {
    return (
        <div>

        {/* Exercice 2 : Création d’un composant React
            <h1>Gestion des étudiants</h1>
            <p>Bienvenue dans l'application de gestion des étudiants.</p>
            <p>Voici la liste des étudiants : 
        Nom : Ahmed
        Prénom : Alami
        Âge : 20 ans
        Filière : Développement informatique</p>
        */}

        <h2>Informations de l'étudiant</h2>

            <p>Nom : {nom}</p>
            <p>Prénom : {prenom}</p>
            <p>Âge : {age} ans</p>
            <p>Filière : {filiere}</p>

        </div>
    );
}

export default Etudiant