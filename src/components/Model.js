import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useMemo } from 'react';
import state from '../state';

function Model(props) {
	const { nodes, scene } = useLoader(GLTFLoader, props.path);
	state.activeMesh = scene.getObjectByName(state.activeName);

	useMemo(() => {
		Object.values(nodes).forEach((obj) => {
			obj.isMesh && Object.assign(obj, { castShadow: true });
		});
	}, [nodes]);

	return (
		<primitive
			object={scene}
			position={props.position}
			scale={new Array(3).fill(props.scale)}
			dispose={null}
		/>
	);
}

export default Model;
