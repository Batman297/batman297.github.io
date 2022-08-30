import styled from "styled-components";

export const BaseProjectContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 900px) {
    height: 250px;
  }

  @media screen and (max-width: 750px) {
    height: 100%;
    padding: 20px 0;
    flex-direction: column;
  }
`;

export const BlueProjectContainer = styled(BaseProjectContainer)`
  background-color: #9cccf6;
`;

export const YellowProjectContainer = styled(BaseProjectContainer)`
  background-color: #f5d593;
`;

export const GreenProjectContainer = styled(BaseProjectContainer)`
  background-color: #93dec7;
`;

export const RedProjectContainer = styled(BaseProjectContainer)`
  background-color: #ffa3a3;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  margin-left: 10%;

  img {
    width: 100%;
    border: 1px solid #ccc;
  }

  @media screen and (max-width: 900px) {
    margin-left: 5%;
  }

  @media screen and (max-width: 750px) {
    width: 50%;
    margin: unset;
  }

  @media screen and (max-width: 550px) {
    width: 70%;
  }
`;

export const DescriptionContainer = styled.div`
  width: 60%;
  margin-left: 5%;
  margin-right: 10%;

  @media screen and (max-width: 900px) {
    margin-right: 5%;
  }

  @media screen and (max-width: 750px) {
    width: 80%;
    margin: unset;
    margin-top: 20px;
    text-align: center;
  }

  @media screen and (max-width: 750px) {
    width: 90%;
  }
`;

export const ProjectTitleText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;

  @media screen and (max-width: 1000px) {
    font-size: 26px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 750px) {
    margin-bottom: 15px;
  }
`;

export const ListContainer = styled.div`
  font-size: 22px;
  padding-left: 25px;
  line-height: 32px;
  list-style-position: outside;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (max-width: 750px) {
    padding: unset;

    ul {
      list-style-type: none;
      border-bottom: 1px solid #4f4f4f;
    }

    li {
      margin: 3px 0;
      border-top: 1px solid #4f4f4f;
    }
  }
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

  @media screen and (max-width: 1000px) {
    font-size: 18px;
    margin-top: 12px;
  }

  @media screen and (max-width: 750px) {
    justify-content: center;
    margin-top: 15px;
  }
`;
