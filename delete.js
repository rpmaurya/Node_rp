const dbconnect = require('./mongodb');
const deleteData = async () => {
    let data = await dbconnect();
    let result = await data.deleteMany({ name: 'shila' })
    console.log(result);
    if (result.acknowledged) {
        console.log("data deleted")
    }
}

deleteData();