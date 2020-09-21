import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id="12344123"
                        title="Buried: The thrilling new crime series introducing Detective Jack Warr"
                        price={29.99}
                        image={"https://m.media-amazon.com/images/I/51XKMqal5nL.jpg"}
                        rating={4}
                    />
                    <Product
                        id="12344124"
                        title="Kenwood Chef Classic KM331 4.6 Litre kitchen machine, 800 Watt, Silver"
                        price={399.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/71Xf0d5l1UL._AC_SL1500_.jpg"}
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="12344126"
                        title="BenQ GL2480 24 Inch 1080p 1 ms 75 Hz LED Eye-Care Gaming Monitor, Anti-Glare, HDMI"
                        price={239.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/715m-NYzG4L._AC_SL1417_.jpg"}
                        rating={4}
                    />

                    <Product
                        id="12344127"
                        title="ADMI FR-1 Gaming PC: AMD Ryzen 2300X 4.0Ghz Quad Core, RX570 8GB Graphics Card, 16GB 2400MHz, 240GB SSD + 1TB HDD, Raider RGB Case, Windows 10, 300mbps Wifi"
                        price={559.95}
                        image={"https://images-na.ssl-images-amazon.com/images/I/719t%2ByuWShL._AC_SL1000_.jpg"}
                        rating={5}
                    />

                    <Product
                        id="12344130"
                        title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (7th Generation)"
                        price={347.97}
                        image={"https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg"}
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="12344128"
                        title="LG OLED55GX6LA 55' 4K Ultra HD OLED Smart TV [Energy Class A]"
                        price={1799.00}
                        image={"https://images-na.ssl-images-amazon.com/images/I/71XfBGa0oBL._AC_SL1500_.jpg"}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
