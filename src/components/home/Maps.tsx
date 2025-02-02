import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Maps = () => {
	const position: [number, number] = [41.3851, 2.1734];

	return (
		<div className='h-[40vh] w-[80vh]'>
			<h2 className='flex justify-center font-PermanentMarker text-2xl m-3 2xl:m-6 mt-6'>
				MAP
			</h2>

			<MapContainer
				center={position}
				zoom={18}
				className='h-full w-full z-10 notranslate'
			>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				<Marker position={position}>
					<Popup>Barcelona</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Maps;
