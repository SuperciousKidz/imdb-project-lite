import React, {Component, createContext} from "react"
import API from "../services";

export const RootContext = createContext();
// Provider | parent
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
    return(
        class ParentComp extends Component {

            state = {
                movies: []
            }
            getPostAPI = () => {
                API.getNewsMovie().then(result => {
                    console.log("ini baruss: ", result)
                    this.setState({
                        movies: result
                    })
                })
            }

            componentDidMount() {
                this.getPostAPI();
            }

            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                        }
                    }>
                        <Children {...this.props}></Children>
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider

// Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value}></Children>
                                )
                            }
                        }
                    </Consumer>

                )
            }
        }
    )
}

