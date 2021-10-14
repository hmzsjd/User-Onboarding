import React from 'react';

const User = (props) => {
    return (
        <div>
            <h2>First Name: {props.user.first_name} </h2>
            <h2>Last Name: {props.user.last_name} </h2>

            <p>Email: {props.user.email}</p>
            <p>User ID: {props.user.id}</p>

            <hr></hr>
        </div>
    )
}

export default User;