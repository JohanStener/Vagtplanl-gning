import Team from "./team.js";

class Stue {
  constructor(navn, team) {
    this.team = team;
    this.navn = navn;
    this.medarbejdere = [];
    // På controller?
    team.addStue(this);
  }

  toString() {
    return this.navn;
  }

  getTeam() {
    return this.team;
  }
  getNavn() {
    return this.navn;
  }
  getMedarbejdere() {
    return this.medarbejdere;
  }
  setNavn(navn) {
    this.navn = navn;
  }

  // På controller?
  setTeam(team) {
    this.team = team;
  }

  addMedarbejder(medarbejder) {
    if (!this.medarbejdere.includes(medarbejder)) {
      this.medarbejdere.push(medarbejder);
      // medarbejder.addStue(this)
      return medarbejder;
    }
  }
  removeMedarbejder(medarbejder) {
    if (this.medarbejdere.includes(medarbejder)) {
      let index = this.medarbejdere.indexOf(medarbejder);
      if (index >= 0) {
        this.medarbejdere.splice(index, 1);
      }
      return medarbejder;
    }
  }
}

export default Stue;
