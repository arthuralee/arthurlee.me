var React = require('react');
var ImageView = require('./ImageView.js');
var SocialBtn = require('./SocialBtn.js');

module.exports = (function() {
  var Card = React.createClass({
    componentWillMount: function() {
      for (prop in this.props.style) {
        this.style[prop] = this.props.style[prop];
      }
    },
    render: function() {
      return <div
                onClick={this.handleClick}
                style={this.style}
                className="card">{this.props.children}</div>;
    },
    handleClick: function(e) {
      this.props.cardClicked(this.props.num);
    },
    style: {
      fontFamily: '"Roboto", sans-serif',
      display: 'block',
      position: 'relative',
      backgroundColor: '#fff',
      width: 450,
      height: 275,
      borderRadius: 5,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)',
      boxSizing: 'border-box'
    }
  });

  Card.Name = React.createClass({
    render: function() {
      return <Card>
        <ImageView style={this.style.img} src="/img/profile.jpg" />
        <div style={this.style.content}>
          <div style={this.style.contentInner}>
            <h1 style={this.style.h1}>Arthur Lee</h1>
            <h2 style={this.style.h2}>Designer &amp; Developer</h2>
            <div style={this.style.socialLinks}>
              <SocialBtn href="http://www.google.com/recaptcha/mailhide/d?k=01OWkW9eUwqxP23Bxfd4o8pw==&c=FVysm5b2s6wu3dgCw4p4R4PNpxPDYSSb9SWUs-ltErQ=" icon="fa-envelope-o" />
              <SocialBtn href="http://www.linkedin.com/in/arthuralee" icon="fa-linkedin" />
              <SocialBtn href="https://github.com/arthuralee" icon="fa-github" />
            </div>
          </div>
        </div>
      </Card>
    },
    style: {
      img: {
        backgroundColor: '#ddd',
        position: 'absolute',
        left: '0',
        top: '0',
        height: '100%',
        width: '35%',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px'
      },
      content: {
        boxSizing: 'border-box',
        width: '65%',
        height: '100%',
        position: 'absolute',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      contentInner: {
        padding: '40px 0',
        textAlign: 'center'
      },
      h1: {
        fontWeight: 100,
        fontSize: '48px',
        color: '#444',
        margin: 0
      },
      h2: {
        fontWeight: 400,
        textTransform: 'uppercase',
        fontSize: '18px',
        color: '#CD2525',
        margin: '0 0 1em',
      },
      socialLinks: {
        marginTop: 40
      }
    }
  });

  Card.Image = React.createClass({
    render: function() {
      return <Card handleClick={this.props.handleClick}>
          <ImageView style={this.style.img} src={this.props.img} />
          <div style={this.style.content}>{this.props.children}</div>
        </Card>;
    },
    style: {
      img: {
        backgroundColor: '#ddd',
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '35%',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px'
      },
      content: {
        boxSizing: 'border-box',
        width: '65%',
        height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '0 15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '36px'
      }
    }
  });

  Card.Icon = React.createClass({
    render: function() {
      return <Card style={this.style.host}>
        <div style={this.style.icon}>
          <img src={this.props.img} style={this.style.img} />
        </div>
        <div style={this.style.content}>
          {this.props.children}
        </div>
      </Card>;
    },
    style: {
      host: {
        padding: '25px 20px'
      },
      icon: {
        margin: 'auto',
        width: 90,
        height: 90
      },
      img: {
        width: '100%',
        height: '100%'
      },
      content: {
        boxSizing: 'border-box',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 100,
        color: '#444',
        height: 150,
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center'
      }
    }
  });

  return Card;

})();
