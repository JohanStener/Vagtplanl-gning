import { assert } from "chai";
import Team from "../model/team.js";
import Stue from "../model/stue.js";
import Medarbejder from "../model/medarbejder.js";

const team = new Team("groen");
const stue1 = new Stue("groenStue", team);
const instance = new Medarbejder("svend", stue1, 30, true);
const expected = instance;
const actual = stue1.getMedarbejdere[0];
console.log(stue1.getMedarbejdere()[0]);
