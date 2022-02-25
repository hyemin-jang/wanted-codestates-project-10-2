import React, { useState } from 'react';
import styled from 'styled-components';
import RankerInfo from './RankerInfo';
import RankingInfo from './RankingInfo';
import Buttons from './Buttons';
import Modal from './Modal';
import { OneInfos, TeamInfos } from '../../MockUP/rankData';
import './box.css';

import RankListTitle from './RankListTitle';
const RankerBox = ({ top3MatchList, matchType, setMatchType }) => {

  const [modalState, setModalState] = useState(false);
  const setOnclick = () => setModalState(true);
  const defaultState = [true, false];
  const [isSelected, setIsSelected] = useState(defaultState);
  return (
    <>
      {modalState && <Modal setModalState={setModalState} />}
      <BaseWrapper>
        <div className="ocean">
          <div className="wave"></div>
        </div>
        <div className="ocean">
          <div className="wave"></div>
        </div>
        <div className="info-wrap">
          <RankingInfo setOnclick={setOnclick} />
          <Buttons
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            setMatchType={setMatchType}
          />
        </div>
        <Rankers>

         
          {top3MatchList.map((info) => {
            return <RankerInfo info={info} />;
          })}
        </Rankers>
        <RankListTitle />
      </BaseWrapper>
    </>
  );
};

const BaseWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 5;
  position: relative;
  padding-top: 55px;
  width: 100%;
  min-width: 1000px;
  margin: 0 auto;
  background-color: #005fcc;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  .info-wrap {
    width: 1000px;
    margin: 0 auto;
  }
`;
const Rankers = styled.div`
  display: flex;
  justify-content: center;
`;
export default RankerBox;
