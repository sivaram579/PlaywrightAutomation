import { test, expect} from '@playwright/test';
import { request } from 'http';

var userid;

test.skip('Get Users', async ({request}) => {
    const response = await request.get("https://reqres.in/api/users?page=2");
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test.skip('Create User', async ({request}) => {

    const response = await request.post("https://reqres.in/api/users",
                        {
                            data:{ "name": "Sivaram", "job": "leader" },
                            headers:{ "Accept":"application/json" }
                        });

    console.log(await response.json());
    await expect(response.status()).toBe(201);
    var res = await response.json();
    userid = res.id;
    console.log(userid);
})

test.skip('Update User', async ({request}) => {
    const response = await request.put("https://reqres.in/api/users/"+userid,
        {
            data:{ "name": "Sivaram", "job": "Engineer" },
            headers:{ "Accept":"application/json" }
        });

    console.log(await response.json());
    await expect(response.status()).toBe(200);    
})

test.skip('Delete User', async ({request}) => {
    const response = await request.delete("https://reqres.in/api/users/"+userid)    
    await expect(response.status()).toBe(204)
})