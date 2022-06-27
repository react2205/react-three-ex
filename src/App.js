import './scss/style.scss';
import Orbit from './components/Orbit';
import Model from './components/Model';
import CameraControls from './components/CameraControls';
import CameraBtns from './components/CameraBtns';
import Txt from './components/Txt';
import ColorPicker from './components/ColorPicker';
import Dragable from './components/Dragable';

import { useState } from 'react';
import { Canvas, extend, useThree } from 'react-three-fiber';
import { Suspense } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

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
				<Suspense fallback={null}>
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
