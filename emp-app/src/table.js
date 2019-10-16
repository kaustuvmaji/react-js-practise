import React, { Component } from 'react';
import './table.css';

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}
const TableHeader = () => {
    return (<thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Action</th>
        </tr>
    </thead>) 
}


class Table extends Component {
    render() {
        console.log('In side table')
        const { characterData, removeCharacter, updateCharacter } = this.props
        const childprops = this.props.children
        console.log({ characterData })
        console.log(childprops)
        return (
            <table className='table'>
                <TableHeader />
                <TableBody characterData={characterData}
                    removeCharacter={removeCharacter}
                    updateCharacter={updateCharacter} />
            </table>
        )
    }
}


export default Table;