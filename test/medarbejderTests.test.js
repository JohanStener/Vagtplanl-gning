import { assert } from 'chai';
import Team from '../model/team.js';
import Stue from '../model/stue.js';
import Medarbejder from '../model/medarbejder.js';

describe('medarbejdertest', function () {

    it('checks if a truthy object of medarbejder', function () {
        //arrange
        const team = new Team('groen')
        const stue = new Stue('groenStue', team);
        const instance = new Medarbejder('svend', stue, 30, true)
        //act

        //assert
        assert.ok(instance)
    })

    it('checks if setStue can change stue on a medarbejder', function () {
        //arrange
        const team = new Team('groen')
        const stue1 = new Stue('groenStue', team);
        const stue2 = new Stue('blaastue', team);
        const instance = new Medarbejder('svend', stue1, 30, true)
        //act
        instance.setStue(stue2);
        //
        assert.strictEqual(instance.getStue(), stue2)
    })

    it('checks if a medarbejder can get moved from one team to another', function () {
        //arrange
        const team = new Team('groen')
        const stue1 = new Stue('groenStue', team);
        const stue2 = new Stue('blaastue', team);
        const instance = new Medarbejder('svend', stue1, 30, true)
        //act
        instance.setStue(stue2);
        //
        assert.strictEqual(instance.getStue().getMedarbejdere()[0], instance)
        // assert.ok(instance.getStue().getMedarbejdere()[0])

    })


    it('sums all the hours a medarbejder works in a week', function () {
        //arrange
        const team = new Team('groen')
        const stue1 = new Stue('groenStue', team);
        const stue2 = new Stue('blaastue', team);
        const instance = new Medarbejder('svend', stue1, 30, true)

        //act

        //assert


    })

    it('sums all the hours a medarbejder works in a month', function () {

    })
})