import React, {Component, Fragment} from "react";
// import axios from 'axios'
import Movie from '../../../component/movie/Movie'
import "../movie/css/MovieList.css"
import { withRouter } from "react-router";
import { GlobalConsumer } from "../../../context/context";
import API from "../../../services";

class MovieList extends Component {
    handleDetail = (id) => {
        this.props.history.push(`movie/detail/${id}`);
    }

    handleUpdate = (data) => {
        if(data.favorite === true) {
            data.favorite = false
        }else{
            data.favorite = true
        }
        API.updateNewsMovie(data, data.id).then((res) => {
            API.getNewsMovie().then(result => {
                this.setState({
                    movies: result
                })
            })
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <p className="title">List Movies</p>
                    <div className="content">
                        {
                            this.props.state.movies.map(movies => {
                                return <Movie  key={movies.id} data={movies} goDetail={this.handleDetail} update={this.handleUpdate}></Movie>
                            })
                        }
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default GlobalConsumer(withRouter(MovieList));