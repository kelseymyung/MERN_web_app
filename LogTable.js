import React from 'react';
import LogRow from "../components/LogRow.js";
import LogTableHeader from "../components/LogTableHeader.js";
import { useNavigate } from 'react-router-dom';
import { MdPostAdd } from 'react-icons/md';


function LogTable({entries, onDelete, onEdit}) {
    const redirect = useNavigate();

    return(
        <table id="entries">
            <caption><i><MdPostAdd onClick={() => redirect("/add-entry")}></MdPostAdd></i>  Click on this icon to add a new entry.</caption>
            <LogTableHeader />
            <tbody>
                {entries.map((entry, i) => 
                <LogRow
                    entry={entry}
                    key={i}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />)}
            </tbody>
        </table>
    );
}

export default LogTable;