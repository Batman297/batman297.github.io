import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Blog from "./routes/blog/blog.component";
import BlogPost from "./components/blog-post/blog-post.component";

const NotFound = () => {
  return <h1>Not founded</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="blog">
          <Route index element={<Blog />} />
          <Route path=":id/:slug" element={<BlogPost />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
