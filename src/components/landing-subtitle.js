import React from "react"
import Typist from "react-typist"

import styles from "./landing-subtitle.module.css"

const LandingSubtitle = () => {
  return (
    <p className={styles.subtitle}>
      Android developer&nbsp;
      <Typist
        className={styles.typist}
        cursor={{ show: false }}
        startDelay={1200}
      >
        {
          // Double-slash before "Music producer" is not a comment,
          // so ignore the warning that it will be rendered in the text.

          // eslint-disable-next-line
        }
        // Music producer
        <Typist.Backspace count={14} delay={850} />
        Electronics tinkerer
        <Typist.Backspace count={20} delay={850} />
        Game developer
        <Typist.Backspace count={14} delay={850} />
        Woodworker
        <Typist.Backspace count={10} delay={850} />
        DIY-er
        <Typist.Backspace count={6} delay={850} />
        Creative
      </Typist>
    </p>
  )
}

export default LandingSubtitle
