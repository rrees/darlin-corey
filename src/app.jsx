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
			    	<CardFace face="front" content={this.props.front} />
			    	<CardFace face="back" content={this.props.back} />
			    </div>
			    </section>
			);
	}
	});

var Question = React.createClass({
	render: function () {
		return (
			<FlippableCard front={this.props.question} back={this.props.answer}/>
		)
	}
});

var Game = React.createClass({

	render: function() {
		var questions = [
			{
				question: "Question 1",
				order: 1,
				answer: "Answer 1"
			},
			{
				question: "Question 2",
				order: 2,
				answer: "Answer 2"
			},
			{
				question: "Question 3",
				order: 3,
				answer: "Answer 3"
			}
		];

		return (
			<article>
			{
				questions.map(function(question, idx) {
					return <Question key={question.order} question={question.question} answer={question.answer}/>
				})
			}
			</article>
		)
	}
});

React.render(
	<Game />, document.getElementById('app')
    );
