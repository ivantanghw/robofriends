import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robotsValues } from './Robots';

class App extends React.Component {
    constructor() {
        super()
        // 'state' means sth can be changed and affect our App. They usually live in the parent component
        this.state = {
            robots: robotsValues,
            searchField: ''
        }
    }

    // self-made function - suggest to use arrow function as always
    // so that 'this.' works fine
    onSearchChange = (event) => {
        // React function "setState" to change state
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            // return matched results regardless of capitalization
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })       
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                {/* 'this.state.robots' instead of 'robotValues from Robots.js */}
                <CardList robots={filteredRobots} />
            </div>
        );        
    }
}

export default App;