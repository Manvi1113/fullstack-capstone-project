import React, { useState } from 'react';
//Step 1 - Task 1
import { urlConfig } from '../../config';

//Step 1 - Task 2
import { useAppContext } from '../../context/AuthContext';

//Step 1 - Task 3
import { useNavigate } from 'react-router-dom';

import './RegisterPage.css';

function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    
    //Step 1 - Task 4
    const [showerr, setShowerr] = useState('');

    //Step 1 - Task 5
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAppContext();

    const handleRegister = async () => {
        try {
            const response = await fetch(`${urlConfig.backendUrl}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'content-type': 'home', 
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email, 
                  
                }),
            });

            const json = await response.json();
            console.log('json data', json);
            console.log('er', json.error);

            //Step 2 - Task 2 
            // setIsLoggedIn(true);
            // navigate('/app/dashboard');
        } catch (error) {
          
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="register-card p-4 border rounded">
                        <h2 className="text-center mb-4 font-weight-bold">Register</h2>

                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                className="form-control"
                                placeholder="Enter your first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                className="form-control"
                                placeholder="Enter your last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>
                            Register
                        </button>

                        <p className="mt-4 text-center">
                            Already a member? <a href="/app/login" className="text-primary">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
