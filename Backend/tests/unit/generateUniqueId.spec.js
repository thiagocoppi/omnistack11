const generateUiniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUiniqueId();
        expect(id).toHaveLength(8);
    })
});