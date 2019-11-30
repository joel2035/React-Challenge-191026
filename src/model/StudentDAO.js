import Student from Student

const StudentDAO = ({StudentObj}) => {
    
    //StudentObj 
    get = () => {
        if(StudentObj.id()) {
            //get StudentObj with id
            return new Student(result.id, result.password)
        }
    }
    
    save = () => {
        if(StudentObj.isValid()) {
            //insert mongo
        }         
    }

    del = () => {
        if(StudentObj.isValidForUD()) {
            //delete mongo
        }
    }

    update = () => {
        if(StudentObj.isValidForUD()) {
            //insert mongo
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
