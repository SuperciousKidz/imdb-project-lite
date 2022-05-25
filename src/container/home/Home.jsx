import React, {Component, Fragment} from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import '../home/css/Home.css'
import Logo from '../home/assets/logo.png'
import MovieList from "../pages/movie/MovieList";
import MovieDetail from "../pages/movie/MovieDetail";
import GlobalProvider from "../../context/context";
import { GlobalConsumer } from "../../context/context";
import API from "../../services";
import MyFavorite from "../pages/myfavorite/MyFavorite";


class Home extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "black"
    }

    componentDidUpdate() {
        API.getNewsMovie().then(result => {
            this.setState({
                movies: result
            })
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    {/* header */}
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container">
                            <img className="img-logo" src={Logo}></img>
                            <div>
                                <Link className="my-fav" to="/movie">Movie List</Link>
                                <Link className="my-fav" to="/myfavorite">My Favorite {this.props.state.movies.filter((m) => m.favorite === true).length}</Link>
                            </div>
                        </div>
                    </nav>
                    {/* body */}

                    {/* search movie */}

                    {/* movie list */}
                    <Route path="/" exact component={MovieList}></Route>
                    <Route path="/movie" exact component={MovieList}></Route>
                    <Route path="/movie/detail/:id" component={MovieDetail}></Route>
                    <Route path="/myfavorite" component={MyFavorite}></Route>
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default GlobalProvider(GlobalConsumer(Home));