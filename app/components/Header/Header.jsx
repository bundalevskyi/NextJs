import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import styles from "./header.module.scss";
import NavLiink from "./nav-link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={"/"}>
        <Image src={logoImg} alt='A plate with food' />
        NextLevel food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLiink href={"/meals"}>Browse Meals</NavLiink>
          </li>
          <li>
            <NavLiink children={""} href={"/community"}>
              Foodies Community
            </NavLiink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
