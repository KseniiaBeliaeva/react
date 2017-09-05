
const Skills = ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap"];
const listItems = Skills.map((Skills) =>
  <li className="skillsMenu">{Skills}</li>
);

const MenuList = ["Menu", "Expirience", "Contacts", "Hire me"];
const MenuListItems = MenuList.map((MenuList) =>
  <li className="menu">{MenuList}</li>
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
      <h1 className="bio">{listItems}</h1>
    )
  }
}

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
          <Menu />
          <Bio />
        </div>
    )
  }
}

ReactDOM.render(<HelloMessage name="Ksenia Beliaeva" />, document.getElementById('container'));