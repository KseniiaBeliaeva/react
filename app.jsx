//MENULIST
//========

const MenuList = ["Menu", "Skills", "Contacts", "Hire me"];
const MenuListItems = MenuList.map((MenuList, index) =>
  <li key={index} className="menu">{MenuList}</li>
);

class Menu extends React.Component {
  render() {
    return (
      <ul>{MenuListItems}</ul>
    )
  }
}

// SKILLS
// ======

const Skills = ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap"];
const listItems = Skills.map((Skills, index) =>
  <li key={index} className="skillsMenu">{Skills}</li>
);

class Bio extends React.Component {
  render() {
    return (
      <section>
      <h1 className="bio">{listItems}</h1>
      </section>  
    )
  }
}

//CONTAINER
//=========

class Container1 extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      width: 250
    };
  }
  render() {
    let { width } = this.state;
    return (
      <div>
        <Menu />
        <h2 id="datetime">{new Date().toLocaleTimeString()}</h2>
        <h1 id="name">{this.props.name}</h1>
        <img src={this.props.pic} height={width} className={"profileimg " + width} />
        <br />
        <button className="decrement" onClick={this.zoomPicOut.bind(this)}>-</button>
        <button className="increment" onClick={this.zoomPicIn.bind(this)}>+</button>
      </div>
    );
  }
  zoomPicIn() {
    this.setState({width: this.state.width + 20})
  }
  zoomPicOut() {
    this.setState({ width: this.state.width - 20 })


  }
}

//CONTAINER1
//==========

class Container2 extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Bio />
      </div>
    );
  }
}

//CONTAINER2
//==========

class Container3 extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div id="container-hire">
          <p className="hireme">Hire me</p>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Container1 name="Ksenia Beliaeva" pic="img/my-image.jpg" />, document.getElementById('container1'));
ReactDOM.render(<Container2 name="Ksenia Beliaeva" />, document.getElementById('container2'));
ReactDOM.render(<Container3 name="Ksenia Beliaeva" />, document.getElementById('container3'));