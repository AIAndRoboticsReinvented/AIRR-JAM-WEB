import { Property } from './property';

export const PROPERTIES: Property[] = [
    {
        name: 'Batchelor Pad',
        location: 'Hyde Park',
        address: '744 South Village Cir',
        city: 'Tampa',
        state: 'FL',
        zip: '33606',
        description: 'A Great Place for a single batchelor.',
        masterimage: '../images/property/bachelor1.jpg',
        images: ['../images/property/bachelor1.jpg'],
        keys: ['type','sqft'],
        values: ['studio','300']
    },
    {
        name: 'Newly Weds',
        location: 'Carollwood',
        address: '15499 North Dale Mabry',
        city: 'Tampa',
        state: 'FL',
        zip: '33618',
        description: 'Perfect for the newly weds just getting started on their lives together.',
        masterimage: '../images/property/newlywed1.jpg',
        images: ['../images/property/newlywed1.jpg'],
        keys: ['rooms','bath','sqft'],
        values: ['1','1','600']
    },
    {
        name: 'Family Domicile',
        location: 'Brandon',
        address: '10921 Causeway Blvd.',
        city: 'Brandon',
        state: 'FL',
        zip: '33511',
        description: 'Ideal for a family of four. Plenty of storage and parking. And you dont have to share a bathroom with the kids.',
        masterimage: '../images/property/family1.jpg',
        images: ['../images/property/extended1.jpg'],
        keys: ['rooms','bath','sqft','cars'],
        values: ['3','2','2000','2']
    },
    {
        name: 'Extended Family',
        location: 'Cheval',
        address: '4312 Cheval Blvd',
        city: 'Lutz',
        state: 'FL',
        zip: '33618',
        description: 'A beautiful home with a nice appartment for the mother-in-law. Cozy enough to enjoy each others company and plenty of room to have personal space.',
        masterimage: '../images/property/extended1.jpg',
        images: ['../images/property/extended1.jpg'],
        keys: ['rooms','bath','sqft','cars','units'],
        values: ['4','3','2600','3','2']
    },

];
