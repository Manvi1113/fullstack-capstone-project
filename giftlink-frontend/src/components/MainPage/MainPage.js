import React, from 'react';
import { useNavigate } from 'react-router-dom';
import { urlConfig } from '../../config';

function MainPage() {
    const [gifts, setGifts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch gifts but without error handling
        const fetchGifts = async () => {
            let url = `${urlConfig.backendUrl}/api/gifts`;
            const response = await fetch(url);
            const data = await response.json(); // No check for response.ok
            setGifts(data);
        };
        fetchGifts();
    }, []);

    const goToDetailsPage = (productId) => {
        navigate(`/app/product/${productId}`);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {gifts.map((gift) => (
                    <div key={gift.id} className="col-md-4 mb-4">
                        <div className="card product-card">
                            {/* Only render image if present; no placeholder for missing image */}
                            {gift.image && <img src={gift.image} alt={gift.name} />}
                            <div className="card-body">
                                <h5>{gift.name}</h5>
                                {/* Missing description slice or other details */}
                            </div>
                            <div className="card-footer">
                                {/* Missing explicit "View Details" button */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage;
