var React = require('react');
var ImageView = require('./ImageView.js');
var SocialBtn = require('./SocialBtn.js');
Object.assign = require('object-assign');

module.exports = (function() {
  var Card = React.createClass({
    getDefaultProps: function() {
      return {
        loadOrder: 0,
        height: 275,
        width: 450,
        backgroundColor: '#fff',
        style: {}
      };
    },
    render: function() {
      // Calculate animation delay
      var animDuration = `${0.7 + this.props.loadOrder/4 }s`;
      var cardStyle = {
        WebkitAnimationDuration: animDuration,
        MozAnimationDuration: animDuration,
        // change width, height and bg according to props
        width: this.props.width,
        height: this.props.height,
        backgroundColor: this.props.backgroundColor
      }
      Object.assign(cardStyle, this.props.style);

      return <div
                onClick={this.handleClick}
                style={cardStyle}
                className="Card">{this.props.children}</div>;
    }
  });

  Card.Name = React.createClass({
    render: function() {
      return <Card loadOrder={this.props.loadOrder}>
        <ImageView style={this._style.img} src="/img/profile.jpg" />
        <div style={this._style.content}>
          <div style={this._style.contentInner}>
            <h1 style={this._style.h1}>Arthur Lee</h1>
            <h2 style={this._style.h2}>Designer &amp; Developer</h2>
            <div style={this._style.socialLinks}>
              <SocialBtn href="http://www.google.com/recaptcha/mailhide/d?k=01OWkW9eUwqxP23Bxfd4o8pw==&c=FVysm5b2s6wu3dgCw4p4R4PNpxPDYSSb9SWUs-ltErQ=" icon="fa-envelope-o" />
              <SocialBtn href="http://www.linkedin.com/in/arthuralee" icon="fa-linkedin" />
              <SocialBtn href="https://twitter.com/compid" icon="fa-twitter" />
              <SocialBtn href="https://github.com/arthuralee" icon="fa-github" />
            </div>
          </div>
        </div>
      </Card>
    },
    _style: {
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

  Card.ImageLeft = React.createClass({
    render: function() {
      return <Card handleClick={this.props.handleClick} loadOrder={this.props.loadOrder}>
          <ImageView style={this._style.img} src={this.props.img} />
          <div style={this._style.content}>{this.props.children}</div>
        </Card>;
    },
    _style: {
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
      return <Card style={this.style.host} loadOrder={this.props.loadOrder}>
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

  Card.ImageFull = React.createClass({
    render: function() {
      return <Card handleClick={this.props.handleClick} loadOrder={this.props.loadOrder} height="100%">
          <ImageView style={this._style.img} src={this.props.img} />
          <div style={this._style.content} className="Card-ImageFull-content">{this.props.children}</div>
        </Card>;
    },
    _style: {
      img: {
        backgroundColor: '#ddd',
        height: '300px',
        width: '100%',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px'
      }
    }
  });

  Card.ImageLink = React.createClass({
    render: function() {
      return (
        <a href={this.props.href} target={this.props.target} style={this._style.link} className="ImageLink">
          {this.props.text}
        </a>);
    },
    _style: {
      spacer: {
        height: 70
      },
      link: {
        height: 300
      }
    }
  })

  return Card;

})();
