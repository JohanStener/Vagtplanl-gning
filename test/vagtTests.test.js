import { assert } from 'chai';
import Vagt from '../model/vagt.js';
import Medarbejder from '../model/medarbejder.js';
describe('samletTid', function () {

  let startTid = new Date;
  let slutTid = new Date;

  console.log(diffInHours);


  it('Samlet tid plus', function () {
    startTid.setHours(13);
    startTid.setMinutes(0);
    slutTid.setHours(16);
    slutTid.setMinutes(0);
    const medarbejder = new Medarbejder()
    const vagt = new Vagt(medarbejder, starttid, sluttid)
    assert.equal(3, vagt.samletTid())
  })

  it('Samlet tid nul', function () {
    const medarbejder = new Medarbejder()
    const vagt = new Vagt(medarbejder, starttid, sluttid)
    assert.equal(0, vagt.samletTid())
  })

  it('Samlet tid negativ', function () {
    const medarbejder = new Medarbejder()
    const vagt = new Vagt(medarbejder, starttid, sluttid)
    assert.equal(-1, vagt.samletTid())
  })

})