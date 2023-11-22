class Dag{
    constructor(navn){
        this.navn = navn
        this.Vagts = {}
    }

    setNavn(navn){
        this.navn = navn
    }

    getNavn(){
        return this.navn
    }

    addVagt(vagt){
        if(!this.Vagts.includes(vagt)){
        this.vagt.push(vagt)
        return vagt
        }
    }

    removeVagt(vagt){
        if(this.Vagts.includes(vagt)){
            const index = this.Vagts.index.of(vagt)
            this.Vagts.splice(index,1)
        }
    }
}