const AuthDAO = ({Auth}) => {
    
    
    //Student 
    exist = () => {
        //get auth avec couple email mdp
        if(result) {
            return new Auth(result.id, result.password)
        }
        return false
    }
    
    save = () => {
        if(Auth.isValid()) {
            //insert mongo
        }         
    }
}
