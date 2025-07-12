import styles from './banner.module.css'

export function Banner(){
    return (
        <section>
            <div className={styles.bannerContainer}>
                <div className={styles.text}>
                    <h2>
                        Mais do que uma maquininha:
                        <span>a revolução no jeito de vender!</span>
                    </h2>
                    <div className={styles.taxa}>
                        <p>TAXA EM 12X A PARTIR DE</p>
                        <h4></h4>
                    </div>
                    <a href="#">Garanta agora a sua Yelly com até 70% de desconto!</a>
                </div>
                <div className={styles.imgContainer}>
                    <img src="" alt="" />
                </div>
            </div>
        </section>
    )
}