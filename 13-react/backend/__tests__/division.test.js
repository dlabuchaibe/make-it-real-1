const division = require('./../api/utilities/division');

test('test: division', ()=>{
    expect(division(2,2)).toBe(1);
});
test('test: division entre cero', ()=>{
    expect(division(2,0)).toBe("error");
});