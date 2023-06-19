import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 // import icons

 export const AddEntry = () => { 

    const [assessment, setAssessment] = useState('');      // change useStates later
    const [score, setScore] = useState('');
    const [impairment, setImpairment] = useState('');
    const [date, setDate] = useState('');

    const redirect = useNavigate();

    const addEntry = async() => {
        const newEntry = {assessment, score, impairment, date};

        const reply = await fetch('/log', {
                method: 'POST', 
                body: JSON.stringify(newEntry), 
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if(reply.status === 201) {
                alert("Successfully added new entry to the log.");
            } else {
                alert(`ERROR ${reply.status}: Unable to add new entry to the log due to user-input error. Please try again`);
            }
            redirect("/log");
    };

    return (
        <>
            <h2>Log a New Entry</h2>
            <article>
                <p>DO NOT enter in protected HIPAA informtion for actual people as this is a public website.</p>
                <table id="entries">
                    <caption>Add a new entry to the log.</caption>
                    <thead>
                        <tr>
                            <th>Assessment</th>
                            <th>Score</th>
                            <th>Level of Impairment</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label for="assessmentname" class="required">
                                    <input 
                                        type="text" 
                                        value={assessment} 
                                        id="assessmentname" 
                                        name="name"
                                        onChange={e => setAssessment(e.target.value)} 
                                        required 
                                        autofocus />
                                </label>
                            </td>

                            <td>
                                <label for="score" class="required">
                                    <input
                                        type="number"
                                        value={score}
                                        id="assessmentscore"
                                        name="score"
                                        onChange={e => setScore(e.target.value)} 
                                        required />
                                </label>
                            </td>

                            <td>
                                <label for="impairment" class="required">
                                    <select
                                        name='impairment'
                                        onChange={e => setImpairment(e.target.value)}
                                        required >

                                        <option value="" disabled selected>Select your option</option>
                                        <option value="Within Functional Limits">Within Functional Limits</option>
                                        <option value="Mild">Mild</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="Severe">Severe</option>
                                        <option value="Profound">Profound</option>

                                    </select>
                                </label>
                            </td>

                            <td>
                                <label for="date" class="required">
                                    <input
                                        type="date"
                                        value = {date}
                                        id="assessmentdate"
                                        name="date"
                                        onChange={e => setDate(e.target.value)}
                                        required 
                                        pattern="\d{2}-\d{2}-\d{2}" />                     
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button class="wait" onClick={addEntry}>Save and Submit</button>
            </article>
        </>
    );
 }

 export default AddEntry;