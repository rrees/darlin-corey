var React = require('react');
var classnames = require('classnames');
var seedrandom = require('seedrandom');

var CardFace = React.createClass({
	render: function() {
		var classNames = classnames('face', this.props.face);

		return (<figure className={classNames}><div className="card__text">{this.props.content}</div></figure>);
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
		var cardClasses = classnames('card', this.props.questionId, {'flipped': this.state.flipped});

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
			<FlippableCard questionId={this.props.questionId} front={this.props.question} back={this.props.answer}/>
		)
	}
});

var Game = React.createClass({

	determineSeed: function() {
		return window.location.hash || 'Darling Corey';
	},

	onHashChange: function(event) {
		console.log('Hello from the hash change event');
		this.setState(this.createGame(this.determineSeed()));
	},

	createGame: function(seed) {
		console.log(seed);

		var rng = seedrandom(seed);

		return {
			questions: [
				{
					id: 'q1',
					question: "Does Cora Smaw love you?",
					order: 1,
					answer: rng() > 0.5 ? "She loves you" : "She loves you not"
				},
				{
					id: 'q2',
					question: "Who shot Cora?",
					order: 2,
					answer: rng() > 0.5 ? "Erwin Belt shot Cora" : "You shot Cora"
				},
				{
					id: 'q3',
					question: "Will you kill Belt or will he kill you?",
					order: 3,
					answer: rng() > 0.5 ? "You are going to kill Belt" : "Belt is going to kill you"
				}
			]
		};
	},

	getInitialState: function() {
		return this.createGame(this.determineSeed());
	},

	componentDidMount: function() {
		window.addEventListener("hashchange", this.onHashChange, false);
	},

	componentWillUnmount: function() {
		window.removeEventListener("hashchange", this.onHashChange);
	},

	render: function() {

		return (
			<article>
			{
				this.state.questions.map(function(question, idx) {
					return <Question key={question.order} questionId={question.id} question={question.question} answer={question.answer}/>
				})
			}
			</article>
		)
	}
});

React.render(
	<Game />, document.getElementById('app')
    );
