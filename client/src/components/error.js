import React from 'react';
import '../style/error.css';
import { Link } from 'react-router-dom'

const Error = ({title,textObj}) => (
    <div className="wrapper">
	<div className="zombie">
		<div className="zombie__head">
			<div className="zombie__brain"></div>
			<div className="zombie__cheeks"></div>
			<div className="zombie__chin"></div>
			<div className="zombie__eyes">
				<div className="eye left">
					<div className="eyebrow"></div>
			</div>
			<div className="eye right">
				<div className="eyebrow"></div>
			</div>
		</div>
		<div className="zombie__nose"></div>
		<div className="zombie__mouth">
			<div className="tooth">
				<div className="tooth__top"></div>
				<div className="tooth__bottom"></div>
			</div>
		</div>
	</div>
	<div className="zombie__body">
		<div className="zombie__chest">
			<div className="zombie__arms">
				<div className="arm left">
					<div className="arm__bone"></div>
					<div className="arm__sleeve"></div>
				</div>
				<div className="arm right">
					<div className="arm__details">
						<div className="arm__biceps"></div>
						<div className="arm__forearm"></div>
						<div className="hands">
							<div className="fingers">
								<div className="finger thumb"></div>
								<div className="finger middle"></div>
								<div className="finger index"></div>
								<div className="finger ring"></div>
								<div className="finger pinky"></div>
							</div>
						</div>
					</div>
					<div className="arm__sleeve"></div>
				</div>
			</div>
		</div>
	</div>
</div>
<div className="ground">
	<div className="ground__hole"></div>
		<div className="ground__rocks">
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
			<div className="rock"></div>
		</div>
		<div className="tomb">
			<div className="tomb__info">
				<h1 className="headers-h1">{title}</h1>
                {
                    textObj.map((text,index)=>{
                        return <h4 className="headers-h4" key={index}>{text}</h4>
                    })
                }
			</div>
		</div>
		<div className="brains-comic-box">
			<h1 className="brains__text"><Link to="/">返回首页</Link></h1>
		</div>
	</div>
</div>
)


export default Error;