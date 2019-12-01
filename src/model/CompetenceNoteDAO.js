import Student from Student

const CompetenceNoteDAO = () => {
    
    save = (CompetenceNoteObj) => {
        if(CompetenceNoteObj.isValid()) {
            //insert mongo
            if(error)  {
                console.error("Erreur d'insertion de la competence dans la base", CompetenceNoteObj)
            }
        }         
    }
}
