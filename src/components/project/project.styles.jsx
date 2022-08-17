import styled from "styled-components";

export const BaseContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const BlueContainer = styled(BaseContainer)`
  background-color: #9cccf6;
`;

export const YellowContainer = styled(BaseContainer)`
  background-color: #f5d593;
`;

export const GreenContainer = styled(BaseContainer)`
  background-color: #93dec7;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10%;

  img {
    width: 300px;
    border: 1px solid #ccc;
  }
`;

export const DescriptionContainer = styled.div`
  margin-left: 5%;
  margin-right: 10%;
`;

export const ProjectTitleText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ListContainer = styled.div`
  font-size: 22px;
  padding-left: 25px;
  line-height: 32px;
  list-style-position: outside;
`;

export const LinkContainer = styled.div`
  margin-top: 15px;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  align-items: center;

  span {
    margin: 0 10px;
    font-weight: normal;
  }
`;
