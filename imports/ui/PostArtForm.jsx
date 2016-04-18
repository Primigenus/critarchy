import React, { Component } from 'react';



export default class PostArtForm extends Component {
  render(){
    return (
      <form>
        <input type="text" placeholder="link to art somewhere on the internet"></input>
        <textarea placeholder="description"></textarea>
        <input type="submit" value="Post it!"></input>
      </form>
    );
  }
}
