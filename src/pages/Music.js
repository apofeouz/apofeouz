import React, { Component } from "react";
import AudioPlayer from "../components/pleer/AudioPlayer";
import tracks from "../components/pleer/tracks.js";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';



class Projects extends Component {
    
	
	 
	  render() {
		return (
<div className="container">
				<h2 className="text-center title">Слушать</h2>
				<br />
				<div className="row" >
					
				<div class="col-sm-6 col-sm-offset-2">
				<div class="thumbnail">
					
					<div class="caption">
					<AudioPlayer tracks={tracks} />
					</div>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="thumbnail">
					
					<div class="caption">
						<h3>Плей лист</h3>
						<p>{tracks.title}</p>
						
					</div>
				</div>
			</div>



				</div>
			</div>

	

    );
		}
}
export default Projects;