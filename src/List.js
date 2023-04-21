import React from 'react'
import ListItem from './ListItem'

const List = ({ data }) => {
    return (
        <table className='table-container'>
            <tbody>
                {data.map(item => (
                    <ListItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default List