// create your App component here
import React from 'react'

class App extends React.Component {

    componentDidMount() {

    }

    render() {
      fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
    }
}

export default App