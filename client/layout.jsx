import React, { Component } from 'react';



export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="/">The Artist's Republic of Crits</a>
          <nav>
            <a href="/crits">crits</a>
            <a href="/art">art</a>
            <a href="/post">post art</a>
          </nav>
        </header>
        <main>
          {this.props.content}
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}
