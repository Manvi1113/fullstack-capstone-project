    import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import {urlConfig} from '../../config';

    function MainPage() {
        const [gifts, setGifts] = useState([])
        const navigate = useNavigate();

        useEffect(() => {
            // fetch all gifts
            const fetchGifts = async () => {
                try {
                    let url = `${urlConfig.backendUrl}/api/gifts`
                    const response = await fetch(url);
                    if (!response.ok) {
                        //something went wrong
                        throw new Error(`HTTP error; ${response.status}`)
                    }
                    const data = await response.json();
                    setGifts(data);
                } catch (error) {
                    console.log('Fetch error: ' + error.message);
                }
            };

            fetchGifts();
        }, []);

        const goToDetailsPage = (productId) => {
            navigate(`/app/product/${productId}`);
        };

        const formatDate = (timestamp) => {
            const date = new Date(timestamp * 1000);
            return date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
        };


        return (
            <div className="container mt-5">
                <div className="row">
                    {gifts.map((gift) => (
                        <div key={gift.id} className="col-md-4 mb-4">
                            <div className="card product-card">
                                <div className="image-placeholder">
                                    {gift.image ? (
                                        <img src={gift.image} alt={gift.name} />
                                    ) : (
                                        <div className="no-image-available">No Image Available</div>
                                    )}
                                </div>
                            
                                    
                        
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    export default MainPage;
