import React, { Component } from 'react';
import PropTypes from 'prop-types'

import bannerImage from '../../images/Banner1.jpg';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.hideFixedMenu = () => this.setState({ fixed: false })
        this.showFixedMenu = () => this.setState({ fixed: true })
    }

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>
                                    Home
                                    </Menu.Item>
                                    <Menu.Item as='a'>About Us</Menu.Item>
                                    <Menu.Item as='a'>Dance</Menu.Item>
                                    <Menu.Item as='a'>Contact</Menu.Item>
                                    <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed}>
                                        Log in
                                    </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        {/*homepage heading*/}
                    </Segment>
                </Visibility>
                {children}
            </Responsive>
        );
    }
}

export default HomePage;