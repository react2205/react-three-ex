import state from '../state';
import * as THREE from 'three';

function ColorPicker() {
	const handleClick = (e) => {
		if (!state.activeMesh) return;
		state.activeMesh.material.color = new THREE.Color(
			e.target.getAttribute('data-color')
		);
	};

	const showColor = ['#bdf2ee', '#c2e699', '#c9c0f5'];

	return (
		<ul className='colorPicker'>
			{['transparent', '#fcfc81', '#ea9dff'].map((color, index) => {
				return (
					<li
						key={color}
						style={{ backgroundColor: showColor[index] }}
						data-color={color}
						onClick={handleClick}></li>
				);
			})}
		</ul>
	);
}

export default ColorPicker;
