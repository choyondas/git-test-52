import React from 'react';
import "./Friend.css"
const Friend = (props) => {
    const { id, name, username, email, address, website, phone, company } = props.friend;
    console.log(props.friend)
    return (
        <div className="friend-div">
            <h2> my friend : {name}</h2>
            <h3>email: {email}</h3>
            <h3>phone: {phone}</h3>
            <a href={website}>{website}</a>
            <p>company: {company.name}</p>


        </div>
    );
};

export default Friend;