import { distinctUsers, connectClient } from '../mongodbConnector';

//Test Distinct Users
(async () => {
    let start = new Date().getTime();
    try {
        await connectClient();
        let users = await distinctUsers();
        console.log(users);
        console.log(`Time taken: ${(new Date().getTime()) - start}ms`);
    } catch (err) {
        console.error(err);
    }
})();

//Test Distinct Users
(async () => {
    let start = new Date().getTime();
    try {
        await connectClient();
        let users = await distinctUsers();
        console.log(users);
        console.log(`Time taken: ${(new Date().getTime()) - start}ms`);
    } catch (err) {
        console.error(err);
    }
})();