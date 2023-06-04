import React from 'react';
import EmojiDisplay from '../reusable/emoji';

const style = {
  padding: 0,
  margin: 0
};

const Absentees = ({ persons }) => {
  let mc = 0;
  let ma = 0;
  let off = 0;
  let oncourse = 0;
  let leave = 0;
  let attached = 0;
  let others = 0;
  let stayout = 0;

  persons.forEach(person => {
    switch (person.status) {
      case 'mc':
        mc++;
        break;
      case 'ma':
        ma++;
        break;
      case 'off':
        off++;
        break;
      case 'oncourse':
        oncourse++;
        break;
      case 'leave':
        leave++;
        break;
      case 'attached':
        attached++;
        break;
      case 'others':
        others++;
        break;
      case 'stayout':
        stayout++;
        break;
      default:
        break;
    }
  });

  const totalAbsentee = mc + ma + off + leave + attached + others + stayout + oncourse;

  return (
    <div>
      <p style={style}>Absentees: {totalAbsentee}</p>
      <p style={style}>- <EmojiDisplay currentStatus="mc" /> MC: {mc}</p>
      <p style={style}>- <EmojiDisplay currentStatus="ma" /> MA: {ma}</p>
      <p style={style}>- <EmojiDisplay currentStatus="off" /> OFF: {off}</p>
      <p style={style}>- <EmojiDisplay currentStatus="oncourse" /> ON COURSE: {oncourse}</p>
      <p style={style}>- <EmojiDisplay currentStatus="leave" /> LEAVE: {leave}</p>
      <p style={style}>- <EmojiDisplay currentStatus="attached" /> ATTACHED OUT: {attached}</p>
      <p style={style}>- <EmojiDisplay currentStatus="others" /> OTHERS: {others}</p>
      <p style={style}>- <EmojiDisplay currentStatus="stayout" /> STAY OUT: {stayout}</p>
      <br/>
    </div>
  );
};

export default Absentees;
