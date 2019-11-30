import Student from Student

const StudentDAO = ({StudentObj}) => {
    
    //StudentObj 
    get = () => {
        if(StudentObj.id()) {
            //get StudentObj with id
            if(error)  {
                console.error("Erreur d'insertion de l'etudiant dans la base", StudentOb)
            }
            else{
                return new Student(result.id, result.password)
            }            
        }
    }
    
    save = () => {
        if(StudentObj.isValid()) {
            //insert mongo
            if(error)  {
                console.error("Erreur d'insertion de l'etudiant dans la base", StudentOb)
            }
        }         
    }

    del = () => {
        if(StudentObj.isValidForUD()) {
            //delete mongo
            if(error)  {
                console.error("Erreur de suppression de l'etudiant la base", StudentObj)
            }
        }
    }

    update = () => {
        if(StudentObj.isValidForUD()) {
            //update mongo
            if(error)  {
                console.error("Erreur d'ajout de l'etudiant dans la base", StudentObj)
            }
        }         
    }
    
    //StudentObjs
    getAll = (filter = null) => {
        switch(filter) {
            case null : 
                //get all StudentObj mongo
                break;
            default :
                if(filter.isValid()) {
                    //get StudentObj with filter
                }
        }
    }
}
