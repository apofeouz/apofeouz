import React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
	return (
		<><Helmet>
			<meta charSet="utf-8" />
			<title>Главная Apofeouz</title>
			<meta name="description" content="apofeouz сайт посвящён для музыкального проекта" />
		</Helmet>
			<section className="section" id="head">
				<div className="container">
					<div className="row">
						<div className="col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1 text-center">
							<h1 className="title">Apofeouz</h1>
							<h3 className="tagline">
								Добро пожаловать на сайт проекта apofeouz<br />
								Здесь собраны некоторые работы, которые я делал сам или с другими людьми.
							</h3>
							<p><a href={"/download/"} className="btn btn-default btn-lg">Подписывайтесь на новые обновления </a></p>
						</div>
					</div>
				</div>
			</section></>

	);
}
export default Head;