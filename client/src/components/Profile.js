import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile(props) {
    const { id } = useParams();
    const [user, setUser] = useState({});
    console.log(id);

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/" + id)
            .then((response) => {
                setUser(response.data);
                console.log("Retrieved response on Profile for a specific user.");
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div>
            <h1>Profile page for {user ? user.username : "N/A"}</h1>
        </div>
    );
}

export default Profile;