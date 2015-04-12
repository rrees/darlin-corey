var React = require('react');
var classnames = require('classnames');

var CardFace = React.createClass({
	render: function() {
		var classNames = classnames('face', this.props.face);

		return (<figure className={classNames}>{this.props.content}</figure>);
	}
});

var FlippableCard = React.createClass({

	getInitialState: function() {
		return {flipped: false};
	},

	handleClick: function(event) {
		this.setState({flipped: !this.state.flipped});
	},

	render: function() {
		var cardClasses = classnames('card', {'flipped': this.state.flipped});

		return (
			    <section className="container">
			    <div id="card" className={cardClasses} onClick={this.handleClick}>
			    	<CardFace face="front" content="This is the front" />
			    	<CardFace face="back" content="This is the back" />
			    </div>
			    </section>
			);
	}
	});

var Question = React.createClass({
	render: function () {
		return (
			<FlippableCard />
		)
	}
});

var Game = React.createClass({

	render: function() {
		return (
			<article>
			<Question />
			<Question />
			<Question />
			</article>
		)
	}
});

React.render(
	<Game />, document.getElementById('app')
    );
