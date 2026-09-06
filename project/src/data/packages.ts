import type { Package } from '@/types';

export const packages: Package[] = [
  {
    id: '1',
    slug: 'munnar-3-days',
    title: 'Munnar Hills Retreat',
    destination: 'Munnar, Kerala',
    destinationSlug: 'munnar',
    duration: '2 Days / 1 Nights',
    durationDays: 3,
    price: 4999,
    category: 'Family',
    image: 'https://images.pexels.com/photos/36623929/pexels-photo-36623929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Rolling tea plantations, misty mountains, and cool breezes in Kerala\'s most beloved hill station.',
    longDescription:
      'Nestled in the Western Ghats, Munnar is a paradise of emerald tea gardens, cascading waterfalls, and crisp mountain air. This 2-day retreat takes you through the heart of this hill station, from sunrise viewpoints to spice plantations, with comfortable accommodation and expert local guides.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Sightseeing', 'Tour Guide', 'Support'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Munnar Sightseeing',
        description:
          'Our Munnar trip begins with a convenient pickup from the starting point. After breakfast on the way, we enjoy a scenic journey through the beautiful Western Ghats. Along the route, we stop at the refreshing Cheeyappara Waterfalls and Valara Waterfalls before continuing towards Munnar Once we reach Munnar, we check in at the hotel, freshen up, and have lunch. In the afternoon, we explore some of Munnar s most beautiful spots, including Mattupetty Dam, Mattupetty Lake, Echo Point, Kundala Lake, and the surrounding tea plantations. Boating at Mattupetty Lake can also be enjoyed as an optional activity. By evening, we return to the hotel and have some free time to relax or explore Munnar town. After dinner, we settle in for an overnight stay in Munnar.',
      },
      {
        day: 2,
        title: 'Munnar Local Tour & Departure',
        description:
          'After breakfast at the hotel, we check out and continue exploring Munnar. Our day includes visits to a Tea Museum or Tea Factory, Tea Gardens, Photo Point, and Blossom Park.After lunch, we may visit Top Station, depending on the available time and road conditions. We then spend some time shopping and exploring Munnar town before beginning our return journey.In the evening, we have dinner on the way and continue our journey back to the starting point, bringing the trip to a memorable end.',
      },
    ],
    inclusions: [
      'Transportation throughout the trip',
      'Daily breakfast and dinner',
      '1 night accommodation',
      'Tour coordinator/guide',
      'All sightseeing as per itinerary',
      'Toll, parking, and fuel charges',
    ],
    exclusions: [
      'Snacks and beverages',
      'Any additional activities or services not mentioned in the itinerary',
      'Any expenses arising due to personal reasons',
      'Travel insurance',
      'Anything not mentioned in inclusions',
    ],
    gallery: [
      'https://images.pexels.com/photos/36623929/pexels-photo-36623929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/3848200/pexels-photo-3848200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/37633371/pexels-photo-37633371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/29023410/pexels-photo-29023410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/36982207/pexels-photo-36982207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/392100/pexels-photo-392100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    importantInfo: {
      travelRequirements: 'Valid government-issued photo ID required for hotel check-in.',
      reportingInfo: 'Please report 15 minutes before departure time at the designated pickup point.',
      cancellation: 'Cancellation 15+ days before: 80% refund. 7-14 days: 50% refund. Less than 7 days: no refund.',
      terms: 'The itinerary may be subject to change depending on weather, traffic, road conditions, and other unforeseen circumstances. Travelers are requested to follow the timings and instructions provided by the tour coordinator throughout the trip.',
    },
    featured: true,
  },
  {
    id: '2',
    slug: 'wayanad-wilderness-2-days',
    title: 'Wayanad Wilderness Escape',
    destination: 'Wayanad, Kerala',
    destinationSlug: 'wayanad',
    duration: '2 Days / 3 Night',
    durationDays: 2,
    price: 4800,
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/16573093/pexels-photo-16573093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Dense forests, wildlife sanctuaries, and ancient caves in Kerala\'s wildest district.',
    longDescription:
      'Wayanad is a land of lush forests, misty mountains, and rich wildlife. This adventure-packed weekend takes you through the Edakkal Caves, Soochipara Waterfalls, and the Muthanga Wildlife Sanctuary, where you can spot elephants, deer, and exotic birds in their natural habitat.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Sightseeing', 'Activities', 'Tour Guide'],
    itinerary: [
      {
        day: 1,
        title: 'Journey to Wayanad',
        description:
          'Start the journey at 5:00 PM and travel overnight to Wayanad.',
      },
      {
        day: 2,
        title: 'Wayanad Exploration',
        description:
          'Start the day with freshening up and breakfast, followed by a visit to Kuruva Island. After lunch, explore Banasura Sagar Dam and Meenmutty Falls. In the evening, enjoy a campfire and DJ night, followed by dinner and an overnight stay.',
      },
      {
        day: 3,
        title: 'Wayanad Highlights & Return Journey',
        description:
          'Start the day with breakfast and a visit to Edakkal Caves. After lunch, explore Karappuzha Dam before having dinner and beginning the journey back to college for drop-off.',
      },
    ],
    inclusions: [
      'Transportation throughout the trip',
      'Accommodation with breakfast and dinner',
      'Private AC vehicle for transfers',
      'Lunch as per itinerary',
      'Campfire & DJ',
      'Sightseeing as per itinerary',
    ],
    exclusions: [
      'Personal expenses',
      'Snacks and beverages',
      'Activities not mentioned in the itinerary',
      'Anything not mentioned in inclusions',
    ],
    gallery: [
      '/images/p wayanad/way1.jpeg',
      '/images/p wayanad/way2.jpeg',
      '/images/p wayanad/way3.jpeg',
      '/images/p wayanad/way4.jpeg',
      '/images/p wayanad/way5.jpeg',
      '/images/p wayanad/way6.jpeg',
    ],
    importantInfo: {
      travelRequirements: 'Valid government-issued photo ID required.',
      reportingInfo: 'Wear comfortable walking shoes for cave trek.',
      cancellation: 'Cancellation 15+ days before: 80% refund. 7-14 days: 50% refund. Less than 7 days: no refund.',
      terms: 'Wildlife sightings are not guaranteed and depend on natural conditions.',
    },
    featured: true,
  },
  {
    id: '3',
    slug: 'goa-4-days',
    title: 'Goa',
    destination: 'Goa',
    destinationSlug: 'goa',
    duration: '4 Days / 3 Nights',
    durationDays: 4,
    price: 6800,
    category: 'Corporate',
    image: 'https://images.pexels.com/photos/8037061/pexels-photo-8037061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Sun-kissed beaches, vibrant nightlife, and Portuguese heritage in India\'s party capital.',
    longDescription:
      'Goa is where relaxation meets excitement. From the golden sands of Palolem to the historic churches of Old Goa, this 4-day package blends beach leisure with cultural exploration. Enjoy water sports, beach shacks, and the famous Goan cuisine.',
    highlights: ['Accommodation', 'Train / other Transportation', 'Meals', 'Sightseeing', 'Activities', 'Support'],
    itinerary: [
      {
        day: 1,
        title: 'Journey to Goa',
        description:
          'Start the trip at 7:30 AM and begin the journey to Goa. Enjoy lunch and dinner along the way before continuing the overnight journey.',
      },
      {
        day: 2,
        title: 'Goa Sightseeing & Nightlife',
        description:
          'Reach Goa in the morning, freshen up and have breakfast before starting the sightseeing. Visit Aguada Fort and Sinquerim Beach, followed by lunch. Continue to Old Goa Church, Calangute Beach and Baga Beach, where you can enjoy the lively nightlife. End the day with a comfortable stay at an AC pool property.',
      },
      {
        day: 3,
        title: 'Free Day & Return Journey',
        description:
          'Start the day with freshening up and breakfast, then enjoy a free day in Goa at your own pace. Lunch will be on your own. After dinner, begin the journey back to your hometown.',
      },
      {
        day: 4,
        title: 'Journey Back Home',
        description: 'Freshen up and have breakfast during the journey. Continue the journey with lunch along the way and reach your hometown at night.',
      },
    ],
    inclusions: [
      'Transportation throughout the trip',
      'Goa sightseeing as mentioned in the itinerary',
      'Overnight stay at an AC pool property on Day 2',
      'All sightseeing as per itinerary',
      'Return transportation to hometown',
      'Toll, parking, and fuel',
    ],
    exclusions: [
      'Activities or services not mentioned in the itinerary',
      'Lunch, dinner, and personal expenses',
      'Water sports activities',
      'Entry tickets to monuments',
      'Travel insurance',
    ],
    gallery: [
      'https://images.pexels.com/photos/8037061/pexels-photo-8037061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14581330/pexels-photo-14581330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/32262464/pexels-photo-32262464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/39182453/pexels-photo-39182453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/27667777/pexels-photo-27667777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/13243352/pexels-photo-13243352.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    importantInfo: {
      travelRequirements: 'Valid government-issued photo ID required for hotel check-in.',
      reportingInfo: 'Please report at the designated pickup point 15 minutes before departure.',
      cancellation: 'Cancellation 15+ days before: 80% refund. 7-14 days: 50% refund. Less than 7 days: no refund.',
      terms: 'The itinerary is subject to change depending on weather, traffic, and other operational conditions. Guests are requested to follow the scheduled timings and instructions provided by the tour coordinator. Any services or expenses not mentioned under the package inclusions are excluded.',
    },
    featured: true,
  },
  {
    id: '4',
    slug: 'Trivandrum',
    title: 'Trivandrum',
    destination: 'Trivandrum, Kerala',
    destinationSlug: 'Kerala',
    duration: '1 Days',
    durationDays: 1,
    price: 1200,
    category: 'Weekend',
    image: 'https://images.pexels.com/photos/18758350/pexels-photo-18758350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Explore the best of Trivandrum in a fun-filled one-day getaway!',
    longDescription:
      'One-Day Trivandrum Package covering Neyyar Dam, Trivandrum Zoo or Priyadarshini Planetarium, Napier Museum, and Kovalam or Lulu Mall.',
    highlights: ['Transportation', 'Meals', 'Sightseeing', 'Tour Guide', 'Activities'],
    itinerary: [
      {
        day: 1,
        title: 'A Day of Exploring Trivandrum',
        description:
          'Experience Trivandrum’s top attractions, from the scenic Neyyar Dam to the city’s cultural landmarks and the beautiful Kovalam coast, all in one memorable day.',
      },
    ],
    inclusions: [
      'Transportation throughout the trip',
      'Driver charges, fuel & tolls',
      'Pickup and drop-off',
      'Sightseeing as per itinerary',
      'Parking charges',
    ],
    exclusions: [
      'Entry fees to attractions',
      'Personal expenses',
      'Anything not mentioned under inclusions',
      'Travel insurance',
    ],
    gallery: [
      '/images/p tvm/tvm1.jpeg',
      '/images/p tvm/tvm2.jpeg',
      '/images/p tvm/tvm4.jpeg',
      '/images/p tvm/tvm3.jpeg',
      '/images/p tvm/tvm5.jpeg',
    ],
    importantInfo: {
      travelRequirements: 'Valid government-issued photo ID required. Inner line permit may be needed for certain areas.',
      reportingInfo: 'Please report 15 minutes before departure time.',
      cancellation: 'Cancellation 15+ days before: 80% refund. 7-14 days: 50% refund. Less than 7 days: no refund.',
      terms: 'Package itinerary is subject to change based on weather, traffic, operational conditions, and availability. Entry fees, personal expenses, and services not mentioned in the inclusions are excluded. Guests are requested to follow the scheduled timings and instructions provided by the tour coordinator.',
    },
    featured: true,
  },
  {
    id: '5',
    slug: 'Vagamon-1-days',
    title: 'Vagamon Scenic Escape',
    destination: 'Idukki, Kerala',
    destinationSlug: 'Kerala',
    duration: '1 Days / 0 Nights',
    durationDays: 1,
    price: 2600,
    category: 'Students',
    image: 'https://images.pexels.com/photos/31836726/pexels-photo-31836726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Peaceful hill destination filled with misty mountains, green meadows, and beautiful views.',
    longDescription:
      'Take a refreshing break from the routine and enjoy a day surrounded by the beauty of Vagamon. Explore the peaceful meadows, walk through the pine forest, enjoy the scenic views at Kolahalamed and Parunthumpara, and make memories along the way.',
    highlights: ['Transportation', 'Meals', 'Sightseeing', 'Tour Guide', 'Activities'],
    itinerary: [
      {
        day: 1,
        title: 'Vagamon & Parunthumpara Exploration',
        description:
          'Start the day at 5:30 AM and enjoy breakfast before exploring Vagamon Meadows and Pine Forest. After lunch, visit Kolahalamed and Parunthumpara, followed by dinner and the return journey.',
      },
    ],
    inclusions: [
      'Transportation throughout the trip',
      'Pickup and drop-off',
      'Driver charges, fuel & tolls',
      'Breakfast and dinner',
      'Sightseeing as per itinerary',
      'Parking charges',
    ],
    exclusions: [
      'Entry fees to tourist attractions',
      'Snacks and beverages',
      'Personal expenses',
      'Optional activities',
      'Activities not mentioned in the itinerary',
      'Travel insurance',
    ],
    gallery: [
      '/images/p wagamon/wag1.jpeg',
      '/images/p wagamon/wag2.jpeg',
      '/images/p wagamon/wag3.jpeg',
      '/images/p wagamon/wag4.jpeg',
      '/images/p wagamon/wag5.jpeg',
    ],
    importantInfo: {
      travelRequirements: 'Valid government-issued photo ID required for hotel check-in.',
      reportingInfo: 'Please report 15 minutes before departure time.',
      cancellation: 'Cancellation 15+ days before: 80% refund. 7-14 days: 50% refund. Less than 7 days: no refund.',
      terms: 'The itinerary is subject to change depending on weather, traffic, and other operational conditions. Guests are requested to follow the scheduled timings and instructions provided by the tour coordinator. Entry fees, personal expenses, and services not mentioned under inclusions are excluded.',
    },
    featured: true,
  },
  {
    id: '6',
    slug: 'ooty-queen-of-hills-3-days',
    title: 'Coorg – Mysore – Ooty',
    destination: 'coorg, mysore, Ooty Tamil Nadu',
    destinationSlug: 'ooty',
    duration: '3 Days / 4 Nights',
    durationDays: 3,
    price: 4100,
    category: 'Student',
    image: 'https://images.pexels.com/photos/9411142/pexels-photo-9411142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Experience the charm of coffee hills, royal palaces, and beautiful mountain landscapes.',
    longDescription:
      'Ooty, the Queen of Hill Stations, offers a perfect weekend escape with its cool climate, botanical gardens, and the heritage Nilgiri Mountain Railway. This package includes a ride on the famous toy train, visits to tea estates, and serene lake-side evenings.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Sightseeing', 'Tour Guide'],
    itinerary: [
      {
        day: 1,
        title: 'Journey to Coorg',
        description:
          'Our trip begins in the evening as everyone gathers at the college. Once we are ready, we set off towards Coorg. The journey will be filled with music, games, fun, and plenty of time to bond with the group We will have dinner on the way, which will be self-paid, and continue our overnight journey to Coorg.',
      },
      {
        day: 2,
        title: 'Exploring Coorg',
        description:
          'We reach Coorg in the morning and check in at the resort. After freshening up and having breakfast, we head out to explore the beauty of Coorg. We will visit the Bamboo Forest, enjoy lunch, and then head to Harangi Dam. Later, we will visit the beautiful Golden Temple and spend some relaxing time by the pool. After a fun-filled day, we will have dinner and stay overnight at the resort.',
      },
      {
        day: 3,
        title: 'Discovering Mysore',
        description:
          'We start our morning in Coorg with breakfast before heading towards Mysore. Once we reach Mysore, we will visit the famous Mysore Zoo and stop for lunch. Later, we will explore the magnificent Mysore Palace and enjoy a visit to Brindavan Gardens. In the evening, its time to relax and have some fun with a DJ and campfire. After dinner, we will settle in for the night.',
      },
      {
        day: 4,
        title: 'Ooty Bound',
        description:
          'After breakfast, we leave Mysore early in the morning and begin our journey to Ooty. We will have breakfast along the way and, depending on the available time, stop at the Pine Forest and Shooting Point. After reaching Ooty, we will visit a tea factory and enjoy lunch. Later, we will explore the beautiful Ooty Lake and Botanical Garden. In the evening, we start our return journey and have dinner on the way.',
      },
      {
        day: 5,
        title: 'Back Home',
        description:
        'After an amazing five days of travelling, exploring, laughing, and making memories together, we head back home with lots of stories and unforgettable moments to take with us.'
      },
    ],
    inclusions: [
      'Transportation throughout the trip',
      'Accommodation at selected resorts/hotels',
      'Breakfast and dinner as mentioned in the itinerary',
      'Lunch as mentioned in the itinerary',
      'Resort pool access',
      'DJ and campfire experience',
      'All toll and parking',
    ],
    exclusions: [
      'Food or meals not mentioned in the itinerary',
      'Adventure activities or activities not mentioned in the package',
      'Any additional transportation outside the planned itinerary',
      'Travel insurance',
    ],
    gallery: [
      'https://images.pexels.com/photos/9411142/pexels-photo-9411142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9411137/pexels-photo-9411137.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/25946627/pexels-photo-25946627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9411180/pexels-photo-9411180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/5213208/pexels-photo-5213208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    importantInfo: {
      travelRequirements: 'Valid government-issued photo ID required.',
      reportingInfo: 'Please report 15 minutes before departure time.',
      cancellation: 'Cancellation 15+ days before: 80% refund. 7-14 days: 50% refund. Less than 7 days: no refund.',
      terms: 'The itinerary may be subject to change depending on weather, traffic, road conditions, and other unforeseen circumstances. Travelers are requested to follow the instructions and timings provided by the tour coordinator throughout the trip.',
    },
    featured: false,
  },
  {
    id: '7',
    slug: 'Kodaikanal-4-days',
    title: 'Kodaikanal & Cumbum Escape',
    destination: 'Alleppey, Kerala',
    destinationSlug: 'kerala',
    duration: '4 Days / 3 Nights',
    durationDays: 4,
    price: 4900,
    category: 'Student',
    image: 'https://images.pexels.com/photos/17928231/pexels-photo-17928231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Discover crystal-clear lakes, rolling valleys, vibrant plantations, and refreshing mountain escapes.',
    longDescription:
      'Experience the magic of Kerala\'s backwaters on a traditional houseboat. Glide through palm-fringed canals, watch village life unfold along the banks, and enjoy freshly prepared Keralan cuisine. This honeymoon-special package includes a sunset cruise, Ayurvedic spa treatment, and a Kathakali performance.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Sightseeing', 'Activities', 'Support'],
    itinerary: [
      {
        day: 1,
        title: 'Kodaikanal Exploration',
        description:
          'Depart at 10:00 PM and travel to Kodaikanal. After freshening up and breakfast, explore Pillar Rocks, Guna Cave, Pine Forest and Suicide Point. Enjoy lunch before visiting the lake. End the day with a campfire, dinner and a comfortable stay.',
      },
      {
        day: 2,
        title: 'Cumbum Experience & Return',
        description:
          'Start the day with breakfast and proceed to Cumbum. Enjoy lunch before visiting the Cumbum grape farm. After the visit, begin the return journey and reach by approximately 10:00 PM.',
      },
    ],
    inclusions: [
      'Unlimited buffet meals',
      '3-star accommodation',
      'Travel expenses',
      'Unlimited drinking water',
      'All entry passes',
    ],
    exclusions: [
      'Personal expenses',
      'Activities or services not mentioned in the package',
      'Any expenses arising due to changes in the itinerary',
      'Anything not mentioned under Package Inclusions',
      'Travel insurance',
    ],
    gallery: [
      'https://images.pexels.com/photos/17928231/pexels-photo-17928231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/28890056/pexels-photo-28890056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/35152825/pexels-photo-35152825.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/15308719/pexels-photo-15308719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/31746351/pexels-photo-31746351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    importantInfo: {
      travelRequirements: 'Valid government-issued photo ID required for check-in.',
      reportingInfo: 'Houseboat check-in at 12:00 PM, check-out at 9:00 AM.',
      cancellation: 'Cancellation 15+ days before: 80% refund. 7-14 days: 50% refund. Less than 7 days: no refund.',
      terms: 'Houseboat routing depends on backwater water levels and Kerala government regulations.',
    },
    featured: true,
  },
  {
    id: '8',
    slug: 'Chikamanglore goa-5-days',
    title: 'Goa, Chikamanglore',
    destination: 'Coorg, Belur, Chikkamaglore & Goa',
    destinationSlug: 'Goa',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    price: 9700,
    category: 'Student',
    image: 'https://images.pexels.com/photos/29494184/pexels-photo-29494184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Hills, heritage, nature, and unforgettable memories in one amazing journey.',
    longDescription:
      'For the adventure seeker, this 7-day expedition covers the best of Himachal Pradesh — from the pine valleys of Manali to the high-altitude Rohtang Pass. Includes river rafting on the Beas, trekking to Jogini Falls, and a drive through dramatic mountain landscapes.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Activities', 'Tour Guide', 'Support'],
    itinerary: [
      {
        day: 1,
        title: 'Exploring Coorg',
        description:
          'Depart at 7:00 PM and travel towards Coorg. After freshening up and breakfast, visit Golden Temple, followed by lunch. Continue exploring Bamboo Forest and Harangi Dam before enjoying dinner and an overnight stay.',
      },
      {
        day: 2,
        title: 'Belur & Water Activities',
        description:
          'Start early and proceed to Belur. Enjoy breakfast at Hassan during the journey, then visit the historic Chennakeshava Temple. After lunch, enjoy exciting water activities including kayaking, banana ride and rafting. Later, proceed to Chikkamagaluru for dinner and an overnight stay.',
      },
      {
        day: 3,
        title: 'Chikkamagaluru Adventure',
        description:
          'After breakfast, begin the day with a jeep trek covering Seethalayangiri, Mullayangiri, Kavikkalgandi Check Post, Honnamana Falls, Baba Budangiri, Z Point and Siri Statue. After lunch, continue the sightseeing before dinner and begin the overnight journey to Goa.',
      },
      {
        day: 4,
        title: 'Goa Sightseeing & Night Stay',
        description:
          'Reach Goa and freshen up before breakfast. Visit Old Goa Church and Aguada Fort, followed by lunch. Continue to Calangute Beach and enjoy a DJ night before dinner and a comfortable stay at a pool property.',
      },
      {
        day: 5,
        title: 'Goa Beaches & Nightlife',
        description:
          'After breakfast, visit Anjuna Beach and enjoy lunch before exploring Candolim Beach. End the Goa experience at Baga Beach and enjoy its lively nightlife. After dinner, begin the return journey.',
      },
      {
        day: 6,
        title: 'Return Journey',
        description:
          'Enjoy breakfast during the journey and reach the destination by approximately 1:00 PM.',
      },
    ],
    inclusions: [
      'Unlimited buffet meals',
      'Daily breakfast and dinner',
      'Accommodation at 2 normal properties and 1 pool property',
      'Travel expenses',
      'Unlimited drinking water',
      'All entry passes',
    ],
    exclusions: [
      'Any meals or beverages not included in the buffet',
      'Activities or services not mentioned in the package',
      'Expenses arising from changes to the itinerary',
      'Anything not mentioned under Package Inclusions',
      'Travel insurance',
    ],
    gallery: [
      'https://images.pexels.com/photos/29494184/pexels-photo-29494184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/944157/pexels-photo-944157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/32261662/pexels-photo-32261662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/37835744/pexels-photo-37835744.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8514722/pexels-photo-8514722.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9150857/pexels-photo-9150857.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    importantInfo: {
      travelRequirements: 'Valid government-issued photo ID required. Rohtang Pass permit needed (arranged on request).',
      reportingInfo: 'Participants should have moderate fitness for trekking activities.',
      cancellation: 'Cancellation 15+ days before: 80% refund. 7-14 days: 50% refund. Less than 7 days: no refund.',
      terms: 'Adventure activities are subject to weather conditions. Rohtang Pass is subject to permit availability.',
    },
    featured: false,
  },
  {
    id: '9',
    slug: 'coorg-coffee-trail-2-days',
    title: 'Kochi',
    destination: 'Kochi, Kearala',
    destinationSlug: 'coorg',
    duration: '1 Days / 0 Night',
    durationDays: 1,
    price: 3400,
    category: 'Weekend',
    image: 'https://images.pexels.com/photos/33046721/pexels-photo-33046721.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A beautiful mix of heritage, beaches, culture, shopping, and city life.',
    longDescription:
      'Coorg (Kodagu) is Karnataka\'s coffee country — a land of rolling green hills, spice plantations, and waterfalls. This weekend getaway includes a coffee plantation tour, a visit to Abbey Falls, and the famous Namdroling Monastery.',
    highlights: ['Transportation', 'Meals', 'Sightseeing', 'Tour Guide'],
    itinerary: [
      {
        day: 1,
        title: 'Kochi One-Day Tour',
        description:
          'Our day begins with a convenient pickup, followed by breakfast before we set out to explore Kochi. We start with the historic charm of Fort Kochi and continue to Mattancherry, where we can experience the area s unique culture and heritage. After lunch, we visit the beautiful Santa Cruz Basilica Church and then head to LuLu Mall for some shopping, food, and free time. As the day comes to an end, we relax by the sea at Vypin Beach and enjoy the evening atmosphere. We then have dinner before heading back and dropping everyone off at the designated location, taking home plenty of happy memories from our day in Kochi.',
      },
    ],
    inclusions: [
      'Transportation throughout the trip',
      'Breakfast and dinner as mentioned in the itinerary',
      'Lunch as mentioned in the itinerary',
      'Sightseeing as per the itinerary',
      'Tour coordinator/support throughout the trip',
      'All toll and parking',
    ],
    exclusions: [
      'Snacks and beverages',
      'Additional activities not mentioned in the itinerary',
      'Any expenses arising due to personal reasons',
      'Anything not specifically mentioned under inclusions',
    ],
    gallery: [
      '/images/p kochi/koc1.jpeg',
      '/images/p kochi/koc2.jpeg',
      '/images/p kochi/koc3.jpeg',
      '/images/p kochi/koc4.jpeg',
      '/images/p kochi/koc5.jpeg',
      '/images/p kochi/koc6.jpeg',
      '/images/p kochi/koc7.jpeg',
      
    ],
    importantInfo: {
      travelRequirements: 'Valid government-issued photo ID required.',
      reportingInfo: 'Please report 15 minutes before departure time.',
      cancellation: 'Cancellation 15+ days before: 80% refund. 7-14 days: 50% refund. Less than 7 days: no refund.',
      terms: 'The itinerary may be subject to change due to weather, traffic, road conditions, or other unforeseen circumstances. Travelers are requested to follow the timings and instructions provided by the tour coordinator throughout the trip.',
    },
    featured: false,
  },
  {
    id: '10',
    slug: 'Chikamanglur-3-days',
    title: 'Journey to Chikamanglore, Belur, Coorg',
    destination: 'Karnataka, India',
    destinationSlug: 'Chikamanglur',
    duration: '3 Days / 4 Nights',
    durationDays: 4,
    price: 5000,
    category: 'Student',
    image: 'https://images.pexels.com/photos/9411154/pexels-photo-9411154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Misty mountains, endless coffee estates, stunning views, rich heritage, and unforgettable moments.',
    longDescription:
      'Discover Karnataka’s beauty in one incredible journey! Explore the misty hills and coffee plantations of Chikmagalur, the historic wonders of Belur, and the scenic charm of Coorg. A perfect blend of nature, heritage, adventure, and relaxation.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Sightseeing', 'Activities'],
    itinerary: [
      {
        day: 1,
        title: ' Starting trip',
        description:
          'Journey to Chikamanglur.',
      },
      {
        day: 2,
        title: 'Chikamanglur',
        description:
          'After freshening up and having breakfast, we will go for jeep trekking to explore Seethalayangiri, Mullayanagiri, Kavikkalgandi Checkpost, and Manikyadhara Waterfalls. After lunch, we will visit Baba Budangiri, followed by a walk to Z Point and a visit to the Siri Statue. We will then have dinner and stay overnight in Chikmagalur. ',
      
      },
      {
        day: 3,
        title: 'Belur',
        description:
          'Early in the morning, we will proceed to Belur and have breakfast. After that, we will enjoy adventure activities such as kayaking, banana boat riding, and rafting. After lunch, we will visit the Chennakeshava Temple and then proceed to Hassan. We will have dinner and stay overnight in Hassan.',
      },
      {
        day: 4,
        title: 'Coorg',
        description:
          'After breakfast, we will explore the Golden Temple and have lunch. We will then visit the Bamboo Forest and Harangi Dam. In the evening, we will have dinner and enjoy a DJ program.',
      
      },
      {
        day: 5,
        title: 'Return journey',
        description:
          'The trip concludes with the return journey, bringing you safely back to the designated drop-off point.',
      },
    ],
    inclusions: [
      'Accommodation for the specified duration',
      'Daily meals as mentioned in the itenary',
      'Transportation throughout the tour',
      'Adventure activities including kayaking,banana boat riding,and rafting',
      'DJ pragram as mentioned in the package',
      'Tour coordinator/support throughout the trip',
    ],
    exclusions: [
      'Any activities not specifically mentioned in the itenary',
      'Any additional transportation or expenses arising from unforeseen circumstances',
      'Anything not specifically mentioned under inclusion',
      'Travel insurance',
    ],
    gallery: [
      '/images/p chikamangaluru/pkg chikkanagalur 1.jpg',
      '/images/p chikamangaluru/pkg chikkanagalur 2.jpg',
      '/images/p chikamangaluru/pkg chikkanagalur 3.jpg',
      '/images/p chikamangaluru/pkg chikkanagalur 4.jpg',
      'https://images.pexels.com/photos/15448239/pexels-photo-15448239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    importantInfo: {
      travelRequirements: 'Valid government-issued photo ID required.',
      reportingInfo: 'Please report 15 minutes before departure time.',
      cancellation: 'Cancellation 15+ days before: 80% refund. 7-14 days: 50% refund. Less than 7 days: no refund.',
      terms: 'The itinerary is subject to change based on weather, traffic, and other unforeseen circumstances.',
    },
    featured: false,
  },
  {
    id: '11',
    slug: 'student-munnar-adventure-2-days',
    title: 'Student Munnar Adventure',
    destination: 'Munnar, Kerala',
    destinationSlug: 'munnar',
    duration: '2 Days / 1 Night',
    durationDays: 2,
    price: 3200,
    category: 'Student',
    image: 'https://images.pexels.com/photos/3848200/pexels-photo-3848200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Budget-friendly adventure trekking and camping for college groups in Munnar.',
    longDescription:
      'Designed for college groups and student travelers, this budget-friendly adventure package includes trekking through tea estates, a campfire evening, and group activities. Special group discounts available.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Activities', 'Tour Guide'],
    itinerary: [
      {
        day: 1,
        title: 'Trek & Campfire',
        description:
          'Arrive in Munnar. Group trek through tea plantations to a scenic viewpoint. Evening campfire with music and group games.',
      },
      {
        day: 2,
        title: 'Tea Museum & Departure',
        description:
          'Visit the Tea Museum, learn about tea processing, and explore the local market. Depart after lunch.',
      },
    ],
    inclusions: [
      '1 night accommodation in dormitory/camps',
      'All meals (breakfast, lunch, dinner)',
      'Private vehicle for transfers',
      'Trekking guide',
      'Campfire and group activities',
      'All toll and parking',
    ],
    exclusions: [
      'Airfare or train tickets',
      'Personal expenses',
      'Entry tickets',
      'Travel insurance',
    ],
    gallery: [
      'https://images.pexels.com/photos/3848200/pexels-photo-3848200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/29280008/pexels-photo-29280008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/35491392/pexels-photo-35491392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14730465/pexels-photo-14730465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    importantInfo: {
      travelRequirements: 'Valid student ID required for student pricing.',
      reportingInfo: 'Minimum group size: 10 students.',
      cancellation: 'Group cancellation 15+ days before: 80% refund. 7-14 days: 50% refund. Less than 7 days: no refund.',
      terms: 'Student ID must be presented at check-in for discounted pricing.',
    },
    featured: false,
  },
  {
    id: '12',
    slug: 'corporate-team-retreat-3-days',
    title: 'OOTY',
    destination: 'Ooty, Tamilnadu',
    destinationSlug: 'coorg',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    price: 6500,
    category: 'Family',
    image: 'https://images.pexels.com/photos/33250481/pexels-photo-33250481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Cool mountain air, charming tea gardens, peaceful lakes, and the timeless beauty of the Nilgiris.',
    longDescription:
      'A perfect offsite retreat for corporate teams. This package combines team-building activities, outdoor adventures, and conference facilities in the serene setting of Coorg. Includes accommodation, all meals, and curated team activities.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Activities', 'Support'],
    itinerary: [
      {
        day: 1,
        title: 'Journey to Ooty',
        description:
          'Our Ooty adventure begins with an early morning departure from the hometown. After breakfast on the way, we enjoy a beautiful scenic journey through the hills, with stops at the Pine Forest and Shooting Point for sightseeing and photography, depending on the available time. We then continue to Ooty, check in at the hotel, freshen up, and have lunch. In the afternoon, we visit Ooty Lake, where you can enjoy boating and spend some relaxing time by the lake. Later, we head to Ooty Market or Charing Cross, giving everyone some free time to explore, shop, and enjoy the evening. After dinner, we settle in for a comfortable overnight stay in Ooty.',
      },
      {
        day: 2,
        title: 'Ooty & Coonoor Sightseeing',
        description:
          'After breakfast at the hotel, we begin our second day with a visit to Doddabetta Peak, one of the best places to enjoy the beautiful views of the Nilgiris. We then visit a Tea Factory and Tea Museum to learn more about Ootys famous tea and how it is produced. After lunch, we head towards Coonoor and explore the scenic Sims Park and Lambs Rock, with plenty of opportunities to enjoy the views and take photos. If time permits, we will also visit Dolphin s Nose before returning to Ooty. The evening is free for shopping, relaxing, or exploring the town before dinner and another overnight stay in Ooty.',
      },
      {
        day: 3,
        title: 'Ooty & Return Journey',
        description:
          'After breakfast and check-out, we make the most of our final day by visiting the beautiful Government Botanical Garden and Rose Garden. We then have some free time for local sightseeing and shopping before stopping for lunch. After lunch, we begin our return journey, with dinner on the way. We continue towards our hometown, bringing the trip to an end with beautiful memories, great experiences, and plenty of moments to remember from Ooty.',
      },
    ],
    inclusions: [
      'Transportation throughout the trip',
      '2 nights accommodation',
      'Sightseeing as per the itinerary',
      'Tour coordinator/guide',
    ],
    exclusions: [
      'Snacks and beverages',
      'Additional activities or services not mentioned in the itinerary',
      'Any expenses arising due to personal reasons',
      'Anything not specifically mentioned under Package Includes',
      'Travel insurance',
    ],
    gallery: [
      'https://images.pexels.com/photos/33250481/pexels-photo-33250481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/33046721/pexels-photo-33046721.png?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/27023315/pexels-photo-27023315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    importantInfo: {
      travelRequirements: 'Valid government-issued photo ID required.',
      reportingInfo: 'Minimum group size: 15 participants.',
      cancellation: 'Group cancellation 30+ days before: 90% refund. 15-29 days: 70% refund. Less than 15 days: no refund.',
      terms: 'The itinerary may be subject to change depending on weather, traffic, road conditions, and other unforeseen circumstances. Travelers are requested to follow the timings and instructions provided by the tour coordinator throughout the trip.',
    },
    featured: false,
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getFeaturedPackages(): Package[] {
  return packages.filter((p) => p.featured);
}

export function getPackagesByDestination(slug: string): Package[] {
  return packages.filter((p) => p.destinationSlug === slug);
}
