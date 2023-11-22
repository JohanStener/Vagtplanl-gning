
// const assert = require('chai').assert
// const { addStue } = require('../assets/JS/model/.js')
// const teamClass = require('../assets/JS/model/team.js')
import { assert } from 'chai';
import Team from '../model/team.js';
import Stue from '../model/stue.js';
import { it } from 'mocha';

describe('teamTest', function () {

    it('should add stue x to team y', function () {
        const instance = new Team('groen')
        const expectedStue = new Stue('groenStue', instance);
        instance.addStue(expectedStue);
        //assert
        assert.strictEqual(instance.getStuer()[0].toString(), expectedStue.toString())
    });


    it('should return a truthy instance of the class team', function () {
        const instance = new Team('red');
        assert.ok(instance);
    });

    it('checks if an object of team has the correct color red', function () {
        const instance = new Team('red');
        assert.strictEqual(instance.farve, 'red')
    });


    it('Checker om den kan tilføjes den samme stue to gange til et team', function () {
      
        const instance = new Team('groen')
        const expectedStue = new Stue('groenStue', instance);
        const result = instance.addStue(expectedStue);
        const say = instance.addStue(expectedStue);

        assert.equal(1, instance.getStuer().length)
    })

    it('Checker om at der kan fjernes et element i et team', function () {
        
        const instance = new Team('groen')
        const expectedStue = new Stue('groenStue', instance);
        instance.removeStue(expectedStue)
        //assert
        assert.equal(0, instance.getStuer().length)
    })
    
    it('checks if the connection between stue and team is set to undefined when removing a stue from a team', () => {
        
        const instance = new Team('groen')
        const expectedStue = new Stue('groenStue', instance);
        //const result = instance.addStue(expectedStue);
        instance.removeStue(expectedStue)
    
        //assert
        assert.strictEqual(undefined, expectedStue.getTeam())
    });
    
});