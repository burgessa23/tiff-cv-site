import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-dom'
const scrollIntoView = require('scroll-into-view');

export default class Nav extends Component {
  constructor(props, ...args) {
    super(props, ...args);
  }

  openMenu() {
    this.props.onOpen();
  }

  componentDidMount() {
    if(screen.width > 768) {
      this.props.onOpen('desktop');
    }
  }


  render() {
    const isOpen = this.props.isOpen ? 'is-active' : null;
    
    return (
      <div className={`col-xs-12 col-sm-6 off-sm-6 nav-outer ${isOpen}`}>
        <button className={ `hamburger hamburger--spring ${isOpen}` } type="button" onClick={ (evt) => this.openMenu(evt) }>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>  
        <section className={`row ${ this.props.isOpen ? 'opened' : null}`}>
          <div className='col-xs-12 col-sm-4'>
            <Link to="/">Portfolio</Link>
          </div> 
          <div className='col-xs-12 col-sm-4'>
            <Link to="/#about">About</Link>
          </div> 
          <div className='col-xs-12 col-sm-4'>
            <a href={"mailto:info@tiffanysmithdesign.com?subject=Request for contact"}>Contact</a>
          </div> 
        </section>
      </div>
    );
  }
}
