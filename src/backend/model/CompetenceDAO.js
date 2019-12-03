const CompetenceDAO = () => {
    
    save = (CompetenceObj) => {
        if(CompetenceObj.isValid()) {
            //insert mongo
            if(error)  {
                console.error("Erreur d'insertion de la competence dans la base", CompetenceObj)
            }
        }         
    }
}
