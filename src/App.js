// create your App component here
import React, { Component } from "react";
class App extends Component {
	componentDidMount() {
		fetch("http://api.open-notify.org/astros.json")
			.then((res) => res.json())
			.then((json) => this.setState({ data: json }));
	}
	render() {
		return <p>{this.state}</p>;
	}
}

export default App;
