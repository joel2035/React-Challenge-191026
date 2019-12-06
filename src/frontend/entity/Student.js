export default class Student {
    constructor(
        id = null, 
        nom = null, 
        prenom = null, 
        promo = null, 
        descCusrus = null, 
        email = null, 
        competenceNote = null
        ) {
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.promo = promo
        this.descCursus = descCursus
        this.email = emeil
        this.competenceNote = competenceNote
    }

    id = () => {
        return this.id
    }
    nom = () => {
        return this.nom
    }
    prenom = () => {
        return this.prenom
    }
    promo = () => {
        return this.promo
    }
    descCusrus = () => {
        return this.descCusrus
    }
    email = () => {
        return this.email
    }
    competenceNote = () => {
        return this.competenceNote
    }

    save = () => {
        //get a '/student/add'
    }

    udpdate = () => {
        //post a '/student/edit/:id'
    }

    get = () => {
        //get a '/student/get/:id'
    }

    getAll = (filter /*{field => value} oprator = est implicite */) => {
        //post a '/student/getall'
    }
}