import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditLog = ({ entryToEdit }) => {

    const [assessment, setAssessment] = useState(entryToEdit.assessment);      // change useStates later
    const [score, setScore] = useState(entryToEdit.score);
    const [impairment, setImpairment] = useState(entryToEdit.impairment);
    const [date, setDate] = useState(entryToEdit.date);

    const redirect = useNavigate();

    const editEntry = async() => {
        const reply = await fetch(`/log/${entryToEdit._id}`, {
                method: 'PUT', 
                body: JSON.stringify({
                    assessment: assessment,
                    score: score,
                    impairment: impairment,
                    date: date
                }), 
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if(reply.status === 201) {
                alert(`Successfully updated the entry with _id = ${entryToEdit._id}`);
            } else {
                alert(`ERROR ${reply.status}: Unable to update entry with _id = ${entryToEdit._id}. Please try again`);
            }
            redirect("/log");
    };

    return (
        <>
            <h2>Update an Existing Entry</h2>
            <article>
                <p>Update an entry</p>
                <table id="entries">
                    <caption>Update an entry.</caption>
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
                <button class="wait" onClick={editEntry}>Save and Update</button>
            </article>
        </>
    );
 }

 export default EditLog;










