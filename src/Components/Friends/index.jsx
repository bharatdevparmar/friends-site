import React, {useEffect, useState} from 'react';
import {Card, Grid, Image, GridColumn, GridRow, Container} from 'semantic-ui-react';
import * as FriendsData from '../../data';
import PersonalInfoModal from '../Modal/PersonalInfoModal';
import './friends.css';
import {getFriends} from '../../action/friendsAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const Friends = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    props.getFriends();
  });

  useEffect(() => {
    setFriends(props.friends);
  }, [props.friends, setFriends]);

  const toggleModal = (index) => {
    setModalOpen(!isModalOpen);
    setModalData(FriendsData.friends[index]);
  };

  return (
    <div className="friendsSection">
      <Container>
        <Grid>
          <GridRow className="friendsRow" columns={6}>
            {
              friends.map((obj, idx) => (
                <GridColumn onClick={() => toggleModal(idx)}>
                  <Card className="friends">
                    <Image src={obj.image} wrapped ui={false} alt='Picture' className="friends-img"/>
                    <Card.Content className="friends-title">
                      <Card.Header>{obj.name}</Card.Header>
                    </Card.Content>
                  </Card>
                </GridColumn>
              ))
            }
          </GridRow>
        </Grid>
      </Container>
      <PersonalInfoModal
        open={isModalOpen}
        data={modalData}
        toggleModal={toggleModal}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    friends: state.friendsList.friends
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getFriends
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
