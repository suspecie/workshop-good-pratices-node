const request = require('../../support/request');

describe('userCreate', () => {
    describe('when user JSON is valid', () => {
        it('returns the persisted user', async () => {
            const response = await request()
                .post('/api/users')
                .send({
                    user: {
                        name: 'Name',
                        age: 43
                    }
                });

            const user = response.body;

            expect(user.id).toBeTruthy();
            expect(user.name).toBe('Name');
            expect(user.age).toBe(43)

        });
        it('returns status 201', async () => {
            await request()
                .post('/api/users')
                .send({
                    user: {
                        name: 'Name',
                        age: 42
                    }
                })
                .expect(201);
        });

    });
});