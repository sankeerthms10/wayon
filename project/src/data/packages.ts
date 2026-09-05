import type { Package } from '@/types';

export const packages: Package[] = [
  {
    id: '1',
    slug: 'munnar-3-days',
    title: 'Munnar Hills Retreat',
    destination: 'Munnar, Kerala',
    destinationSlug: 'munnar',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    price: 12999,
    category: 'Family',
    image: 'https://images.pexels.com/photos/36623929/pexels-photo-36623929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Rolling tea plantations, misty mountains, and cool breezes in Kerala\'s most beloved hill station.',
    longDescription:
      'Nestled in the Western Ghats, Munnar is a paradise of emerald tea gardens, cascading waterfalls, and crisp mountain air. This 3-day retreat takes you through the heart of this hill station, from sunrise viewpoints to spice plantations, with comfortable accommodation and expert local guides.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Sightseeing', 'Tour Guide', 'Support'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Munnar',
        description:
          'Arrive at Cochin airport and drive to Munnar through scenic winding roads. Check into your hotel, enjoy a relaxed evening, and take in the cool mountain air.',
      },
      {
        day: 2,
        title: 'Tea Gardens & Mattupetty Dam',
        description:
          'Visit the lush tea plantations, learn about tea processing at the Tea Museum, and enjoy boating at Mattupetty Dam. Stop at Echo Point and Kundala Lake for photos.',
      },
      {
        day: 3,
        title: 'Eravikulam National Park & Departure',
        description:
          'Early morning visit to Eravikulam National Park, home of the endangered Nilgiri Tahr. After breakfast, check out and drive back to Cochin for departure.',
      },
    ],
    inclusions: [
      '2 nights accommodation in premium hotel',
      'Daily breakfast and dinner',
      'Private AC vehicle for all transfers',
      'English-speaking driver cum guide',
      'All sightseeing as per itinerary',
      'Toll, parking, and fuel charges',
    ],
    exclusions: [
      'Airfare or train tickets',
      'Lunch and personal expenses',
      'Entry tickets to monuments',
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
      terms: 'The company reserves the right to modify the itinerary due to weather or operational reasons.',
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
      'Entry fees to tourist attractions',
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
    slug: 'goa-beach-bliss-4-days',
    title: 'Goa dandeli',
    destination: 'Goa',
    destinationSlug: 'goa',
    duration: '4 Days / 3 Nights',
    durationDays: 4,
    price: 18999,
    category: 'Luxury',
    image: 'https://images.pexels.com/photos/8037061/pexels-photo-8037061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Sun-kissed beaches, vibrant nightlife, and Portuguese heritage in India\'s party capital.',
    longDescription:
      'Goa is where relaxation meets excitement. From the golden sands of Palolem to the historic churches of Old Goa, this 4-day package blends beach leisure with cultural exploration. Enjoy water sports, beach shacks, and the famous Goan cuisine.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Sightseeing', 'Activities', 'Support'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Beach Evening',
        description:
          'Arrive at Goa airport, transfer to your beach resort. Evening at leisure to enjoy the sunset and beachside dining.',
      },
      {
        day: 2,
        title: 'North Goa Beaches & Forts',
        description:
          'Visit Aguada Fort, Sinquerim Beach, Baga Beach, and Anjuna Beach. Enjoy water sports (optional) and the vibrant beach culture.',
      },
      {
        day: 3,
        title: 'South Goa & Old Goa Churches',
        description:
          'Explore the serene beaches of South Goa — Palolem and Colva. Visit the Basilica of Bom Jesus and Se Cathedral in Old Goa.',
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Morning at leisure. Check out and transfer to the airport for your departure.',
      },
    ],
    inclusions: [
      '3 nights accommodation in beach resort',
      'Daily breakfast',
      'Private AC vehicle for sightseeing',
      'All sightseeing as per itinerary',
      'English-speaking driver',
      'Toll, parking, and fuel',
    ],
    exclusions: [
      'Airfare or train tickets',
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
      terms: 'Water sports are subject to weather conditions and are not included in the package price.',
    },
    featured: true,
  },
  {
    id: '4',
    slug: 'Trivandrum',
    title: 'One day Trivandrum',
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
    category: 'Family',
    image: 'https://images.pexels.com/photos/31836726/pexels-photo-31836726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Forts, palaces, and desert culture across the royal cities of Rajasthan.',
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
    title: 'Ooty Queen of Hills',
    destination: 'Ooty, Tamil Nadu',
    destinationSlug: 'ooty',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    price: 10999,
    category: 'Weekend',
    image: 'https://images.pexels.com/photos/9411142/pexels-photo-9411142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Toy train rides, botanical gardens, and misty Nilgiri hills in South India\'s premier hill station.',
    longDescription:
      'Ooty, the Queen of Hill Stations, offers a perfect weekend escape with its cool climate, botanical gardens, and the heritage Nilgiri Mountain Railway. This package includes a ride on the famous toy train, visits to tea estates, and serene lake-side evenings.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Sightseeing', 'Tour Guide'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Botanical Gardens',
        description:
          'Arrive in Ooty. Visit the Government Botanical Gardens and Ooty Lake for a relaxing evening boating session.',
      },
      {
        day: 2,
        title: 'Toy Train & Doddabetta Peak',
        description:
          'Enjoy the heritage Nilgiri Mountain Railway toy train ride. Visit Doddabetta Peak for panoramic views and a tea estate tour.',
      },
      {
        day: 3,
        title: 'Coonoor & Departure',
        description:
          'Visit Coonoor tea gardens and Sim\'s Park. After lunch, drive to the departure point.',
      },
    ],
    inclusions: [
      '2 nights accommodation in hill resort',
      'Daily breakfast and dinner',
      'Private AC vehicle for transfers',
      'Toy train ticket',
      'English-speaking driver cum guide',
      'All toll and parking',
    ],
    exclusions: [
      'Airfare or train tickets',
      'Lunch and personal expenses',
      'Entry tickets to monuments',
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
      terms: 'Toy train tickets are subject to availability and weather conditions.',
    },
    featured: false,
  },
  {
    id: '7',
    slug: 'kerala-backwaters-4-days',
    title: 'Kodaikanal',
    destination: 'Alleppey, Kerala',
    destinationSlug: 'kerala',
    duration: '4 Days / 3 Nights',
    durationDays: 4,
    price: 22999,
    category: 'Honeymoon',
    image: 'https://images.pexels.com/photos/17928231/pexels-photo-17928231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Luxurious houseboat cruises through palm-fringed backwaters and serene village life.',
    longDescription:
      'Experience the magic of Kerala\'s backwaters on a traditional houseboat. Glide through palm-fringed canals, watch village life unfold along the banks, and enjoy freshly prepared Keralan cuisine. This honeymoon-special package includes a sunset cruise, Ayurvedic spa treatment, and a Kathakali performance.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Sightseeing', 'Activities', 'Support'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Cochin',
        description:
          'Arrive at Cochin airport. Visit Fort Kochi, the Chinese Fishing Nets, and Mattancherry Palace. Evening Kathakali performance.',
      },
      {
        day: 2,
        title: 'Drive to Alleppey & Houseboat',
        description:
          'Drive to Alleppey and board your luxury houseboat. Cruise through the backwaters, enjoy local cuisine, and watch the sunset over the palm groves.',
      },
      {
        day: 3,
        title: 'Kumarakom & Spa',
        description:
          'Disembark and drive to Kumarakom. Check into a lakeside resort. Enjoy an Ayurvedic spa treatment and visit the Kumarakom Bird Sanctuary.',
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Morning at leisure. Check out and drive to Cochin airport for departure.',
      },
    ],
    inclusions: [
      '1 night hotel + 1 night houseboat + 1 night resort',
      'All meals on houseboat',
      'Daily breakfast at hotels',
      'Private AC vehicle for transfers',
      'Ayurvedic spa treatment',
      'Kathakali performance',
    ],
    exclusions: [
      'Airfare or train tickets',
      'Lunch at hotels and personal expenses',
      'Optional activities',
      'Entry tickets to monuments',
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
    slug: 'himalayan-adventure-7-days',
    title: 'Myssur Bangalore',
    destination: 'Manali, Himachal Pradesh',
    destinationSlug: 'manali',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    price: 34999,
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/29494184/pexels-photo-29494184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Mountain trekking, river rafting, and high-altitude passes in the Indian Himalayas.',
    longDescription:
      'For the adventure seeker, this 7-day expedition covers the best of Himachal Pradesh — from the pine valleys of Manali to the high-altitude Rohtang Pass. Includes river rafting on the Beas, trekking to Jogini Falls, and a drive through dramatic mountain landscapes.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Activities', 'Tour Guide', 'Support'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Manali',
        description:
          'Arrive in Manali. Check into your hotel and explore the local market and Hadimba Temple.',
      },
      {
        day: 2,
        title: 'Solang Valley Adventure',
        description:
          'Drive to Solang Valley for paragliding, zorbing, and rope-way rides. Return to Manali in the evening.',
      },
      {
        day: 3,
        title: 'River Rafting on the Beas',
        description:
          'Morning river rafting session on the Beas River. Afternoon at leisure or optional trek to Jogini Falls.',
      },
      {
        day: 4,
        title: 'Rohtang Pass Excursion',
        description:
          'Early morning drive to Rohtang Pass (3,978m). Enjoy snow activities and panoramic Himalayan views.',
      },
      {
        day: 5,
        title: 'Naggar Castle & Art',
        description:
          'Visit Naggar Castle, the Nicholas Roerich Art Gallery, and traditional Himachali villages.',
      },
      {
        day: 6,
        title: 'Trekking Day',
        description:
          'Guided trek through alpine meadows and pine forests. Picnic lunch with mountain views.',
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Morning at leisure. Check out and transfer to Bhuntar airport for departure.',
      },
    ],
    inclusions: [
      '6 nights accommodation in mountain lodge',
      'Daily breakfast and dinner',
      'Private AC vehicle for all transfers',
      'River rafting session',
      'Paragliding at Solang Valley',
      'English-speaking adventure guide',
    ],
    exclusions: [
      'Airfare or train tickets',
      'Lunch and personal expenses',
      'Rohtang Pass permit fee',
      'Snow clothing rental',
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
    destination: 'Coorg, Karnataka',
    destinationSlug: 'coorg',
    duration: '2 Days / 1 Night',
    durationDays: 2,
    price: 7999,
    category: 'Weekend',
    image: 'https://images.pexels.com/photos/33046721/pexels-photo-33046721.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Coffee plantations, misty waterfalls, and Tibetan culture in the Scotland of India.',
    longDescription:
      'Coorg (Kodagu) is Karnataka\'s coffee country — a land of rolling green hills, spice plantations, and waterfalls. This weekend getaway includes a coffee plantation tour, a visit to Abbey Falls, and the famous Namdroling Monastery.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Sightseeing', 'Tour Guide'],
    itinerary: [
      {
        day: 1,
        title: 'Coffee Plantation Tour & Abbey Falls',
        description:
          'Arrive in Coorg. Take a guided tour of a coffee plantation, learning about coffee cultivation. Visit Abbey Falls and Raja\'s Seat for sunset.',
      },
      {
        day: 2,
        title: 'Namdroling Monastery & Departure',
        description:
          'After freshening up and having breakfast, we will go for jeep trekking to explore Seethalayangiri, Mullayanagiri, Kavikkalgandi Checkpost, and Manikyadhara Waterfalls. After lunch, we will visit Baba Budangiri, followed by a walk to Z Point and a visit to the Siri Statue. We will then have dinner and stay overnight in Chikmagalur.',
      },
    ],
    inclusions: [
      '1 night accommodation in plantation stay',
      'Daily breakfast and dinner',
      'Private AC vehicle for transfers',
      'Coffee plantation tour',
      'English-speaking driver cum guide',
      'All toll and parking',
    ],
    exclusions: [
      'Airfare or train tickets',
      'Lunch and personal expenses',
      'Entry tickets to monuments',
      'Travel insurance',
    ],
    gallery: [
      'https://images.pexels.com/photos/33046721/pexels-photo-33046721.png?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/33250481/pexels-photo-33250481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/27023315/pexels-photo-27023315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/24742025/pexels-photo-24742025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    importantInfo: {
      travelRequirements: 'Valid government-issued photo ID required.',
      reportingInfo: 'Please report 15 minutes before departure time.',
      cancellation: 'Cancellation 15+ days before: 80% refund. 7-14 days: 50% refund. Less than 7 days: no refund.',
      terms: 'Plantation stay category may vary by availability.',
    },
    featured: false,
  },
  {
    id: '10',
    slug: 'kodaikanal-lake-retreat-3-days',
    title: 'Journey to Chikamanglur',
    destination: 'Karnataka, India',
    destinationSlug: 'Chikamanglur',
    duration: '3 Days / 4 Nights',
    durationDays: 4,
    price: 5000,
    category: 'Student',
    image: 'https://images.pexels.com/photos/9411154/pexels-photo-9411154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Majestic peaks, lush spice gardens, and misty mountain trails in the Gateway to Mullayanagiri.',
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
    price: 5999,
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
    title: 'Corporate Team Retreat',
    destination: 'Coorg, Karnataka',
    destinationSlug: 'coorg',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    price: 15999,
    category: 'Corporate',
    image: 'https://images.pexels.com/photos/33250481/pexels-photo-33250481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Team-building activities, outdoor adventures, and conference facilities in nature.',
    longDescription:
      'A perfect offsite retreat for corporate teams. This package combines team-building activities, outdoor adventures, and conference facilities in the serene setting of Coorg. Includes accommodation, all meals, and curated team activities.',
    highlights: ['Accommodation', 'Transportation', 'Meals', 'Activities', 'Support'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Ice-breakers',
        description:
          'Arrive at the resort. Welcome session with ice-breaker activities. Afternoon team-building games and evening bonfire.',
      },
      {
        day: 2,
        title: 'Adventure Day',
        description:
          'Outdoor adventure activities including zip-lining, obstacle courses, and a plantation tour. Evening cultural performance.',
      },
      {
        day: 3,
        title: 'Strategy Session & Departure',
        description:
          'Morning conference/strategy session. Lunch and departure.',
      },
    ],
    inclusions: [
      '2 nights accommodation in resort',
      'All meals (breakfast, lunch, dinner)',
      'Conference room with AV setup',
      'Team-building activities',
      'Private vehicle for transfers',
      'Bonfire and cultural evening',
    ],
    exclusions: [
      'Airfare or train tickets',
      'Personal expenses and beverages',
      'Optional adventure activities',
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
      terms: 'Conference room capacity: up to 40 participants. AV equipment includes projector and sound system.',
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
