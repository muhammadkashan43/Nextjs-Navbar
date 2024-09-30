import Link from "next/link";
const Navbar = () => {
  return (
    <div className="hero">
      <nav>
        <h1 className="logo">Mr <span>Pro</span> :)</h1>
        <ul>
          <li>
            <a href="#">
              <Link href="/">Home</Link>
            </a>
          </li>
          <li>
            <a href="#">
              <Link href="./about-us">About</Link>
            </a>
          </li>
          <li>
            <a href="#">
              <Link href="./service">Service</Link>
            </a>
          </li>
          <li>
            <a href="#">
              <Link href="./Portfolio">Portfolio</Link>
            </a>
          </li>
          <li>
            <a href="#">
              <Link href="./contact-us">Contact</Link>
            </a>
          </li>
        </ul>
        <button type="button">Let&apos;s go</button>
      </nav>
    </div>
  );
};

export default Navbar;
