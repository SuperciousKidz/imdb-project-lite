import React, {Component, Fragment} from "react";
import { GlobalConsumer } from "../../../context/context";
import '../myfavorite/css/MyFavorite.css'

class MyFavorite extends Component {
    render() {
        return (
            <div className="container">
                <div className="title">My Favorite</div>
                <div className="content">
                    {
                        this.props.state.movies.filter((m) => m.favorite === true).map((m) => {
                            return (
                                <Fragment>
                                    <div className="card">
                                        <img className="card-img-top" src={m.Poster} alt="Card image cap"/>
                                        <div className="card-body bg-dark">
                                            <h5 className="card-title">{m.Title}</h5>
                                            <p className="card-text">Year: {m.Year}</p>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default GlobalConsumer(MyFavorite);