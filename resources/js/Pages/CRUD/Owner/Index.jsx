import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Index() {
    const [petOwner, setPetOwner] = useState([]);


    useEffect(() => {
        // Fetch countries data from API
        axios.get('/api/pet_api')
            .then(response => {
                setPetOwner(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
                       
                {petOwner.map(pet_owner => (
                    [<p>Pet Owner Name: </p>,
                    <p>{pet_owner.name}</p>]
                    
                    
                ))}
            
        </div>
    );
}

export default Index;