const makeUserRepository = require('../../../../src/infra/user/userRepository');
const models = require('../../../../src/infra/sequelize/models');
const User = require('../../../../src/domain/user/User');

describe('userRepository', () => {
    let userRepository;

    beforeAll(() => {
        userRepository = makeUserRepository({
            sequelizeModels: models
        });
    });

    describe('#add', () => {
        it('adds a user to the database', async() => {
            const user = new User({
                name: 'Novo',
                age: 26
            });
            const newUser = await userRepository.add(user);
            expect(newUser.id).toBeTruthy();
            expect(newUser.name).toEqual('Novo');
            expect(newUser.age).toEqual(26);
        });
        it('increase user count', async () => {
            const user = new User({
                name: 'Somebody',
                age: 28,
            });
    
            const firstCount = await userRepository.size();
            await userRepository.add(user);
    
            const lastCount = await userRepository.size();
    
            expect(firstCount).toBe(0);
            expect(lastCount).toBe(1);
        
        });
    });
    
});

