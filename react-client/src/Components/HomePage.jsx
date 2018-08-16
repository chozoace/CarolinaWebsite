import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

import bannerImage from '../../images/Banner1.jpg';

class HomePage extends Component {
    render() {
        return (
            <div>
                Hello
                <Image src={bannerImage} fluid/>
            </div>
        )
    }
}

export default HomePage;