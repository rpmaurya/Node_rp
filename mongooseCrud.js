const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/rpmaurya');
const Node_rpSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    email: String,
    address: String
});


const saveInDb = async () => {

    const Node_rpModel = mongoose.model('node-tuts', Node_rpSchema);
    let data = new Node_rpModel({ name: 'Rpmaurya', roll: 3, email: 'rpm@gmail.com', address: 'dudahi' });
    let result = await data.save();
    console.log(result)
}

const updateInDb = async () => {
    const nodetut = mongoose.model('node-tuts', Node_rpSchema);
    let data = await nodetut.updateOne(
        {
            name: 'Anuradha'
        },
        {
            $set: { email: 'anu356@gmail.com', name: 'Anuradha Maurya' }
        }
    )
    console.log(data)
}

const deleteInDb = async () => {
    const nodetut = mongoose.model('node-tuts', Node_rpSchema);
    let data = await nodetut.deleteOne({ name: 'Anuradha Maurya' });
    console.log(data);
}

const findInDb = async () => {
    const nodetut = mongoose.model('node-tuts', Node_rpSchema);
    let data = await nodetut.find({ name: 'Rpmaurya' });
    console.log(data);
}
findInDb();