const dbconnect = require('./mongodb')


//dbconnect().then((resp) => {
//console.warn(resp.find().toArray())
//resp.find().toArray().then((data) => {
//console.warn(data)
//})

//})


async function main() {

    let data = await dbconnect();
    data = await data.find().toArray();
    console.warn(data);
}

main();