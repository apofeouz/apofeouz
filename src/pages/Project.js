import React from "react";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion'
import { Button } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import Data from "../data/data"
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import '../css/project.css';




const Project = ({ match, location, props }) => {

    
      const {
        params: { title }
      } = match;
    


		return (

      <><Helmet>
        <meta charSet="utf-8" />
        <title>{Data.project[title - 1].title}</title>
        <meta name="description" content={Data.project[title - 1].description} />
      </Helmet><div className="container">
          <br />
          <h2 className="text-center title">{Data.project[title - 1].title}</h2>


          <div className="row">
            <div className="col-sm-12">

              <div className="video-block"><iframe src={Data.project[title - 1].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <div className="thumbnail">
                <div className="caption">
                  <h3>{Data.project[title - 1].preview}</h3>

                  <Button style={{ float: 'right' }} as={Link} to="/pages/Projects">Вернуться</Button>

                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Button><Accordion.Button class="btn btn-primary" role="button">Описание</Accordion.Button></Button>
                      <Accordion.Body style={{ whiteSpace: 'pre-line' }}>
                        {Data.project[title - 1].description}
                      </Accordion.Body>
                    </Accordion.Item>

                    <br />

                    <Accordion.Item eventKey="1">
                      <Button><Accordion.Button class="btn btn-primary" role="button">Текст песни<br /></Accordion.Button></Button>
                      <Accordion.Body style={{ whiteSpace: 'pre-line' }}>{Data.project[title - 1].text}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>


            </div>

          </div>
        </div></>

    );
		
}
export default Project;