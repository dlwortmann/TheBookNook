import { User } from '../models/user.js'

export const seedUsers = async () => {
    await User.bulkCreate([
        {
            id: 10151,
            username: "Mufasa",
            email: "James Earl Jones",
            password: "123Hello"
        },
        {
            id: 11514,
            username: "Piper",
            email: "Parker Posey",
            password: "123Hello"
        },
    ]);
}