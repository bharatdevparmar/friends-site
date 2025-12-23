import React from 'react';
import {
  Button,
  Image,
  Modal,
  Table
} from 'semantic-ui-react';
import './modal.css';

const PersonalInfoModal = ({open, data, toggleModal}) => {
  const handleClose = () => {
    toggleModal();
  };

  return (
    <Modal open={open} size='large' onClose={handleClose} className="modalPersonalInfo">
      <Modal.Header>Personal Information</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src={data && data.image} />
        <Modal.Description>
          <Table celled>
            <Table.Body>
              <Table.Row>
                <Table.HeaderCell>Name :</Table.HeaderCell>
                <Table.Cell>{data && data.name}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Email :</Table.HeaderCell>
                <Table.Cell>{data && data.email}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Age :</Table.HeaderCell>
                <Table.Cell>{data && data.age}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Address :</Table.HeaderCell>
                <Table.Cell>{data && data.address}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Country :</Table.HeaderCell>
                <Table.Cell>{data && data.country}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Contact No :</Table.HeaderCell>
                <Table.Cell>{data && data.contactNo}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={toggleModal}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default PersonalInfoModal;
