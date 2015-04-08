var React = require('react');
var classnames = require('classnames');

var CardFace = React.createClass({
	render: function() {
		var classNames = classnames('face', this.props.face);

		return (<figure className={classNames}>{this.props.content}</figure>);
	}
});

var FlippableCard = React.createClass({

	render: function() {
		var cardClasses = classnames('card');

		return (
			    <section className="container">
			    <div id="card" className={cardClasses}>
			    	<CardFace face="front" content="This is the front" />
			    	<CardFace face="back" content="This is the back" />
			    </div>
			    </section>
			);
	}
	});

React.render(
	<FlippableCard />, document.getElementById('app')
    );
