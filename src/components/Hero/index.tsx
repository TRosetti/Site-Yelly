import styles from "./hero.module.css"
import {IHero} from "./types"


export function Hero({highlight, title, paragraph, cta, linkCta, linkImg, altImg}:IHero){
    return(
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.desktop}>
                    <div className={styles.textContainer}>
                        <h2>{highlight}</h2>
                        <h1>{title}</h1>
                        <p>{paragraph}</p>

                        <a href={linkCta}>{cta}</a>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={linkImg} alt={altImg} />
                    </div>
                </div>


                <div className={styles.mobile}>
                    <div className={styles.textContainer}>
                        <h2>{highlight}</h2>
                        <h1>{title}</h1>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={linkImg} alt={altImg} />
                    </div>
                    <div className={styles.textContainer}>
                        <p>{paragraph}</p>

                        <a href={linkCta}>{cta}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}