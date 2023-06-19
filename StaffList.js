import React, { useState } from 'react';
import StaffTableRow from "../components/StaffTableRow.js"

function StaffList() {

    const [APIresults, setAPIresults] = useState([]);
    const getAPIresults = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((response) => {
                setAPIresults(response.results);
            })
        .catch(() => {
            alert("Uh oh! An error was encountered when attempting to access the API. Please wait a bit and then try again.")
        });
    };
    return (
        <>
            <h2>Staff List</h2>
            <article>
                <p>Click on the button below to generate a list of ten randomized staff members from an online API.
                </p>
                <p>
                <button id="randomAPIbutton"  onClick={getAPIresults} value="addStaff">Click me to hire your staff!</button>
                </p>

                <table>
                    <caption>Photo, name, email, phone number, and location</caption>
                    <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Location</th>
                    </tr>
                    </thead>
                    <tbody id="newStaff">
                        {APIresults.map((staffMember, index) => <StaffTableRow staffMember={staffMember} key={index} />)}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default StaffList;