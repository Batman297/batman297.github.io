import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import About from "./components/about/about.component";
import Blog from "./routes/blog/blog.component";
import BlogPost from "./components/blog-post/blog-post.component";
import NotFound from "./components/not-found/not-found.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
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
