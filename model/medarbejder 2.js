class Medarbejder {
  constructor(navn, stue, timeAntal, isPaedagog) {
    this.navn = navn;
    this.stue = stue;
    this.timeAntal = timeAntal;
    this.isPaedagog = isPaedagog;
  }

  toString() {
    return this.navn + " / " + this.stue;
  }
  
}
export default Medarbejder
