import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { urlConfig } from '../../config';

function SearchPage() {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState(''); 
    const [ageRange, setAgeRange] = useState(6); 
   
    // const [searchResults, setSearchResults] = useState([]);

    useEffect(() => 
   
        console.log('SearchPage mounted');
    }, []);

 
    const fetchProducts = async () => {
        try {
            const url = `${urlConfig.backendUrl}/api/gifts/search`; 
            console.log(url);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            
            console.error('Error fetching products:', error);
        }
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="filter-section mb-3 p-3 border rounded">
                        <h5>Filters</h5>
                 
                           
                        </div>
                    </div>

                    <div className="search-results mt-4">
                       
                                    </div>
                                    <div className="card-footer">
                                        <button onClick={() => goToDetailsPage(product.id)} className="btn btn-primary">
                                            View More
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="alert alert-info" role="alert">
                                No products found. Please revise your filters.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;
