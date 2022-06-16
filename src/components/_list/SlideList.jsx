import React from 'react';
//import "./ListPage.scss";

const SlideList = (props) => {
	return (
		<div className='SlideList'>
			<div className='Slide-left' onClick={props.left}>
				<i className='bx bx-left-arrow'></i>
			</div>
			<div className='New-List-btn btn' onClick={props.newList}>
				New List
			</div>
			<div className='Slide-right' onClick={props.right}>
				<i className='bx bx-right-arrow'></i>
			</div>
		</div>
	);
};

export default SlideList;
