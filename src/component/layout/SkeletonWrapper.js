import React from 'react';

const SkeletonWrapper = () => {
    return (
        <div className="row mt-3">
            {[...Array(12).keys()].map((item) => (
                <div key={item} className="col-6 col-sm-4 col-md-6 col-lg-3">
                    <div style={{height:"400px", backgroundColor:"#ddd", marginBottom:"30px"}}></div>
                </div>
            ))}
        </div>
    );
}

export default SkeletonWrapper;
