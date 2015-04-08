var React = require('react');

React.render(
    <section className="container">
    <div id="card" className="card">
    	<figure className="front">This is the front</figure>
    	<figure className="back">This is the back</figure>
    </div>
    </section>,

    document.getElementById('app')
    );
