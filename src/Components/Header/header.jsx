import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Menu, Container, Grid, GridRow, GridColumn} from 'semantic-ui-react';
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
            <GridRow>
              <GridColumn>
                <h1 className='title'>Find Articles & Friends</h1>
              </GridColumn>
              <GridColumn>
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
              </GridColumn>
            </GridRow>
          </Grid>
        </Container>
      </header>
    );
  }
}

export default Header;
