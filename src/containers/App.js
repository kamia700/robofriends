import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';
import './App.css';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPanding: state.requestRobots.isPanding,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

function App (props) {
  const { robots, searchField, onSearchChange, onRequestRobots, isPanding } = props;

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);


  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  if (isPanding) {
    return <h1>Loading</h1>
  } else {
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange = { onSearchChange } />
        <Scroll>
          <ErrorBoundry>
            <CardList robots = { filteredRobots } />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
