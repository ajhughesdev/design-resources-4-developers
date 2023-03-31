import stretchedDev from './../../assets/stretched-dev.png'
import css from './Header.module.css'

const Header = () => {
    return (
        <>
            <header className={css.header}>
                <span className={css['mobile']}>
                    <h1>
                        <span className={css['desktop']}>
                            <span className={css.design}>
                                <span>Design</span>
                            </span>
                            <span className={css.resources}>
                                <span data-text="Resources">Resources</span>
                            </span>
                            <span className={css.for}>for</span>
                        </span>
                        <img src={stretchedDev} alt="developers" />
                    </h1>
                    <p>
                        Curated list of design and UI resources from stock photos, web
                        templates, CSS frameworks, UI libraries, tools and much more
                    </p>
                </span>
            </header>
            <p>
                Curated list of design and UI resources from stock photos, web
                templates, CSS frameworks, UI libraries, tools and much more
            </p>
        </>
    )
}

export default Header