const Utils = require('./../../src/utils/utils');
const Constants = require('./../../src/utils/constants');

it('Status code OK', () => {
    const result = Utils.responseStatus(undefined)
    expect(result).toEqual(200)
})

it('Status code BAD REQUEST', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name)
    expect(result).toEqual(400)
});

it('Status code CONFLICT', () => {
    const result = Utils.responseStatus(Constants.ErrorDuplicate.name)
    expect(result).toEqual(409)
})

it('Status code NOT_FOUND', () => {
    const result = Utils.responseStatus(Constants.ErrorNotFound.name)
    expect(result).toEqual(404)
});

it('Status code INTERNAL_SERVER_ERROR', () => {
    const result = Utils.responseStatus({})
    expect(result).toEqual(500)
});

it('Status code OK - caso inválido', () => {
    const result = Utils.responseStatus({})
    expect(result).not.toEqual(200);
})

it('Status code OK', () => {
    const result = Constants.ErrorNotFound.message
    expect(result).toMatch("Not Found!")
})
