import React, { useEffect } from 'react';  
import { useParams, useNavigate } from 'react-router-dom';
import './DetailsPage.css';
import { urlConfig } from '../../config';

function DetailsPage() {
    const navigate = useNavigate();
    const { productId } = useParams();
    
 

    useEffect(() => {
        const authenticationToken = sessionStorage.getItem('auth-token');
        if (!authenticationToken) {
       
            navigate('/app/login');
        }

        const fetchGift = async () => {
            try {
                const url = `${urlConfig.backendUrl}/api/gifts/${productId}`;
                const response = await fetch(url);
                await response.json();  
              
            } catch (error) {
                console.error(error); 
            } finally {
              
            }
        };

        fetchGift();

       

    }, [productId, navigate]);

    const handleBackClick = () => {
        navigate(-1); //
    };

    // Hardcoded comments
    const comments = [
        { author: "John Doe", comment: "I would like this!" },
        { author: "Jane Smith", comment: "Just DMed you." }
    ];

     
    const gift = null;

    if (!gift) return <div>Gift not found</div>; // 

    return (
        <div className="container mt-5">
            <button className="btn btn-secondary mb-3" onClick={handleBackClick}>Back</button>
            <div className="card product-details-card">
                <div className="card-header text-white">
                    
                </div>
                <div className="card-body">
                    <div className="image-placeholder-large">
                       
                        <div className="no-image-available-large">No Image Available</div>
                    </div>
                    
                </div>
            </div>
            <div className="comments-section mt-4">
                <h3 className="mb-3">Comments</h3>
              
                {comments.map((comment, index) => (
                    <div key={index} className="card mb-3">
                        <div className="card-body">
                            <p className="comment-author"><strong>{comment.author}:</strong></p>
                            <p className="comment-text">{comment.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DetailsPage;
