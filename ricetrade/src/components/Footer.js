import { Link } from 'react-router-dom';

function Footer() {
    const styles = {
        footer: {
            background: '#222831',
            color: '#EEEEEE',
            padding: '30px 50px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',

        },

        footerContainer: {
            display: 'grid',
            gridGap: '10px',
            gridTemplateColumns: '1fr 4fr 1fr',
            width: '100%',
            margin: '5px',
        },
        box1List: {
            color: '#EEEEEE',
            textDecoration: 'none',
            fontWeight: 'normal',
            fontSize: '1rem',
            listStyleType: 'none',
            padding: '0px',
            margin: '0px',
        },
        box1ListItem: {
            margin: '10px 0',
        },
        box2: {
            margin: '0% 10%',
        },
        para: {
            fontWeight: 'normal',
            fontSize: '1rem',
            lineHeight: '25px',
            margin: '0px',
        },
        icons: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            margin: '10px 0px',
        },
        iconImage: {
            width: '75%',
        },
        center: {
            textAlign: 'center',
            fontSize: '1rem',
        },
    };

    return (
        <footer style={styles.footer}>
            <div id="footer" style={styles.footerContainer}>
                <div className="box1" style={styles.box1}>
                    <p style={{ fontSize: '1.2rem', margin: '0px' }}><u>TOP PICKS</u></p><br />
                    <ul style={styles.box1List}>
                        <li style={styles.box1ListItem}>Basmati Rice</li>
                        <li style={styles.box1ListItem}>Pearl Millet</li>
                        <li style={styles.box1ListItem}>Finger Millet</li>
                        <li style={styles.box1ListItem}>Spicy Garlic Powder</li>
                        <li style={styles.box1ListItem}>Tamil-style Sambhar Spice Blend</li>
                    </ul>
                </div>
                <div className="box2" style={styles.box2}>
                    <p style={{ fontSize: '1.2rem', margin: '0px' }}><u>ABOUT US</u></p><br />
                    <p id="para" style={styles.para}>Welcome to PKFoods, your trusted source for premium quality rice, 
                    millets, and traditional Indian powders. Our mission is to bring the rich flavors and health benefits 
                    of Indian cuisine to your table with the finest, handpicked ingredients. At PKFoods, we are committed 
                    to sustainability and authenticity, ensuring that every product is natural and ethically sourced. 
                    Explore our diverse range of products and experience the essence of traditional Indian cooking 
                    with a modern touch!</p>
                </div>
                <div className="box3" style={styles.box3}>
                    <p style={{ fontSize: '1.2rem', margin: '0px' }}><u>CONNECT WITH US</u></p>
                    <div className="icons" style={styles.icons}>
                        <Link to="/roamio.io@gmail.com" ><img src={require('../images/email.gif')} alt="Email" style={styles.iconImage} /></Link>
                        <Link to="/contactus" ><img src={require('../images/helpdesk.gif')} alt="Help Desk" style={styles.iconImage} /></Link>
                        <Link to="/explore" ><img src={require('../images/worldwide.gif')} alt="Worldwide" style={styles.iconImage} /> </Link>
                    </div>
                </div>
            </div>

            <div className="center" style={styles.center}>
                Copyright &copy; www.PKFoods.com. All rights reserved!
            </div>
        </footer>
    );
}

export default Footer;