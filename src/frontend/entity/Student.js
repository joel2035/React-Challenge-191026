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
        //then : return this avec les valeurs de BD
        return new Student('id_sd54fd4sfdsf4ds4f4d', 'nom', 'prenom', 'promo', 'descCursus','email@email.com', [{name = 'Front', note = 'A'}, {name = 'Gestion de projet', note = 'B'}])
        //catch : console.error(JSON.parse(msg))
    }

    udpdate = () => {
        //post a '/student/edit/:id'
        //then : return this avec les valeurs de BD
        return new Student('id_sd54fd4sfdsf4ds4f4d', 'nom', 'prenom', 'promo', 'descCursus','email@email.com', [{name = 'Front', note = 'A'}, {name = 'Gestion de projet', note = 'B'}])
        //catch : console.error(JSON.parse(msg))
    }

    get = () => {
        //get a '/student/get/:id'
        //then : return this avec les valeurs de BD
        return new Student('id_sd54fd4sfdsf4ds4f4d', 'nom', 'prenom', 'promo', 'descCursus','email@email.com', [{name = 'Front', note = 'A'}, {name = 'Gestion de projet', note = 'B'}])
        //catch : console.error(JSON.parse(msg))
    }

    getAll = (filter /*{field => value} oprator = est implicite */) => {
        //post a '/student/getall'
        //then : return this avec les valeurs de BD
        return [
            new Student('id_sd54fd4sfdsf4ds4f4d', 'nom', 'prenom', 'promo', 'descCursus','email@email.com', [{name = 'Front', note = 'A'}, {name = 'Gestion de projet', note = 'B'}]),
            new Student('id_sd54fd4sfdsf4ds4f4d', 'nom', 'prenom', 'promo', 'descCursus','email@email.com', [{name = 'Front', note = 'A'}, {name = 'Gestion de projet', note = 'B'}]),
            new Student('id_sd54fd4sfdsf4ds4f4d', 'nom', 'prenom', 'promo', 'descCursus','email@email.com', [{name = 'Front', note = 'A'}, {name = 'Gestion de projet', note = 'B'}]),
            new Student('id_sd54fd4sfdsf4ds4f4d', 'nom', 'prenom', 'promo', 'descCursus','email@email.com', [{name = 'Front', note = 'A'}, {name = 'Gestion de projet', note = 'B'}]),
            new Student('id_sd54fd4sfdsf4ds4f4d', 'nom', 'prenom', 'promo', 'descCursus','email@email.com', [{name = 'Front', note = 'A'}, {name = 'Gestion de projet', note = 'B'}])
        ]
        //catch : console.error(JSON.parse(msg))
    }
}