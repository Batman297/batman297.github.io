import styled from "styled-components";

export const BlogPostContainer = styled.div`
  width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 25px auto;
  gap: 10px;

  @media screen and (max-width: 1050px) {
    margin: unset;
  }

  @media screen and (max-width: 900px) {
    margin: unset;
  }
`;

export const PostDate = styled.p`
  font-size: 24px;
  text-align: center;
  color: #8b8b8b;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  line-height: 36px;
  margin: 10px 0;
  text-align: center;
`;

export const Article = styled.article`
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  b,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  hr {
    font-size: 22px;
    width: 700px;
    margin: 10px auto;
  }

  blockquote {
    width: calc(700px - 20px);
    padding: 5px 0;
    padding-left: 20px;
    background-color: #cfcfcf;
    border-left: 5px solid #78c0a8;

    li {
      width: calc(100% - 50px);
      margin-left: 30px;
    }
  }

  li {
    width: calc(100% - 30px);
    margin-left: 30px;
  }

  a {
    color: #022abf;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 26px;
  }

  h5 {
    font-size: 24px;
  }

  h6 {
    font-size: 22px;
  }

  p {
    line-height: 32px;
  }
`;
