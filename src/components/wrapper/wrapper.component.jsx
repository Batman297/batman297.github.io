import { WrapperContainer, MainContainer } from "./wrapper.styles";

const Wrapper = ({ children }) => {
  return (
    <WrapperContainer>
      <MainContainer>{children}</MainContainer>
    </WrapperContainer>
  );
};

export default Wrapper;
