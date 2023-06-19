import React from 'react';
import {RiDeleteBinFill} from 'react-icons/ri';
import {TbEdit} from 'react-icons/tb';
//import icons

function LogRow({entry, onDelete, onEdit}) {

    return(
        <tr>
            <td title="What assessment was used?">{entry.assessment}</td>
            <td title="What was the patient's score?">{entry.score}</td>
            <td title="What is the patient's level of impairment?">{entry.impairment}</td>
            <td title="When was this assessment completed?">{entry.date.slice(0,10)}</td>
            <td><TbEdit onClick={() => onEdit(entry)} title="Click here to edit this entry." /></td>
            <td><RiDeleteBinFill onClick={() => onDelete(entry._id)} title='Click here to delete this entry.'/></td>
        </tr>
    );
}

export default LogRow;