
const Skills = ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap"];
const listItems = Skills.map((Skills, index) =>
  <li key={index} className="skillsMenu">{Skills}</li>
);

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

class Bio extends React.Component {
  render() {
    return (
      <section>
      <h1 className="bio">{listItems}</h1>
      </section>  
    )
  }
}
class Container extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <h1>{this.props.name}</h1>
        <img src= {this.props.pic} className="profileimg" />
        </div>
    )
  }
}
class Container1 extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Bio />
      </div>
    )
  }
}
class Container2 extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div id="container-hire">
          <p className="hireme">Hire me</p>
        </div>  
      </div>
    )
  }
}

ReactDOM.render(<Container name="Ksenia Beliaeva" pic="img/my-image.jpg" />, document.getElementById('container'));
ReactDOM.render(<Container1 name="Ksenia Beliaeva" />, document.getElementById('container-1'));
ReactDOM.render(<Container2 name="Ksenia Beliaeva" />, document.getElementById('container-2'));