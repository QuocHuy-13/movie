import React from 'react';

const TrendingPersons = (props) => {
    let persons = props.persons;
    const trendingPersons = persons.slice(0, 4).map((item, index) => {
        return (
            <div className="col-md-3 col-sm-6" key={index}>
                <img className="img-fluid rounded-circle mx-auto d-block" src={item.profileImg} alt={item.name} />
                <p className="font-weight-bold text-center">{item.name}</p>
            </div>
        )
    })
    return (
        <div>
            <div className="row mt-5">
                <div className="col">
                    <p className="font-weight-bold" style={{ color: "#5a606b",fontSize:"30px" }}>TRENDING PERSON ON THIS WEEK</p>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <div className="float-end">
                        <i className="fa fa-chevron-circle-right"></i>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                {trendingPersons}
            </div>
        </div>
    );
}

export default TrendingPersons;
