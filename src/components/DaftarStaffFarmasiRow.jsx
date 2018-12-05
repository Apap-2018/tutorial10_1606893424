import React from 'react';
import { Link } from "react-router-dom";

export const DaftarStaffFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listStaffFarmasi.map(staf => {
                return (
                    <tr key={staf.id}>
                        <td>{staf.nama}</td>
                        <td>{staf.jenis}</td>
                        <td>
                            <Link to={`/update-staf/${staf.id}`} className="btn btn-info">Update</Link>
                        </td>
                        
                    </tr>
                )
            })}
        </tbody>
    )
}