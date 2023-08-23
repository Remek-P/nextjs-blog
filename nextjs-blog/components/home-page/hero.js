import classes from "./hero.module.css";

import Image from "next/image";

function Hero() {
  return (
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
              src="/images/site/avatar.png"
              alt="Image showing an avatar"
              height={400}
              width={400}
          />
        </div>
        <h1>Hi, my name is Remek</h1>
        <p>I making this site as a practice exercise</p>
      </section>
  )
}

export default Hero;