import './scss/style.scss';
import Orbit from './components/Orbit';
import Model from './components/Model';
import CameraControls from './components/CameraControls';
import CameraBtns from './components/CameraBtns';
import Txt from './components/Txt';
import ColorPicker from './components/ColorPicker';
import Dragable from './components/Dragable';

import { Canvas, extend, useFrame } from 'react-three-fiber';
import { Suspense, useRef, useState } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

function Box() {
	const obj = useRef(null);
	useFrame((state) => {
		obj.current.rotation.x += 0.03;
		obj.current.rotation.y += 0.03;
	});
	return (
		<mesh ref={obj}>
			<boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
			<meshStandardMaterial
				attach='material'
				transparent
				opacity={0.5}
				wireframe
				color={'#000'}
			/>
		</mesh>
	);
}

function App() {
	const [Index, setIndex] = useState(0);

	return (
		<figure>
			<h1>Dcode Lab</h1>
			<Txt Index={Index} />
			<CameraBtns setIndex={setIndex} />
			<ColorPicker />

			<Canvas
				shadowMap
				style={{ background: '#cdcfd3' }}
				camera={{ position: [7, 0, 7] }}>
				<Orbit />
				{/* <axesHelper args={[1]} /> */}
				<CameraControls />
				<ambientLight color='white' intensity={1} />

				{/* <Dragable transformGroup> */}
				<Suspense fallback={<Box />}>
					<Model
						path={process.env.PUBLIC_URL + '/car/scene.gltf'}
						position={[0, -1, 4]}
						scale={1}
					/>
				</Suspense>
				{/* </Dragable> */}
			</Canvas>
		</figure>
	);
}

export default App;
