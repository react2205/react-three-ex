import React from 'react';

function Light(props) {
	return (
		<mesh position={props.position}>
			<pointLight color={props.color} intensity={props.intensity} castShadow />
			{props.show && (
				<>
					<sphereBufferGeometry args={[0.3, 20, 20]} />
					<meshPhongMaterial emissive={props.color} />
				</>
			)}
		</mesh>
	);
}

export default Light;
