export class PropertyAttributes {
    key: string;
    value: string;
}
export class PropertyImgAttributes {
    img: string;
    title: string;
    caption: string;
    slide: number;

}

export class Property {
    propertyid: string;
    name: string;
    location: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    zillow: string;
    description: string;
    masterimage: string;
    images: PropertyImgAttributes[];
    propertyattributes: PropertyAttributes[];
}
