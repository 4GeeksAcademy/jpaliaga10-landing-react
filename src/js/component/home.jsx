import React from "react";
import { Card } from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import { products } from "./data.jsx";



//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="d-flex row text-center justify-content-evenly m-2 p-3 mx-0 flex-wrap">
			{
				products.map((item) => {
					return <Card key={item.title} title={item.title} description={item.description} cta={item.cta}/>
				})
			}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
