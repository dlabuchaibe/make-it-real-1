const division = require('../api/utilities/division');

describe('division', ()=>{
    it('exitosa', ()=>{
        expect(division(2,2)).toBe(1);
    });
    it('entre cero', ()=>{
        expect(division(2,0)).toBe("error");
    });
});
