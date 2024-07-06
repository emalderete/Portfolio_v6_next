import Card from "../components/cards/Card";
import style from './portfolio.module.css';

const Portfolio = () => {
    const contentAbout = {
        innerHtml : `<h1 style={{color: "#fff"}}>Hola</h1>`
    }


    return (
        <div className={style.portfolio}>
            <Card>
                <div>
                    
                </div>
            </Card>
        </div>
    );
};

export default Portfolio;