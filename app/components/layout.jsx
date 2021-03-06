/** @jsx React.DOM */
'use strict';

var React = require('react');
var config = require('app/config');
var Footer = require('app/components/footer.jsx');
var Container = require('app/components/container.jsx');
var ReactLogo = require('app/components/react-logo.jsx');
var SearchInput = require('app/components/search-input.jsx');

module.exports = React.createClass({
    displayName: 'Layout',

    /* jshint quotmark:false, newcap:false */
    render: function() {
        return (
            <div>
                <header>
                    <Container>
                        <ReactLogo />
                        <h1><a href="/">{config['page-title']}</a></h1>

                        <SearchInput query={this.props.query || ''} autoFocus={this.props.autoFocusSearch} />
                    </Container>
                </header>

                <main>
                    <Container className={this.props.className || ''}>
                        {this.props.children}
                    </Container>
                </main>

                <Footer />
            </div>
        );
    }
});