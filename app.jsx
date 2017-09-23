//Contacts
//=========

class Contacts extends React.Component { 
  render() { 
    return (
      <div className = "container">
        <ul className="contactsList">
          <li className="contactDetails">{this.props.email}</li>
          <li>{this.props.mob}</li>
          <li>{this.props.linkedin}</li>
        </ul> 
        
     </div>
    );
  }
}

// Portfolio
// =========
class Portfolio extends React.Component {
  render() {
    return (
      <div>
        {this.props.exampleList.map(example =>
          <Example image={example.image} link={example.siteLink} key={example.image} />
        )
        }
      </div>
    );
  }

}

class Example extends React.Component {
  render() {
    return (
      <div className="siteEx">
        <a href={this.props.siteLink} className="examples-link" >
        <img src={this.props.image} className="examples-img" />
        </a>
      </div>
    );
  }
}

//MENULIST
//========

const MenuList = ["Menu", "Skills", "Contacts", "Hire me"];
const MenuListItems = MenuList.map((menuItem) =>
  <li key={menuItem} className="menu">{menuItem}</li>
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

const SkillsList = ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap"];
const listItems = SkillsList.map((skillname) =>
  <li key={skillname} className="skillsMenu">{skillname}</li>
);

class Skills extends React.Component {
  render() {
    return (
      <h1 className="bio">{listItems}</h1>
    )
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <h1>{this.props.name}</h1>
        <img src={this.props.pic} className="my-image" />
      </div>
    );
  }
}


class MainContainer extends React.Component {

  render() {
    return (
      <div>
        <Title name={this.props.me.name} pic={this.props.me.avatar} />
        <Skills />
        <Portfolio exampleList={this.props.me.examples} />
        <Portfolio exampleList={this.props.me.examples2} className = " portfolio-wrap"/>
        <Contacts email={this.props.me.email} mob={this.props.me.mobile} linkedin={this.props.me.linkedin}/>
      </div>
    );
  }
}

MainContainer.defaultTypes = {
  name: "Ksenia Beliaeva",
};

let ME =
  {
    name: "Ksenia Beliaeva",
    avatar: "img/my-image.jpg",
    skills: [],
    email : "Email: ksenia@gmail.com",
    mobile : "Mob: 34 - 55 - 22",
    linkedin : "Linedin: Koshka Moshka",
    examples: [{
      image: "img/websites-examples__each.png",
      siteLink : "aaa.com",
    },
    {
      image: "img/websites-examples__each2.png",
      siteLink: "aaa.com",
    }
    ],
    examples2: [{
      image: "img/websites-examples__each.png",
      siteLink: "aaa.com",
    },
    {
      image: "img/websites-examples__each2.png",
      siteLink: "aaa.com",
    }
    ]
  };



ReactDOM.render(<MainContainer me = {ME} />, document.getElementById('main-container'));

