var React = require('react');
var classnames = require('classnames');

var FlippableCard = React.createClass({

	render: function() {
		var cardClasses = classnames('card');

		return (
			    <section className="container">
			    <div id="card" className="{cardClasses}">
			    	<figure className="front">This is the front</figure>
			    	<figure className="back">This is the back</figure>
			    </div>
			    </section>
			);
	}
	});

React.render(
	<FlippableCard />, document.getElementById('app')
    );
