import React, { useState } from 'react';
import { Icon, Div, Dropdown, Anchor } from 'atomize';
import NewDate from '../reusable/newDate';

const NewStatusDropDown = ({ setNewStatus, newStatus, setNewReason }) => {
  let detailResponse = '';

  const handleStatusChange = (event) => {
    setshowModal(!showModal);
    console.log(`Status: ${event.target.getAttribute('value')}`);
    setNewStatus(event.target.getAttribute('value'));

    if (event.target.getAttribute('value') === 'mc') {
      detailResponse = prompt('Details', `MC FROM ${NewDate} TO ${NewDate}`);
    } else if (event.target.getAttribute('value') === 'ma') {
      detailResponse = prompt('Details', 'MA AT');
    } else if (event.target.getAttribute('value') === 'off') {
      detailResponse = prompt('Details', `OFF ON ${NewDate}`);
    } else if (event.target.getAttribute('value') === 'leave') {
      detailResponse = prompt('Details', `LEAVE ON ${NewDate}`);
    } else if (event.target.getAttribute('value') === 'attached') {
      detailResponse = prompt('Details', 'ATTACHED OUT TO');
    } else if (event.target.getAttribute('value') === 'others') {
      detailResponse = prompt('Details', '');
    } else if (event.target.getAttribute('value') === 'oncourse') {
      detailResponse = prompt('Details', '');
    } else {
      detailResponse = '';
    }
    console.log(`Reason: ${detailResponse}`);
    if (detailResponse) {
      setNewReason(detailResponse.toUpperCase());
    } else {
      setNewReason('nil');
    }
  };

  const menuList = (
    <Div p={{ x: '1rem', y: '0.5rem' }} value={newStatus} onClick={handleStatusChange}>
      <Anchor d="block" p={{ y: '0.25rem' }} value="present">
        {"Present ✅"}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="mc">
        {"MC 😷"}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="ma">
        {"MA 👨🏻‍⚕️"}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="off">
        {"Off 🚫"}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="oncourse">
        {"On Course 👨🏻‍🎓"}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="leave">
        {"Leave 🚪"}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="attached">
        {"Attached Out 🅰"}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="others">
        {"Others 🗒"}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="stayout">
        {"Stay Out 🏠"}
      </Anchor>
    </Div>
  );

  const [showModal, setshowModal] = useState(false);

  const handleClick = () => {
    setshowModal(!showModal);
  };

  return (
    <Div d="flex" justify={{ xs: 'space-around', lg: 'center' }}>
      <Dropdown
        rounded="xl"
        isOpen={showModal}
        menu={menuList}
        onClick={handleClick}
        bg="info100"
        focusBg="info200"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        openSuffix={<Icon name="Up" color="info700" size="16px" />}
        closeSuffix={<Icon name="Down" color="info700" size="16px" />}
      >
        {newStatus ? `Status: ${newStatus.toUpperCase()}` : 'Status'}
      </Dropdown>
    </Div>
  );
};

export default NewStatusDropDown;
