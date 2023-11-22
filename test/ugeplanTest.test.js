import { assert } from 'chai';
import Team from '../model/team.js';
import Stue from '../model/stue.js';
import Medarbejder from '../model/medarbejder.js';
import Dag from '../model/dag.js';
import Vagt from '../model/vagt.js';
import Ugeplan from '../model/ugeplan.js';


describe('dagsplansTest', () => {

    it('tjekker om en dag kan tilføjes til ugeplan klassens array', () => {
        //arrange
        const dag = new Dag('mandag');
        const ugeplan = new Ugeplan(1, 2023);

        //act
        ugeplan.addDag(dag);

        //assert
        assert.strictEqual(ugeplan.getDage()[0], dag)
    });

    it('', () => {

    });

    it('tjekker man kan tilføje 2 mandage (navn) til listen på ugeplan, lyser grøn hvis man ikke kan', () => {
         //arrange
         const dag = new Dag('mandag');
         const dag1 = new Dag('mandag')
         const ugeplan = new Ugeplan(1, 2023);
 
         //act
         ugeplan.addDag(dag);
         ugeplan.addDag(dag1);
 
         //assert
         assert.equal(1, ugeplan.getDage().length)
    });


    it('tjekker man kan tilføje 2 mandage (objekt) til listen på ugeplan, lyser grøn hvis man ikke kan', () => {
        //arrange
        const dag = new Dag('mandag');
        const ugeplan = new Ugeplan(1, 2023);

        //act
        ugeplan.addDag(dag);
        ugeplan.addDag(dag);

        //assert
        assert.equal(1, ugeplan.getDage().length)
   });

});