import React from 'react';

function LogTableHeader() {
    return(
        <thead>
            <tr>
                <th>Assessment</th>
                <th>Score</th>
                <th>Level of Impairment</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
    )
}

export default LogTableHeader;