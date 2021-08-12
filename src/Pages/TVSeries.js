import React, { useState, useEffect } from 'react';
import Header from '../component/layout/Header';
import { fetchTVserier } from '../sevice/API';
import Footer from '../component/layout/Footer';
import CardMovie from '../component/layout/CardMovie';
import SkeletonWrapper from '../component/layout/SkeletonWrapper';


const TVSeries = () => {
    const [page, setPage] = useState(1);
    const [tvseries, setTVSeries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scroll(0,0);
        setIsLoading(false)
        const fetchAPI = async () => {
            setTVSeries(await fetchTVserier(page));
            setIsLoading(true);
        }
        fetchAPI();
    }, [page])

    const movieList = tvseries.map((item, index) => {
        return (
            <div className="col-lg-3 col-sm-4 col-6" key={index}>
                <CardMovie item={item}/>
            </div>
        )
    });

    return (
        <>
            <Header />
            <div className="main-wrapper">
                <div className="container">
                    {isLoading ? 
                    <div className="row mt-3">
                        {movieList}
                    </div>
                    : <SkeletonWrapper/>
                    }
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item mx-2">
                                <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    disabled={page === 1}
                                    onClick={() => setPage(page-1)}
                                >
                                    Prev
                                </button>
                            </li>
                            <li className="page-item mx-2">
                                <button
                                    className="btn btn-outline-info"
                                    disabled={page === 5}
                                    onClick={() => setPage(page+1)}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TVSeries;
