import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';

const Projects = (props) => {

	return (
		<><Helmet>
			<meta charSet="utf-8" />
			<title>Прооекты Apofeouz</title>
			<meta name="description" content="Проекты Apofeouz видео с ютуба и не только" />
		</Helmet>
			<div className="container">
				<h2 className="text-center title">Смотреть</h2>
				<br />
				<div className="row">
					{props.Data.project.map((item, id) => <div class="col-sm-6 col-sm-offset-0">
						<div className="thumbnail">
							<img src={item.img} alt="" />
							<div className="caption">
								<h3>{item.title}</h3>
								<p>{item.preview}</p>
								<p> <Button as={Link} to={`/pages/Project/${id + 1}`}>Информация</Button></p>
							</div>
						</div>
					</div>
					)}
				</div>
			</div></>

	);

}
export default Projects;