class NavbarItem extends React.Component {
	render() {
		let a = React.createElement('a', {href: this.props.href}, this.props.text);
		return React.createElement('li', null, a);
	}
}

class Navbar extends React.Component {
	render() {
		let itemProps = [
			{key: 1, href: '#', text: 'Hola yo soy un elemento'}, 
			{key: 2, href: '#', text: 'Hola yo soy otro elemento'}
		];
		
		let ul = React.createElement('ul', null, itemProps.map(function (props) {
			return React.createElement(NavbarItem, props, null);
		}));

		return React.createElement('nav', null, ul);
	}
}

function App(props) {
	return React.createElement(Navbar, null, null);
}

ReactDOM.render(
		React.createElement(App, null, null),
		document.getElementById('root')
);