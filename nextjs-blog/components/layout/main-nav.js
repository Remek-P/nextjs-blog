import classes from "./main-nav.module.css";

import Logo from "@/components/layout/logo";

import Link from "next/link";

function NavigationBar() {
  return (
      <header className={classes.header}>
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default NavigationBar;