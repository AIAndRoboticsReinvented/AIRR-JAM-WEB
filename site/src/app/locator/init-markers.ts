export class Init {
    load() {
        if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined)
        {
            console.log('No Markers Found.....creating...');

            var markers = [
                {
                    name: 'Company 1',
                    lat: 25.393661,
                    lng: -80.683594,
                    draggable: false
                }

            ];
            localStorage.setItem('markers', JSON.stringify(markers));
        } else
        {
            console.log('loading Markers...');
        }
    }
}