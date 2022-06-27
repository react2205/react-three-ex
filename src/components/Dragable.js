import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { extend, useThree } from 'react-three-fiber';
import { useRef, useEffect, useState } from 'react';
extend({ DragControls });

function Dragable(props) {
	const { camera, gl, scene } = useThree();
	const groupRef = useRef(null);
	const controlRef = useRef(null);
	const [Children, setChildren] = useState([]);

	useEffect(() => {
		setChildren(groupRef.current.children);
	}, []);

	useEffect(() => {
		controlRef.current.addEventListener('hoveron', (e) => {
			scene.orbitControls.enabled = false;
		});

		controlRef.current.addEventListener('hoveroff', (e) => {
			scene.orbitControls.enabled = true;
		});

		controlRef.current.addEventListener('dragstart', (e) => {
			console.log(e.object);
		});
	}, [Children]);

	return (
		<group ref={groupRef}>
			<dragControls
				transformGroup={props.transformGroup}
				args={[Children, camera, gl.domElement]}
				ref={controlRef}
			/>
			{props.children}
		</group>
	);
}

export default Dragable;
