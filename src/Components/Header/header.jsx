import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Menu, Container, Grid} from 'semantic-ui-react';
import './header.css';

class Header extends Component {
  state = {}

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
  }

  render() {
    const {activeItem} = this.state;

    return (
      <header>
        <Container>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <h1 className='title'>Find Articles & Friends</h1>
              </Grid.Column>
              <Grid.Column>
                <Menu>
                  <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                  >
                    <NavLink to='/'>Home</NavLink>
                  </Menu.Item>

                  <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                  >
                    <NavLink to='/friends'>Friends</NavLink>
                  </Menu.Item>
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </header>
    );
  }
}

export default Header;
