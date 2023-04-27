export type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex items-center flex-col max-w-[600px] mx-auto text-center leading-7 mt-5 py-5 px-3">
      <span className="font-bold text-xl">Let’s connect</span>
      <span className="text-sm">
        Get in touch for opportunities or just to say hi!
      </span>
      <ul className="flex gap-2 text-xs leading-5">
        <li>
          <a href="https://twitter.com/trdenda">Twitter</a>
        </li>
        <li>•</li>
        <li>
          <a href="https://github.com/tridenda">Github</a>
        </li>
        <li>•</li>
        <li>
          <a href="https://www.linkedin.com/in/tridenda/">LinkedIn</a>
        </li>
        <li>•</li>
        <li>
          <a href="mailto: tridenda297@gmail.com">Email</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
