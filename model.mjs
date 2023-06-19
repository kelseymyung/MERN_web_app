// Import dependencies
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect to the Atlas clusteer
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true}
);
const db = mongoose.connection;
// const collectionName = mongoose.model("collectionName", nameSchema); ??

// Confirm that the database has connected
db.once("open", (err) => {
    if (err) {
        res.status(500).json({error: 'ERROR 500: Server connection failed.'});
    } else {
        console.log('Successfully connected to MongoDB using Mongoose.');
    }
});

// Defining schema
const slpSchema = mongoose.Schema({
    assessment: {type: String, required: true},
    score: {type: Number, required: true},
    impairment: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now}
});

// Compile the model from the schema
const Entry = mongoose.model("Entry", slpSchema);



// CREATE model
const addEntry = async(assessment, score, impairment, date) => {
    const entry = new Entry({                              
        assessment: assessment,
        score: score,
        impairment: impairment,
        date: date
    });
    return entry.save();
}



// RETRIEVE models //

// Retrieve based on a filter. Returns a promise.
const findEntry = async() => {                // do i need to add "filter" async(filter); Entry.find(filter)?
    const query = Entry.find();
    return query.exec();
}

// Retrieve based on the ID. Returns a promise.
const findById = async(_id) => {
    const query = Entry.findById({_id: _id});             // just id? or id: id? or _id: _id?
    return query.exec();
}



// UPDATE model using replaceOne
const updateEntry = async(_id, assessment, score, impairment, date) => {
    const result = await Entry.replaceOne({_id: _id}, {
        assessment: assessment,
        score: score, 
        impairment: impairment,
        date: date
    });
    return {
        _id: _id,                     // _id: id?               
        assessment: assessment,
        score: score, 
        impairment: impairment, 
        date: date
    }
}




// DELETE model 
const deleteById = async(_id) => {
    const result = await Entry.deleteOne({_id: _id});            
    return result.deletedCount;
};



// Export for use in controller file
export { addEntry, findEntry, findById, deleteById, updateEntry }