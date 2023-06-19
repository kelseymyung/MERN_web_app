import {React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import LogTable from '../components/LogTable.js';

function Log({ setEntryToEdit }) {
    const redirect = useNavigate();

    const [entries, setEntries] = useState([]);

    // retrieve all entries
    const retrieveEntries = async() => {
        const reply = await fetch('/log');
        const entries = await reply.json();
        setEntries(entries);
    }

    // update a single entry
    const onEdit = async entry => { // no async?
        setEntryToEdit(entry);
        redirect("/edit-entry");
        //setEntry(entry);
        //redirect("/edit-entry");
    }

    // delete a single entry
    const onDelete = async _id => {
        const reply = await fetch(`/log/${_id}`, {method: 'DELETE'});
        if (reply.status === 204) {
            const newEntries = entries.filter(e => e._id !== _id);
            setEntries(newEntries);
            //const getReply = await fetch('/log');
            //const entries = await getReply.json();
            //setEntries(entries);
        } else {
            console.error(`ERROR ${reply.status}: Unable to delete entry with _id = ${_id}. Please try again.`)
        }
    };

    // load all entries
    useEffect(() => {
        retrieveEntries();
    }, []);

    // display the entries
    return (
        <>
            <h2>Speech Language Pathology Assessment Log</h2>
            <article>
                <p>Below is a sample tool for patient progress monitoring and tracking for speech-language pathology patients.</p>
                <p>PLEASE NOTE: all provided information is hypothetical and for sample use only.</p>
                <LogTable
                    entries={entries}
                    onEdit={onEdit}
                    onDelete={onDelete} />
            </article>
        </>
    );
}

export default Log;
