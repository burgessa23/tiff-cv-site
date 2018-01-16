import React, { Component } from 'react';
import Hero from '../hero';
import Nav from '../nav';
import CategoryNav from '../categoryNav';
import Thumb from '../thumb';
import myData from '../../../config/data.json';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

export default class IndexComponent extends Component {
  constructor(props, ...args) {
    super(props, ...args);

    this.state = {
      menuOpen: false,
      platform: 'mobile',
      category: 'all',
      filteredContent: []
    }
  }
  componentWillMount() {
    const location = this.props.location;
    if (location.query && location.query.category) {
      this.filterContent(location.query.category);
    }
  }

  filterContent(category) {
    this.setState({
      category: category
    });
  }

  onOpen(msg) {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
    if (msg && msg === 'desktop') {
      this.setState({
        platform: msg
      })
    }
  }

  renderLogo() {
    if (this.state.platform === 'desktop') {
      return 'ts_logo';
    } else if (this.state.platform === 'mobile' && this.state.menuOpen) {
      return 'ts_logo_lite';
    } else {
      return 'ts_logo';
    }
  }


  render() {
    const thumbnails = Object.keys(myData).map((item, idx) => {
      if (~myData[item].category.indexOf(this.state.category) || this.state.category === 'all') {
        return (
          <Thumb navCategory={ this.state.category } key={ idx } counter={ idx + 1 } { ...myData[item] } detail={ item } />
        );
      }
    });

    return (
      <div>
        <section style={{ marginBottom: 120 }}>
          <Hero className='detail-hero'>
            <Link to='/'>
              <img src={ `client/images/${this.renderLogo()}.svg` } className='logo' />
            </Link>
            <Nav isOpen={ this.state.menuOpen } onOpen={ this.onOpen.bind(this) }/>
          </Hero>
        </section>
        <section style={{ marginBottom: 20 }}>
          <CategoryNav setCategory={ (evt) => this.filterContent(evt) } currentCategory={ this.state.category }/>
        </section>
        <section className='container'>
            <CSSTransitionGroup
              component='div'
              className='row'
              transitionName='thumbs'
              transitionAppear={ true }
              transitionAppearTimeout={ 500 }
              transitionEnterTimeout={ 500 }
              transitionLeaveTimeout={ 300 }>
              { thumbnails }
            </CSSTransitionGroup>
        </section>
        <div className='bottom-section' id='about'>
          <section className='container'>
            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-lg-4' style={{ padding: '20px 40px' }}>
                <h3>About Me</h3>
                  <p>I'm a Seattle-based, multidisciplinary designer with over a decade of experience under my belt. I've had the opportunity to work on a variety of projects, too: snowboards, magazines, websites, and beanies--those are just a few of the things I've designed.
                  </p>
                  <p>
                  The majority of my experience has been with in-house design teams. It's enabled me to develop a strong eye for consistent and cohesive branding across various touchpoints while aligning with the needs from internal stakeholders in both business and creative. The end result? Elegant and creative design solutions that effectively communicate the brand vision.
                  </p>
                  <p>
                  I love new opportunities and thrive in environments where I can learn new things. I approach each project from both a design perspective and a customer perspective, which leads me to question when things don't seem to make sense from those vantages.
                  </p>
                  <p>
                  Currently, I'm focused on creating functional and aesthetically beautiful digital experiences. That, and trying to keep my sourdough start alive...
                  </p>
                <div>
                  <a href={"mailto:info@tiffanysmithdesign.com?subject=Request for contact"} style={{display: 'inline-block', marginTop: 10, fontSize: 16, padding: ' 14px 20px', borderRadius: 3, border: 'none', color: '#fff', backgroundColor: '#FFB7C9', fontFamily: 'Quicksand', textDecoration: 'none'}}>Email me</a>

                  <a href={"client/images/tsmith_resume_2017.pdf"} style={{display: 'inline-block', marginTop: 10, fontSize: 16, padding: ' 14px 20px', borderRadius: 3, border: 'none', color: '#fff', backgroundColor: '#FFB7C9', fontFamily: 'Quicksand', textDecoration: 'none', marginLeft: 20}}>Resume</a>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-lg-4' style={{padding: '20px 40px'}}>
                <h3>Biz-ness</h3>
                  <ul>
                    <li>10+ years experience with in-house brand teams.</li>
                    <li>Cool with collaboration, but also totally autonomous.</li>
                    <li>Honest and clear communication.</li>
                    <li>Strong organizational (love those spreadsheets!) and communication skills.</li>
                    <li>The occasional well placed joke, for  levitiy's sake.</li>
                    <li>Strong customer centered design.</li>
                    <li>Working with stakeholders to achieve business goals.</li>
                  </ul>
              </div>
              <div className='col-xs-12 col-sm-6 col-lg-4'  style={{padding: '20px 40px'}}>
                <h3>Pixel-Pushing</h3>
                  <ul>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Sketch</li>
                    <li>HTML/CSS</li>
                    <li>Digital</li>
                    <li>Print</li>
                    <li>Office</li>
                  </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
