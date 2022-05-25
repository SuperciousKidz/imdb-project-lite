import React, {Component, Fragment} from "react";
import Axios from "axios";
import "../movie/css/MovieDetail.css"

class MovieDetail extends Component {

    state = {
        movies: {
            Title: '',
            Year: 0,
            Poster: ''
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        Axios.get(`http://localhost:3004/movies/${id}`).then(res => {
            console.log('result: ', res)
            let movies = res.data
            this.setState({
                movies: {
                    Title: movies.Title,
                    Year: movies.Year,
                    Poster: movies.Poster
                }
            })
        })
    }

    render() {
        return (
            <Fragment>
                <p className="title">Detail Movie</p>
                <div className="container flex">
                    <div className="images">
                        <img src={this.state.movies.Poster} alt="Card image cap"/>
                    </div>
                    <div className="info">
                        <p>{this.state.movies.Title}</p>
                        <p>{this.state.movies.Year}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MovieDetail;