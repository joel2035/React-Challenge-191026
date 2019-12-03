const AuthDAO = () => {
    
    //Student 
    exist = (AuthObj) => {
        //get auth avec couple email mdp
        if(result) {
            return AuthObj
        }
        return false
    }
    
    save = (AuthObj) => {
        if(AuthObj.isValid() && !AuthObj.exist()) {
            //insert mongo
            if(error)  {
                console.error("Erreur d'insertion de l'Auth dans la base", AuthObj)
            }
        }         
    }
}
