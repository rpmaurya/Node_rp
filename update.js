const dbconnect = require('./mongodb');

const updateData = async () => {
    let data = await dbconnect();
    let result = await data.update(
        { name: 'sushila' }, { $set: { name: 'ramkewal143', email: 'ramkewal143@gmail.com' } }
    );
    console.log(result)
}

updateData();