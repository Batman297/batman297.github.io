import { MessageText, NotFoundContainer } from "./not-found.styles";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <MessageText>
        The page you're looking for isn't exist. Please make sure you have
        entered the right url.
      </MessageText>
    </NotFoundContainer>
  );
};

export default NotFound;
