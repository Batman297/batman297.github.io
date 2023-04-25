export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex justify-between w-[600px] mx-auto bg-blue text-sm my-5">
      <a href="">
        <h1>TRI DENDA</h1>
      </a>
      <ul className="flex gap-3">
        <a href="">
          <li>ABOUT</li>
        </a>
        <a href="">
          <li>BLOG</li>
        </a>
        <a href="">
          <li>PROJECTS</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
