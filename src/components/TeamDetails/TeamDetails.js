import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./TeamDetails.css"
const TeamDetails = (props) => {

    const { id } = useParams();
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
            .then(res => res.json())
            .then(data => (setDetails(data.teams[0])))
    }, [])
    return (
        <div className="details">
            <div className="row">
                <div className="col-md-6">
                    <div className="logo-image">
                        <img src={details.strTeamBadge} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;