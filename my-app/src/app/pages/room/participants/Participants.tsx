import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

interface ParticipantProps {
  identity: string;
}

const dummyParticipants: ParticipantProps[] = [
  { identity: "irshad" },
  { identity: "shahal" },
  { identity: "razik" },
  { identity: "shamil" },
];

interface SingleParticipantProps {
  participant: {identity: string};
  lastItem: boolean;
  identity: string
}

const SingleParticipants = ({ participant, lastItem, identity }: SingleParticipantProps) => {
  return (
    <>
      <p className='participants_paragraph'>{identity}</p>
      {!lastItem && <span className='participants_separator_line'></span>}
    </>
  );
};

const Participants = () => {

    const {participants} = useSelector((state: RootState) => state.meet)
  return (
    <div className='participants_container'>
      {participants && participants.map((participant:any, index:number) => (
        <SingleParticipants
          key={index}
          lastItem={participants.length === index + 1}
          participant={participant}
          identity={participant.identity}
        />
      ))}
    </div>
  );
};

export default Participants;
