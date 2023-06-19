import React from 'react';

function StaffTableRow({staffMember}) {
    return(
        <tr>
            <td>
                <img src={staffMember.picture.thumbnail} alt="Picture thumbnail" />
            </td>
            <td>
                {staffMember.name.first}
                {staffMember.name.last}
            </td>
            <td>
                <a href={`mailto:${staffMember.email}`}>
                {staffMember.email}</a>
            </td>
            <td>
                {staffMember.phone}
            </td>
            <td>
                {staffMember.location.city}
            </td>
        </tr>
    )
}

export default StaffTableRow;