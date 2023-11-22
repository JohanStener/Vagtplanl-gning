import Stue from "./stue.js";

class Team {
  constructor(farve) {
    this.farve = farve;
    this.stuer = [];
  }

  addStue(stue) {
    this.stuer.push(stue);
    return stue;
  }

  getFarve() {
    return this.farve;
  }

  getStuer() {
    return this.stuer;
  }

  setFarve(farve) {
    this.farve = farve;
  }

  removeStue(stue) {
    if (this.stuer.includes(stue)) {
      let index = this.stuer.indexOf(stue);
      if (index >= 0) {
        this.stuer.splice(index, 1);
      }
      return stue;
    }
  }
}
export default Team;



