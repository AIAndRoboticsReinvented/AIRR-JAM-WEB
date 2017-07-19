export class Init {
    load() {
        if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined)
        {
            console.log('No Markers Found.....creating...');

            var markers = [
                {
                    name: 'Riverwood and Hillsborough River',
                    lat: 27.976575,
                    lng: -82.481322,
                    draggable: false
                },
                {
                    name: 'Brandon',
                    lat: 27.921247,
                    lng: -82.295354,
                    draggable: false
                },
                {
                    name: 'Tampa',
                    lat: 28.015452,
                    lng: -82.590888,
                    draggable: false
                },
                {
                    name: 'Northwest Tampa',
                    lat: 27.971302,
                    lng: -82.489595,
                    draggable: false
                },
                {
                    name: 'Beach Park',
                    lat: 27.943802,
                    lng: -82.518902,
                    draggable: false
                },
                {
                    name: 'Madeira Beach',
                    lat: 27.795803,
                    lng: -82.792770,
                    draggable: false
                },
                {
                    name: 'Crisp Park',
                    lat: 27.804666,
                    lng: -82.630867,
                    draggable: false
                },
                {
                    name: 'River Oaks',
                    lat: 28.027684,
                    lng: -82.572422,
                    draggable: false
                },
                {
                    name: 'Clearwater',
                    lat: 27.954939,
                    lng: -82.762241,
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