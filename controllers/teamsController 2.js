import {getTeams} from '../service/firestoreService.js'
import  Team  from "./team.js"
import  Stue  from "./stue.js"

class teamsController{

    static async getTeams() {
        return getTeams();
    }

    moveTeam(team, stue){
        team.removeStue(stue);
        team.addStue(stue);
    }

}

export {teamsController}