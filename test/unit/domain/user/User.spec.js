const User = require('../../../../src/domain/user/User');

describe('User', () => {
    describe('When name is present and age is > 18', () => {
        it('is valid', () => {
            //setup
            const user = new User({
                name: 'Fulano',
                age: 19
            });

            //execution
            const validation = user.validate();

            //assertion
            expect(validation.isValid).toBe(true);

        });
    });
    describe('When name is not present', () => {
        it('is invalid', () => {
            //setup
            const user = new User({
                age: 19
            });

            //execution
            const validation = user.validate();

            //assertion
            expect(validation.isValid).toBe(false);

        });
    });
});