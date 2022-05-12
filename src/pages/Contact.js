
const Contact = () => {

    return(
        <div className="container">
	
		<h2 className="text-center title">Контакты</h2>

		<div className="row">
			<div className="col-sm-8 col-sm-offset-2 text-center">
				<p className="lead">Спасибо, что посетили этот сайт.</p>
				<p>Вы можете связаться со мной по e-mail, а так же найти меня в социальных сетях!</p>
				<p><b>apofeouz@mail.ru</b><br /><br /></p>
				<ul className="list-inline list-social">
					<li><a href="https://vk.com/apofeouzmusic" className="btn btn-link"><i className="fa fa-vk fa-fw"></i> VK</a></li>
					<li><a href="https://www.youtube.com/c/Juliaplusmusic" className="btn btn-link"><i className="fa fa-youtube fa-fw"></i>YouTube</a></li>
					{/* <li><a href="http://linkedin/in/pozhilov" className="btn btn-link"><i className="fa fa-linkedin fa-fw"></i> LinkedIn</a></li> */}
				</ul>
			</div>
		</div>

	</div>
    );
}
export default Contact