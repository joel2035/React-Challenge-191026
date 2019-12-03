import Student from Student

const StudentDAO = () => {
    
    //StudentObj 
    get = (StudentObj) => {
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
    
    save = (StudentObj) => {
        if(StudentObj.isValid()) {
            //insert mongo
            if(error)  {
                console.error("Erreur d'insertion de l'etudiant dans la base", StudentOb)
            }
        }         
    }

    del = (StudentObj) => {
        if(StudentObj.isValidForUD()) {
            //delete mongo
            
            
            
        }
    }

    update = (StudentObj) => {
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
