import { assert } from 'chai';
import Team from '../model/team.js';
import Stue from '../model/stue.js';
import Medarbejder from '../model/medarbejder.js';

describe('stuetest',function(){
    it('test om teamet arraylist bliver updateret.', function(){
        const team = new Team('grøn')
        const stue = new Stue('Anujan',team)

        assert.equal(1,team.getStuer().length)
    })

    it('Tester om at medarbejderens stue bliver updateret når addMedarbejder bliver kaldt', function(){
       //arrange
        const team = new Team('groen')
        const stue = new Stue('groenStue', team);
        const instance = new Medarbejder('svend', 30, true)

        //act
        stue.addMedarbejder(instance);

        //assert
        assert.strictEqual(instance.getStue(), stue);
    })

    it('tester om en medarbejder fjernes korrekt fra en stue', () => {
        //arrange
        const team = new Team('groen')
        const stue = new Stue('groenStue', team);
        const instance = new Medarbejder('svend', 30, true)

        //act
        stue.addMedarbejder(instance);
        stue.removeMedarbejder(instance);

        //assert
        assert.strictEqual(undefined, instance.getStue())
    });

    it('tester om stuens arrayliste bliver opdateret når der tilføjes en medarbejder', () => {
        //arrange
        const team = new Team('groen')
        const stue = new Stue('groenStue', team);
        const instance = new Medarbejder('svend', 30, true)
        //act
        stue.addMedarbejder(instance);
        //assert
        assert.equal(1, stue.getMedarbejdere().length)
    });

    it('tester om stuens arrayliste bliver opdateret når der fjernes en medarbejder', () => {
        //arrange
        const team = new Team('groen')
        const stue = new Stue('groenStue', team);
        const instance = new Medarbejder('svend', 30, true)
        stue.addMedarbejder(instance);
        //act
        stue.removeMedarbejder(instance);
        //assert
        assert.equal(0, stue.getMedarbejdere().length)
    });
})