export type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex items-center flex-col w-[600px] mx-auto text-center leading-7 mt-5">
      <span className="font-bold text-xl">Let’s connect</span>
      <span className="text-sm">
        Get in touch for opportunities or just to say hi!
      </span>
      <ul className="flex gap-2 text-xs leading-5">
        <li>
          <a href="">Twitter</a>
        </li>
        <li>•</li>
        <li>
          <a href="">Github</a>
        </li>
        <li>•</li>
        <li>
          <a href="">LinkedIn</a>
        </li>
        <li>•</li>
        <li>
          <a href="">Email</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
