const usersController = ({ createUser }) => ({
    async create(req, resp) {
        const userData = req.body.user;

        await createUser(userData, {
            onSuccess: (user) => resp.status(201).json(user),
            onInvalidUser: (error) => resp.status(422).json(error),
            onError: (error) => resp.status(500).json(error)
        });        
    }
});

module.exports = usersController;