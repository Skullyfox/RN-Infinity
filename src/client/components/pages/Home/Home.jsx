import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import './Home.sass';

const fetchData = params => ({ homeFetch: 'home' });

export { fetchData };

@subscribe()
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Home works !</p>
        );
    }
}

export default Home;
