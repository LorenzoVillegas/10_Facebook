export class Post{

    autore: string
    testo: string
    like: number

    constructor(autore: string, testo: string) {
        this.autore = autore
        this.testo = testo
        this.like = 0
    }
    
}

class Comment{
    testo: string


    constructor(testo: string){
        this.testo = testo

    }
}