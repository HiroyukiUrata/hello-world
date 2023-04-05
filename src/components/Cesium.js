import { Entity, Viewer,BoxGraphics } from 'resium'
import { Cartesian3,Color } from 'cesium'

	export default function Cesium() {
	  return (
		<Viewer>
			<Entity
			name="BoxGraphics"
			description="BoxGraphics!!"
			position={Cartesian3.fromDegrees(0.0707383, 40.7117244, 100)}>
			<BoxGraphics material={Color.RED} dimensions={new Cartesian3(400000.0, 300000.0, 500000.0)} />

			</Entity>
		</Viewer>
	  )
	}