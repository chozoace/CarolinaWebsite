import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomepageLayout from './HomePage';
import Footer from './Footer';
import NavBar from './HeaderComponent/NavBar';

class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    {/*<NavBar />*/}
                    {/*<Route name = "home" exact path="/" component={HomepageLayout} />*/}
                    <HomepageLayout/>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;