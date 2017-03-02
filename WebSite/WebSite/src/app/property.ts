export class PropertyAttributes {
    key: string;
    value: string;
}


export class Property {
    propertyguid: string;
    name: string;
    location: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    description: string;
    masterimage: string;
    images: string[];
    propertyattributes: PropertyAttributes[];
}
