import React from "react"
import PortfolioImage from "./portfolioImage"
import * as styles from "./card.module.css"

const Card = ({ id, name, link, title, imagePath, description, type, tags, date }) => (
    <div className={ styles.CardOuter } onClick={ () => window.open(link) }>
        <div className={ styles.CardContainer }>
            <div className={ styles.CardDecoration }/>
            <div className={ styles.CardContent }>
                <PortfolioImage imagePath={ imagePath } className={ styles.CardImage } />
                <div className={ styles.CardText }>
                    <p className={ styles.CardHeader }>{title}</p>
                    <p className={ styles.CardDescription}>
                        <span className={ styles.CardMeta }>
                            {date} &#8226; {type}
                        </span>
                        <br />
                        <br />
                        { description }
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default Card;
