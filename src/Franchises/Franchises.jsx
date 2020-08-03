import React from 'react';
import { getFranchises } from '../api/api';
// import { getActiveFranchises, getActiveTeams } from '../franchiseUtils';

class Franchises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    getFranchises().then((response) => {
      const franchises = response || [];
      this.setState({ isLoaded: true });
      console.log(franchises);
    });
  }

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        hi
      </div>
    );
  }
}

export default Franchises;
