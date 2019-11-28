import React from 'react';

const Students = ({StudentList}) => {
    
    errors = []

    //Student 
    getStudent = () => {
        if(StudentList.length > 0) {
            if(StudentList[0].id) {
                //get student with id
            }
            else{
                //get student avec les props de Student
            }
        }
        else{
            errors.push('Liste vide');
        }
    }
    
    insertStudent = () => {
        if(StudentList.length > 0) {
            StudentList.map((Student) => {
                //insert mongo
            })
        }
        else{
            errors.push('Liste vide');
        }
    }

    deleteStuddent = () => {
        if(StudentList.length > 0) {
            StudentList.map((Student) => {
                //delete mongo
            })
        }
        else{
            errors.push('Liste vide');
        }
    }

    updateStudent = () => {
        if(StudentList.length > 0) {
            StudentList.map((Student) => {
                //update mongo
            })
        }
        else{
            errors.push('Liste vide');
        }
    }
    
    //Students
    getAll = (filters) => {
        //return students
    }
}

export default Connexion

