﻿import { PropertyAttributes, Property } from './property';
////////////////////////

export const PROPERTIES: Property[] = [
    {
        propertyguid: '',
        name: 'Single Family Home',
        location: 'Crisp Park',
        address: '334 36th Ave',
        city: 'Saint Petersburg',
        state: 'FL',
        zip: '33704',
        zillow: 'https://www.zillow.com/homes/for_sale/334-36th-Ave,-Saint-Petersburg,-FL-33704-_rb/?fromHomePage=true&shouldFireSellPageImplicitClaimGA=false&fromHomePageTab=buy',
        description: 'SOLD! This beautifully renovated home sits steps away from the water and popular Crisp Park, which has access to a public boat ramp. An open floor plan invites you into this stylish home. Beautiful new bamboo floors throughout, brand new kitchen featuring stainless steel appliances, real wood cabinets, granite countertops with decorative glass and metal backsplash. You will notice ceramic tile along with custom inlays, decorative tile, brand new vanities with granite countertops and new commodes in both bathrooms. Freshly painted inside and out, new interior doors, new lighting throughout, new 30-year dimensional shingle roof, new water heater, all windows have been upgraded to the new low-E standard with storm shutters, new HVAC air handler and condenser and even a new garage door with opener. Large creened back porch off of garage with alley access. All work was permitted and done by licensed contractors. Remodeled home in a prime location. 10 minutes to downtown St. Pete.',
        masterimage: 'IMG_2.jpg',
        images: ['IMG_1.jpg', 'IMG_3.jpg', 'IMG_4.jpg', 'IMG_5.jpg', 'IMG_6.jpg'],
        propertyattributes: [
            { key: 'rooms', value: '3' },
            { key: 'baths', value: '2' },
            { key: 'sq ft', value: '1101' },
        ],
    },
    {
        propertyguid: '',
        name: 'Multi Family Home',
        location: 'River Oaks',
        address: '8514 Briar Grove Cir',
        city: 'Tampa',
        state: 'FL',
        zip: '33615',
        zillow: 'https://www.zillow.com/homes/for_sale/8514-Briar-Grove-Cir,-Tampa,-FL-33615-_rb/?fromHomePage=true&shouldFireSellPageImplicitClaimGA=false&fromHomePageTab=buy',
        description: 'SOLD',
        masterimage: 'IMG_2458.jpg',
        images: ['IMG_2461.jpg', 'IMG_2462.jpg', 'IMG_2463.jpg', 'IMG_2464.jpg', 'IMG_2467.jpg'],
        propertyattributes: [
            { key: 'rooms', value: '3' },
            { key: 'baths', value: '1' },
            { key: 'sq ft', value: '1056' },
        ],
    },
    {
        propertyguid: '',
        name: 'Single Family Home',
        location: 'Clearwater',
        address: '1800 Magnolia Dr.',
        city: 'Clearwater',
        state: 'FL',
        zip: '33764',
        zillow: 'https://www.zillow.com/homes/1800-Magnolia-Dr.,-Clearwater,-FL-33764-_rb/',
        description: 'SOLD! Just minutes from shopping, restaurants, and Clearwater Beach, this exquisite home feels like you stepped into true Florida living. Natural light soars through this house making it bright & airy. Fabulous layout with all the right spaces-entertain in either the living room or the Florida room; cook for 2 or 20 in the well-appointed kitchen; or take the gathering outdoors to your secluded backyard. Relax & unwind in the master suite whether it is reading a book or taking a shower in spa inspired master bath. Impressive upgrades make this the perfect family home. Plenty of room to store your RV/boat/recreational vehicle in the fenced-in backyard.',
        masterimage: 'IMG_0.jpg',
        images: ['IMG_01.jpg', 'IMG_02.jpg', 'IMG_03.jpg'],
        propertyattributes: [
            { key: 'rooms', value: '3' },
            { key: 'baths', value: '3' },
            { key: 'sq ft', value: '1658' },
        ],
    },
    {
        propertyguid: '',
        name: 'Single Family Home',
        location: 'Northwest Tampa',
        address: '2907 W Dewey St'        city: 'Tampa',
        state: 'FL',
        zip: '33607',
        zillow: 'https://www.zillow.com/homes/2907-W-Dewey-St,-Tampa,-FL-33607_rb/',
        description: 'This sleek & modern remodeled home is located in a well-established neighborhood and is conveniently located just minutes away from Downtown Tampa, South Tampa, International Plaza and Westshore Malls, Raymond James Stadium, Tampa International Airport, I-275, and St. Josephs Hospital.Stepping inside the front door your are graced by soaring ceilings and ornate crown molding.Beautiful new laminate floors throughout, brand new kitchen featuring Stainless Steel appliances, real wood cabinets, Granite countertops with decorative glass & metal backsplash. The master suite has its own private bath plus a huge walk-in closet, All three bathrooms boast new ceramic tile along with custom inlays, decorative tile, brand new vanities with Granite countertops and new commodes. Freshly painted inside and out, new interior doors, new lighting & ceiling fans throughout. Outdoor entertaining is a breeze on the covered patio (there is also an uncovered patio).',
        masterimage: 'IMG_9.jpg',
        images: ['IMG_8.jpg', 'IMG_10.jpg', 'IMG_11.jpg'],
        propertyattributes: [
            { key: 'rooms', value: '3' },
            { key: 'baths', value: '3' },
            { key: 'sq ft', value: '1380' },
        ],
    },
    {
        propertyguid: '',
        name: 'Single Family Home',
        location: 'Beach Park',
        address: '116 S Lauber Way',
        city: 'Tampa',
        state: 'FL',
        zip: '33609',
        zillow: 'https://www.zillow.com/homes/116-S-Lauber-Way,-Tampa,-FL-33609-_rb/',
        description: 'Single family home built in 1959.',
        masterimage: 'IMG_45.jpg',
        images: ['IMG_46.jpg', 'IMG_47.jpg', 'IMG_48.jpg'],
        propertyattributes: [
            { key: 'rooms', value: '4' },
            { key: 'baths', value: '2' },
            { key: 'sq ft', value: '1877' },
        ],
    },
    {
        propertyguid: '',
        name: 'Single Family Home',
        location: 'Madeira Beach',
        address: '14052 Vivian Dr.',
        city: 'Madiera Beach',
        state: 'FL',
        zip: '33708',
        zillow: 'https://www.zillow.com/homes/14052-Vivian-Dr.,-Madiera-Beach,-FL-33708-_rb/',
        description: 'SOLD! Remarkable value, unbeatable location to build your dream home in Madeira Beach. Just 2 blocks to the Gulf of Mexicos pristine beaches, restaurants, Johns Pass Village and a beautiful new multi-million dollar project coming soon that will put our Island on the map.',
        masterimage: 'IMG_0474.jpg',
        images: ['IMG_0473.jpg'],
        propertyattributes: [
            { key: 'rooms', value: '2' },
            { key: 'baths', value: '1' },
            { key: 'sq ft', value: '780' },
        ],
    },
    {
        propertyguid: '',
        name: 'Single Family Home',
        location: 'Wellswood and Hillsborough River
        address: '4038 N Riverwood Ave',
        city: 'Tampa,',
        state: 'FL',
        zip: '33607',
        zillow: 'https://www.zillow.com/homedetails/4038-N-River-View-Ave-Tampa-FL-33607/45044423_zpid/',
        description: 'Hme located in the sought after Wellswood section of Tampa, blocks from the Hillsborough River/Close to city it is being totally rehabed from floor to roof evertyhing brand new.
        masterimage: 'IMG_0864.JPG',
        images: [ ,
        propertyattributes: [
            { key: 'Structure Type ', value: 'Contemporary' },
            { key: 'Last Remodel', value: '2017
            { key: 'Bedrooms', value: '5' } ),
            { key: 'Sq Ft', value: '3010 ,
            { key: 'total rooms', value: '14' },
            { key: 'Lot Size', value: '9,750 Sq Ft' },
            { key: 'Sale Price', value: 'open' ,
        ],
    },
    {
        propertyguid: '',
        name: 'Single Family Home',
        location: 'Brandon',
        address: '1001 Calumet Way',
        city: 'Brandon',
        state: 'FL',
        zip: '33511',
        zillow: 'https://www.zillow.com/homes/1001-Calumet-Way,-Brandon,-FL-33511-_rb/',
        description: ' Total remodel home Brandon maintained community. Located off Kings Rd. and minutes away from Hwy. 60, I-75, Hwy 301 and the crosstown Expressway.  Pull into your end covered parking spot then walk  50ft to your front paved patio  then enter your single story end unit villa with 2 bedrooms and 2  bathrooms, with no stairs to climb. The HOA maintains the exterior, including paint, lawn care and roof which was just replaced in March 2016. The kitchen opens to the dining/great room combo with a wood burning fireplace a sliding glass door front and the one in back opens to your rear covered screened in porch with plenty of seating space. Which overlooks a large meticulously kept POOL just 50ft from your back door. Easy in and out that’s comfort Florida style.     ',
        masterimage: 'IMG_2.jpg',
        images: ['2017 - 05 - 02 12.39.06.jpg','IMG_0567.JPG','2017-05-02 12.44.27.jpg','2017-05-02 12.53.07.jpg',' IMG_0561.JPG',' IMG_0564.JPG ]'],
        propertyattributes: [
            { key: 'Construction', value: 'Block, Stucco' },
            { key: 'Villa', value: ' End Unit, 1 Story' },
            { key: 'Bedrooms', value: '2' },
            { key: 'Bathrooms', value: '2' },
            { key: 'sq ft', value: '1078' },
            { key: 'Pets', value: 'size 16-35lbs' },
        ],
    },
    {
        propertyguid: '',
        name: 'Single Family Home',
        location: 'Tarpon Springs',
        address: '1128 Elmendorf Trace',
        city: 'Tarpon Springs',
        state: 'FL',
        zip: '34689',
        zillow: 'https://www.zillow.com/homes/1128-Elmendorf-Trace,-Tarpon-Springs,-FL-34689-_rb/',
        description: 'Fantastic 4 bedrooms, 2 bath home in family oriented neighborhood. The kitchen and living/dining rooms have tiled floors and wall to wall carpeting in all bedrooms. Mature landscaping in private fenced backyard. Close to beaches, shopping and schools makes this an even better purchase. Sold As Is. https://www.zillow.com/homedetails/1128-Elmendorf-Trce-Tarpon-Springs-FL-34689/47069052_zpid/', 
        masterimage:'Photo Apr 12, 8 45 36 AM.jpg',
        images: ['  Photo Apr 12, 8 48 14 AM.jpg','Photo Apr 12, 8 48 22 AM.jpg  ','Photo Apr 12, 8 49 04 AM.jpg ',' Photo Apr 12, 8 50 14 AM.jpg  ',' Photo Apr 12, 8 50 34 AM.jpg  ',' Photo Apr 12, 8 54 45 AM.jpg  ',' Photo Apr 12, 8 53 38 AM.jpg  ','Photo Apr 12, 8 53 53 AM.jpg '],
        propertyattributes: [
            { key: 'Structure Type ', value: 'Concrete Block' },
            { key: 'Last Remodel', value: '2015' },
            { key: 'Bedrooms', value: '4' },
            { key: 'Bathrooms', value: '2' },
            { key: 'Sq Ft', value: '1,180' },
            { key: 'total rooms', value: '10' },
            { key: 'Lot Size', value: '8,050 Sq Ft' },
            { key: 'Sale Price', value: 'inquire.' },
        ],
         {
        propertyguid: '',
        name: 'Single Family Home',
        location: '',
        address: '7103 W Creek Dr ',
        city: 'Tampa,',
        state: 'FL',
        zip: '34615',
        zillow: 'https://www.zillow.com/homes/for_sale/fsba,fsbo,new_lt/44868838_zpid/globalrelevanceex_sort/28.016678,-82.589057,28.014225,-82.592721_rect/17_zm/0_mmm/?view=public',
        description: ' is a single family home that contains 1,247 sq ft and was built in 1963. It contains 3 bedrooms and 1 bathroom.', 
        masterimage:''            
            { key: 'Structure Type ', value: 'Concrete Block' },
            { key: 'Last Remodel', 
            { key: 'Bedrooms', value: '3' },
            { key: 'Bathrooms', value: '1' },
            { key: 'Sq Ft', value: '1,247' },
            { key: 'total rooms', value: '8' },
            { key: 'Lot Size', value: '11,088 sq ft' },
            { key: 'Sale Price', value: 'inquire.' },
]
export const FEATUREDPROPERTIES: Property[] = [
    {
        propertyguid: '',
        name: 'Single Family Home',
        location: 'Crisp Park',
        address: '334 36th Ave',
        city: 'Saint Petersburg',
        state: 'FL',
        zip: '33704',
        zillow: 'https://www.zillow.com/homes/for_sale/334-36th-Ave,-Saint-Petersburg,-FL-33704-_rb/?fromHomePage=true&shouldFireSellPageImplicitClaimGA=false&fromHomePageTab=buy',
        description: 'SOLD! This beautifully renovated home sits steps away from the water and popular Crisp Park, which has access to a public boat ramp. An open floor plan invites you into this stylish home. Beautiful new bamboo floors throughout, brand new kitchen featuring stainless steel appliances, real wood cabinets, granite countertops with decorative glass and metal backsplash. You will notice ceramic tile along with custom inlays, decorative tile, brand new vanities with granite countertops and new commodes in both bathrooms. Freshly painted inside and out, new interior doors, new lighting throughout, new 30-year dimensional shingle roof, new water heater, all windows have been upgraded to the new low-E standard with storm shutters, new HVAC air handler and condenser and even a new garage door with opener. Large creened back porch off of garage with alley access. All work was permitted and done by licensed contractors. Remodeled home in a prime location. 10 minutes to downtown St. Pete.',
        masterimage: 'IMG_2.jpg',
        images: ['IMG_1.jpg', 'IMG_3.jpg', 'IMG_4.jpg', 'IMG_5.jpg', 'IMG_6.jpg'],
        propertyattributes: [
            { key: 'rooms', value: '3' },
            { key: 'baths', value: '2' },
            { key: 'sq ft', value: '1101' },
        ],
    },
    {
        propertyguid: '',
        name: 'Multi Family Home',
        location: 'River Oaks',
        address: '8514 Briar Grove Cir',
        city: 'Tampa',
        state: 'FL',
        zip: '33615',
        zillow: 'https://www.zillow.com/homes/for_sale/8514-Briar-Grove-Cir,-Tampa,-FL-33615-_rb/?fromHomePage=true&shouldFireSellPageImplicitClaimGA=false&fromHomePageTab=buy',
        description: 'SOLD',
        masterimage: 'IMG_2458.jpg',
        images: ['IMG_2461.jpg', 'IMG_2462.jpg', 'IMG_2463.jpg', 'IMG_2464.jpg', 'IMG_2467.jpg'],
        propertyattributes: [
            { key: 'rooms', value: '3' },
            { key: 'baths', value: '1' },
            { key: 'sq ft', value: '1056' },
        ],
    },
    {
        propertyguid: '',
        name: 'Single Family Home',
        location: 'Clearwater',
        address: '1800 Magnolia Dr.',
        city: 'Clearwater',
        state: 'FL',
        zip: '33764',
        zillow: 'https://www.zillow.com/homes/1800-Magnolia-Dr.,-Clearwater,-FL-33764-_rb/',
        description: 'SOLD! Just minutes from shopping, restaurants, and Clearwater Beach, this exquisite home feels like you stepped into true Florida living. Natural light soars through this house making it bright & airy. Fabulous layout with all the right spaces-entertain in either the living room or the Florida room; cook for 2 or 20 in the well-appointed kitchen; or take the gathering outdoors to your secluded backyard. Relax & unwind in the master suite whether it is reading a book or taking a shower in spa inspired master bath. Impressive upgrades make this the perfect family home. Plenty of room to store your RV/boat/recreational vehicle in the fenced-in backyard.',
        masterimage: 'IMG_0.jpg',
        images: ['IMG_01.jpg', 'IMG_02.jpg', 'IMG_03.jpg'],
        propertyattributes: [
            { key: 'rooms', value: '3' },
            { key: 'baths', value: '3' },
            { key: 'sq ft', value: '1658' },
        ],
    },
         
]



////////////////////////////////////////////////
//export const PROPERTIES: Property[] = [

//    {
//        propertyguid: '',
//        name: 'Single Family Home',
//        location: 'Crisp Park',
//        address: '334 36th Ave',
//        city: 'Saint Petersburg',
//        state: 'FL',
//        zip: '33704',
//        description: 'This beautifully renovated home sits steps away from the water and popular Crisp Park, which has access to a public boat ramp. An open floor plan invites you into this stylish home. Beautiful new bamboo floors throughout, brand new kitchen featuring stainless steel appliances, real wood cabinets, granite countertops with decorative glass and metal backsplash. You will notice ceramic tile along with custom inlays, decorative tile, brand new vanities with granite countertops and new commodes in both bathrooms. Freshly painted inside and out, new interior doors, new lighting throughout, new 30-year dimensional shingle roof, new water heater, all windows have been upgraded to the new low-E standard with storm shutters, new HVAC air handler and condenser and even a new garage door with opener. Large creened back porch off of garage with alley access. All work was permitted and done by licensed contractors. Remodeled home in a prime location. 10 minutes to downtown St. Pete.',
//        masterimage: 'IMG_2.jpg',
//        images: ['IMG_1.jpg', 'IMG_3.jpg', 'IMG_4.jpg', 'IMG_5.jpg', 'IMG_6.jpg'],
//        propertyattributes: [
//            { key: 'rooms', value: '3' },
//            { key: 'baths', value: '2' },
//            { key: 'sq ft', value: '1101' },
//        ],
//    },
//    {
//        propertyguid: '',
//        name: 'Multi Family Home',
//        location: 'River Oaks',
//        address: '8514 Briar Grove Cir',
//        city: 'Tampa',
//        state: 'FL',
//        zip: '33615',
//        description: '',
//        masterimage: 'IMG_2458.jpg',
//        images: ['IMG_2461.jpg', 'IMG_2462.jpg', 'IMG_2463.jpg', 'IMG_2464.jpg', 'IMG_2467.jpg'],
//        propertyattributes: [
//            { key: 'rooms', value: '3' },
//            { key: 'baths', value: '1' },
//            { key: 'sq ft', value: '1056' },
//        ],
//    },
//    {
//        propertyguid: '',
//        name: 'Single Family Home',
//        location: 'Clearwater',
//        address: '1800 Magnolia Dr.',
//        city: 'Clearwater',
//        state: 'FL',
//        zip: '33764',
//        description: 'Just minutes from shopping, restaurants, and Clearwater Beach, this exquisite home feels like you stepped into true Florida living. Natural light soars through this house making it bright & airy. Fabulous layout with all the right spaces-entertain in either the living room or the Florida room; cook for 2 or 20 in the well-appointed kitchen; or take the gathering outdoors to your secluded backyard. Relax & unwind in the master suite whether it is reading a book or taking a shower in spa inspired master bath. Impressive upgrades make this the perfect family home. Plenty of room to store your RV/boat/recreational vehicle in the fenced-in backyard.',
//        masterimage: 'IMG_0.jpg',
//        images: ['IMG_01.jpg', 'IMG_02.jpg', 'IMG_03.jpg'],
//        propertyattributes: [
//                { key: 'rooms', value: '3' },
//                { key: 'baths', value: '3' },
//                { key: 'sq ft', value: '1658' },
//            ],
//    },
//    {
//        propertyguid: '',
//        name: 'Single Family Home',
//        location: 'Northwest Tampa',
//        address: '2907 W Dewey St',
//        city: 'Tampa',
//        state: 'FL',
//        zip: '33607',
//        description: 'This sleek & modern remodeled home is located in a well-established neighborhood and is conveniently located just minutes away from Downtown Tampa, South Tampa, International Plaza and Westshore Malls, Raymond James Stadium, Tampa International Airport, I-275, and St. Josephs Hospital.Stepping inside the front door your are graced by soaring ceilings and ornate crown molding.Beautiful new laminate floors throughout, brand new kitchen featuring Stainless Steel appliances, real wood cabinets, Granite countertops with decorative glass & metal backsplash. The master suite has its own private bath plus a huge walk-in closet, All three bathrooms boast new ceramic tile along with custom inlays, decorative tile, brand new vanities with Granite countertops and new commodes. Freshly painted inside and out, new interior doors, new lighting & ceiling fans throughout. Outdoor entertaining is a breeze on the covered patio (there is also an uncovered patio).', 
//        masterimage: 'IMG_9.jpg',
//        images: ['IMG_8.jpg', 'IMG_10.jpg', 'IMG_11.jpg'],
//        propertyattributes: [
//                { key: 'rooms', value: '3' },
//                { key: 'baths', value: '3' },
//                { key: 'sq ft', value: '1380' },
//            ],
//    },
//    {
//        propertyguid: '',
//        name: 'Single Family Home',
//        location: 'Beach Park',
//        address: '116 S Lauber Way',
//        city: 'Tampa',
//        state: 'FL',
//        zip: '33609',
//        description: 'Single family home built in 1959.',
//        masterimage: 'IMG_45.jpg',
//        images: ['IMG_46.jpg', 'IMG_47.jpg', 'IMG_48.jpg'],
//        propertyattributes: [
//                { key: 'rooms', value: '4' },
//                { key: 'baths', value: '2' },
//                { key: 'sq ft', value: '1877' },
//            ],
//    },

//    {
//        propertyguid: '',
//        name: 'Single Family Home',
//        location: 'Madeira Beach',
//        address: '14052 Vivian Dr.',
//        city: 'Madiera Beach',
//        state: 'FL',
//        zip: '33708',
//        description: 'Remarkable value, unbeatable location to build your dream home in Madeira Beach. Just 2 blocks to the Gulf of Mexicos pristine beaches, restaurants, Johns Pass Village and a beautiful new multi-million dollar project coming soon that will put our Island on the map.', 
//        masterimage: 'IMG_0474.jpg',
//        images: ['IMG_0473.jpg'],
//        propertyattributes: [
//            { key: 'rooms', value: '2' },
//            { key: 'baths', value: '1' },
//            { key: 'sq ft', value: '780' },
//        ],
//    },
//]
