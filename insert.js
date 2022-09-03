const dbconnect = require('./mongodb');

const insert = async () => {
    const db = await dbconnect();
    const result = await db.insert(

        [{ name: 'shila', email: 'shila@gmail.com', roll: 18 },
        { name: 'sushila', email: 'sushila@gmail.com', roll: 19 },
        { name: 'raju', email: 'raju@gmail.com', roll: 20 }
        ]
    );

    if (result.acknowledged) {
        console.log("data inserted")
    }
}
insert();