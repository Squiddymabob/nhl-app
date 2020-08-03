import React from 'react';
import { getCurrentTeams } from '../api/api';

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    getCurrentTeams().then((response) => {
      const teams = response || [];
      this.setState({ isLoaded: true });
      console.log(teams);
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

export default Teams;
