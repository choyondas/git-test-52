import React, { useEffect, useState } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const [teams, setTeams] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [searchText]);
    const handleOnChange = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <div className="header-div">
            <h2>Welcome to Sports</h2>
            {/* <h3>teams: {teams.length}</h3> */}
            <div>
                <input onChange={handleOnChange} className="p-2 w-50" type="text" placeholder="search your products" />
                <Button variant="primary " className="ms-4 p-2">Primary</Button>
                <div className="teams">
                    <div className="row">
                        {
                            teams?.map(team =>

                                <div key={team.idTeam} className="col-md-6 col-lg-4 col-12">
                                    <div className="cart">
                                        <div className="logo-image  ">
                                            <img className=" w-50" src={team.strTeamBadge} alt="" />
                                        </div>
                                        <h1>{team.strTeam}</h1>
                                        <h4>{team.strLeague}</h4>
                                        <p>{team.strStadium}</p>
                                        <p> {team.strGender} </p>
                                        <Link to={`/details/${team.idTeam}`}> <Button variant="primary" >
                                            Details
                                        </Button>{' '}</Link>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Home;