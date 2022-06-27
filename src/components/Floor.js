function Floor(props) {
	return (
		<mesh position={props.position} receiveShadow>
			<boxBufferGeometry args={props.dims} />
			<meshPhysicalMaterial color={props.color} />
		</mesh>
	);
}

export default Floor;
