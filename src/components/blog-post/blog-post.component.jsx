import { BlogPostContainer, Header, PostDate, Title } from "./blog-post.styles";

const BlogPost = () => {
  return (
    <BlogPostContainer>
      <Header>
        <PostDate>Wed, February 01, 2017</PostDate>
        <Title>
          Pleno Rekapitulasi PSU Pilkada Kalsel Rampung, Sahbirin-Muhidin Unggul
        </Title>
      </Header>
      <p>
        It is quite common to have both the query and route parameters in any
        single page application. This post a quick tip sharing a little RxJS
        snippet that I wrote in order to read the query and route parameters at
        once. Before we talk about that, let us find out how to read any
        route/query parameters in your Angular 2+ application. There are
        multiple ways to achieve that.
      </p>
      <h2>Reading from the Snapshot</h2>
      <p>
        First and the simplest way to do that is reading them from the snapshot
        of the active route i.e. inject the instance of ActivatedRoute into your
        component's constructor or pull it from the Injector and read it from
        there i.e.
      </p>
    </BlogPostContainer>
  );
};

export default BlogPost;
