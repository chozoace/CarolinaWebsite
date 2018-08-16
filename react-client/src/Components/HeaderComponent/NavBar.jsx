import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Label } from 'semantic-ui-react'

class NavBar extends Component {
    render() {
        return (
            <header>
                <Button>Home</Button>
            </header>
        )
    }
}

export default NavBar;