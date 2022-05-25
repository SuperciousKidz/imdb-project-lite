import React, {Fragment} from "react";
// import API from "../../services";
import "../movie/css/Movie.css"

const Movie = (props) => {

    return (
        <Fragment>
            <div className="card">
                <img onClick={() => {
                props.goDetail(props.data.id)
            }} className="card-img-top" src={props.data.Poster} alt="Card image cap"/>
                <div className="card-body bg-dark">
                    <h5 className="card-title">{props.data.Title}</h5>
                    <p className="card-text">Year: {props.data.Year}</p>
                </div>
                {
                    props.data.favorite === true ? <button onClick={() => props.update(props.data)} className="btn btn-danger">Cancel to My Favorite</button> : <button onClick={() => props.update(props.data)} className="btn btn-primary">Add to My Favorite</button>
                }
                
            </div>
        </Fragment>
    )
}

export default Movie;