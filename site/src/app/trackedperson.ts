export class people {
    count_person: number;
    person: person[];
    warnings: string[];
    error: any;
}

export class person {
    id: string;
    name: string;
    firstname: string;
    middlename: string;
    lastname: string;
    age_range: string;
    gender: string;
    current_addresses: person_address[];
    historical_addresses: person_address[];
    phones: phone[];
    associated_person: associated_person[];
}

export class person_address {
    id: string;
    location_type: string;
    street_line_1: string;
    street_line_2: string;
    city: string;
    postal_code: string;
    zip4: string;
    state_code: string;
    country_code: string;
    lat_long: lat_long;
    is_active: boolean;
    delivery_point: string;
}

export class lat_long {
    latitude: number;
    longitude: number;
    accuracy: string;
}

export class phone {
    id: string;
    phone_number: string;
}

export class associated_person {
    id: string;
    name: string;
    relation: string;
}