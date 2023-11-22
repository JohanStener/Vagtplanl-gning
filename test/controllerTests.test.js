import { assert } from 'chai';
import Team from '../model/team.js';
import Stue from '../model/stue.js';
import teamsController from '../controllers/teamsController.js';
import Medarbejder from '../model/medarbejder.js';

describe('controllertest',function(){

    it('MoveTeam() - Tester om alle forbindelser bliver korrekt opdateret', function(){
        // Arrange
        const teamGrøn = new Team('grøn')
        const teamRød = new Team('rød')
        const stue1 = new Stue('Anujan',teamGrøn)
        const controller = new teamsController();

        controller.moveTeam(teamRød, stue1);

        // Act
        const expected = teamRød.getStuer()[0]
        const actual = stue1;

        // Assert
        assert.strictEqual(actual, expected)
        
    })

})