import express from 'express';
import 'dotenv/config';
import * as assessmentlog from './model.mjs';

 
const PORT = process.env.PORT;
const app = express();

app.use(express.json());



// CREATE controller
app.post('/log', (req, res) => {
    assessmentlog.addEntry(
        req.body.assessment,
        req.body.score,
        req.body.impairment,
        req.body.date
    )
        .then(entry => {
            res.status(201).json(entry);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({error: 'ERROR 400: Unable to add entry due to user-input error. Please try again.'});
        });
});


// RETRIEVE controller
app.get('/log', (req, res) => {
    assessmentlog.findEntry()
        .then(entry => {
            if (entry !== null) {
                res.json(entry);
            } else {
                res.status(404).json({Error: 'ERROR 404: Entry not found.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({Error: 'ERROR 400: Request to retrieve entry failed due to user-input error. Please try again.'});
        });
});

// do i need one for the findById?

// RETRIEVE by ID controller
app.get('/log/:_id', (req, res) => {
    assessmentlog.findById(req.params._id)         //._id?
        .then(entry => {
            if (entry !== null) {
                res.json(entry);
            } else {
                res.status(404).json({Error: 'ERROR 404: Entry not found.'});
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({Error: 'ERROR 400: Request to retrieve entry failed due to user-input error. Please try again.'});
        });
});



// UPDATE controller
app.put('/log/:_id', (req, res) => {
    assessmentlog.updateEntry(
        req.params._id,                  
        req.body.assessment,
        req.body.score,
        req.body.impairment,
        req.body.date
    )
    .then(entry => {
        res.json(entry);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({error: 'ERROR 400: Request to update entry failed due to user-input error. Please try again.'});
    });
});



// DELETE controller
app.delete('/log/:_id', (req, res) => {
    assessmentlog.deleteById(req.params._id)         // req.params._id?
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({Error: 'ERROR 404: Entry does not exist.'});
            }
        })
        .catch(error => {
            console.error(error);
            res.send({error: 'ERROR: Attempt to delete entry failed due to user-input error. Please try again.'});
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});