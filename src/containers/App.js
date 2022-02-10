import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robotsValues } from './Robots';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
    constructor() {
        super()
        // 'state' means sth can be changed and affect our App. They usually live in the parent component
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    // Call API
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }

    // self-made function - suggest to use arrow function as always
    // so that 'this.' works fine
    onSearchChange = (event) => {
        // React function "setState" to change state
        this.setState({ searchField: event.target.value })
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = this.state.robots.filter(robot => {
            // return matched results regardless of capitalization
            // here we dun have to put this.states.searchField as we define const { robots, searchField } = this.state
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // When the API loads a bit long, display 'loading'
        //terniary if else statement
        return (!robots.length) ? <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/* 'this.state.robots' instead of 'robotValues from Robots.js */}
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>    
            )       
    }
}

export default App;