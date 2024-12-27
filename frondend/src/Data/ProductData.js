import Treadmill from "../assets/Treadmill.webp";
import Treadmill1 from "../assets/Treadmill1.webp";
import Treadmill2 from "../assets/Treadmill2.webp";
import Treadmill3 from "../assets/Treadmill3.webp";
import Treadmill4 from "../assets/Treadmill4.webp";
import Treadmills from "../assets/Treadmill.jpg";
import elliptical4 from "../assets/elliptical4.jpg";
import Treadmill22 from "../assets/Treadmill10.jpg";
import Treadmill33 from "../assets/Treadmill11.jpg";
import Treadmill30 from "../assets/Treadmill30.jpg";
import Treadmill6 from "../assets/Treadmill6.webp";
import Treadmill7 from "../assets/Treadmill7.webp";
import Treadmill8 from "../assets/Treadmill8.webp";
import Treadmill9 from "../assets/Treadmill9.webp";
import Treadmill10 from "../assets/Treadmill10.webp";
import Treadmill11 from "../assets/Treadmill11.webp";
import Treadmill12 from "../assets/Treadmill12.webp";
import Treadmill13 from "../assets/Treadmill13.webp";
import Treadmill14 from "../assets/Treadmill14.webp";
import Treadmill15 from "../assets/Treadmill15.webp";
import elliptical from "../assets/elliptical.webp";
import elliptical1 from "../assets/elliptical1.webp";
import elliptical2 from "../assets/elliptical2.jpg";
import elliptical3 from "../assets/elliptical3.webp";
import elliptical5 from "../assets/elliptical5.jpg";
import elliptical6 from "../assets/elliptical6.webp";
import elliptical7 from "../assets/elliptical7.webp";
import elliptical20 from "../assets/elliptical4.webp";
import elliptical8 from "../assets/elliptical8.webp";
import elliptical9 from "../assets/elliptical9.webp";
import elliptical10 from "../assets/elliptical10.webp";
import elliptical11 from "../assets/elliptical11.webp";
import cascade from "../assets/cascade.webp";
import cascade4 from "../assets/cascade4.webp";
import cascade1 from "../assets/cascade1.webp";
import cascade2 from "../assets/cascade2.jpg";
import cascade3 from "../assets/cascade3.jpg";
import stepmill10 from "../assets/stepmill.webp";
import step1 from "../assets/step.webp";
import step2 from "../assets/step1.webp";
import step3 from "../assets/step3.webp";
import step4 from "../assets/step2.webp";
import rovers from "../assets/rovers.webp";
import rovers2 from "../assets/rovers2.webp";
import rovers1 from "../assets/rovers1.jpg";
import rovers3 from "../assets/rovers3.jpg";
import rovers4 from "../assets/rovers4.jpg";
import rovers5 from "../assets/rovers5.webp";
import strength from "../assets/strength.jpg";
import strength1 from "../assets/strength.webp";
import strength2 from "../assets/strength1.webp";
import strength4 from "../assets/strength4.webp";
import strength3 from "../assets/strength2.webp";
import strength5 from "../assets/strength3.webp";
import strength6 from "../assets/strength5.webp";
import strength7 from "../assets/strength6.webp";
import flexibility from "../assets/flexibility.webp";
import flexibility1 from "../assets/flexibility1.webp";
import tech  from "../assets/tech.jpg";
import tech1  from "../assets/tech1.webp";
import tech3  from "../assets/tech5.webp";
import tech2  from "../assets/tech2.jpg";
import lateral  from "../assets/lateral.jpg";


const productData = [
  {
    id: "1",
    category: "Elliptical",
    name: "LifeFitness Club Series+ Elliptical Cross-Trainer",
    price: 6316.00,
    description: `
      The Life Fitness Club Series+ Treadmill lets you bring the latest gym-quality treadmill from Life Fitness home. Known for durability, design and advanced exercise technology, this treadmill provides a premium running or walking experience for all exercisers.

Choose from the immersive 24" SE4 touchscreen console or the intuitive SL LED console.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: elliptical,
      thumbnailImages: [
        elliptical1,
        elliptical,
        elliptical1,
        Treadmill,
      ],
      relatedProducts: ["18", "19", "20"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  
  {
    id: "2",
    category: "Treadmills",
    name: "LifeFitness Club Series+ Treadmill",
    price: 7453.00,
    description: `
      The Life Fitness Club Series+ Treadmill lets you bring the latest gym-quality treadmill from Life Fitness home. Known for durability, design and advanced exercise technology, this treadmill provides a premium running or walking experience for all exercisers.

Choose from the immersive 24" SE4 touchscreen console or the intuitive SL LED console.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: Treadmill4,
      thumbnailImages: [
        Treadmills,
        Treadmill4,
        Treadmills,
        Treadmill,
      ],
      relatedProducts: ["7", "5", "6"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "3",
    category: "Treadmills",
    name: "Echelon Stride-8S Treadmill",
    price: 2449.00,
    description: `
      The Life Fitness Club Series+ Treadmill lets you bring the latest gym-quality treadmill from Life Fitness home. Known for durability, design and advanced exercise technology, this treadmill provides a premium running or walking experience for all exercisers.

Choose from the immersive 24" SE4 touchscreen console or the intuitive SL LED console.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: Treadmill6,
      thumbnailImages: [
        Treadmill7,
        Treadmill8,
        Treadmill6,
        Treadmill,
      ],
      relatedProducts: ["8", "9", "1"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "4",
    category: "Treadmills",
    name: "True Performance 1000 Treadmill",
    price: 3749.00,
    description: `
      The Life Fitness Club Series+ Treadmill lets you bring the latest gym-quality treadmill from Life Fitness home. Known for durability, design and advanced exercise technology, this treadmill provides a premium running or walking experience for all exercisers.

Choose from the immersive 24" SE4 touchscreen console or the intuitive SL LED console.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: Treadmill9,
      thumbnailImages: [
        Treadmill10,
        Treadmill8,
        Treadmill6,
        Treadmill,
      ],
      relatedProducts: ["10", "11", "12"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "5",
    category: "Treadmills",
    name: "Spirit Fitness CT900ENT Treadmill",
    price: 5749.00,
    description: `
      The Life Fitness Club Series+ Treadmill lets you bring the latest gym-quality treadmill from Life Fitness home. Known for durability, design and advanced exercise technology, this treadmill provides a premium running or walking experience for all exercisers.

Choose from the immersive 24" SE4 touchscreen console or the intuitive SL LED console.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: Treadmill11,
      thumbnailImages: [
        Treadmill12,
        Treadmill11,
        Treadmill6,
        Treadmill,
      ],
      relatedProducts: ["2", "1", "13"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "6",
    category: "Treadmills",
    name: "Inspire Tread 3 Treadmill",
    price: 1116.00,
    description: `
      The Life Fitness Club Series+ Treadmill lets you bring the latest gym-quality treadmill from Life Fitness home. Known for durability, design and advanced exercise technology, this treadmill provides a premium running or walking experience for all exercisers.

Choose from the immersive 24" SE4 touchscreen console or the intuitive SL LED console.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: Treadmill30,
      thumbnailImages: [
        Treadmill13,
        Treadmill11,
        Treadmill30,
        Treadmill,
      ],
      relatedProducts: ["2", "3", "14"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "7",
    category: "Treadmills",
    name: "Cascade Ultra Runner",
    price: 4516.00,
    description: `
      The Life Fitness Club Series+ Treadmill lets you bring the latest gym-quality treadmill from Life Fitness home. Known for durability, design and advanced exercise technology, this treadmill provides a premium running or walking experience for all exercisers.

Choose from the immersive 24" SE4 touchscreen console or the intuitive SL LED console.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: Treadmill14,
      thumbnailImages: [
        Treadmill15,
        Treadmill14,
        Treadmill15,
        Treadmill,
      ],
      relatedProducts: ["2", "3", "6"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "8",
    category: "Treadmills",
    name: "Assault AirRunner Elite",
    price: 3516.00,
    description: `
      The Life Fitness Club Series+ Treadmill lets you bring the latest gym-quality treadmill from Life Fitness home. Known for durability, design and advanced exercise technology, this treadmill provides a premium running or walking experience for all exercisers.

Choose from the immersive 24" SE4 touchscreen console or the intuitive SL LED console.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: Treadmill33,
      thumbnailImages: [
        Treadmill22,
        Treadmill14,
        Treadmill15,
        Treadmill,
      ],
      relatedProducts: ["1", "8", "7"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
 
  {
    id: "9",
    category: "Treadmills",
    name: "LifeFitness T3 Treadmill",
    price: 3999.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: Treadmill,
      thumbnailImages: [
        Treadmill1,
        Treadmill2,
        Treadmill3,
        Treadmill,
      ],
      relatedProducts: ["2", "3", "4"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "10",
    category: "Elliptical",
    name: "True ES700 Elliptical",
    price: 6599.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: elliptical2,
      thumbnailImages: [
        elliptical4,
        elliptical3,
        elliptical2,
        elliptical4,
      ],
      relatedProducts: ["2", "3", "4"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "11",
    category: "Elliptical",
    name: "Spirit Fitness XE295 Elliptical",
    price: 1799.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: elliptical5,
      thumbnailImages: [
        elliptical6,
        elliptical5,
        elliptical7,
        elliptical5,
      ],
      relatedProducts: ["2", "10", "1"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "12",
    category: "Elliptical",
    name: "Octane Q47xi Elliptical",
    price: 1799.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: elliptical20,
      thumbnailImages: [
        elliptical20,
        elliptical20,
        elliptical20,
        elliptical20,
      ],
      relatedProducts: ["7", "19", "20"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "13",
    category: "Elliptical",
    name: "Octane xR6x Recumbent Elliptical",
    price: 3399.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: elliptical8,
      thumbnailImages: [
        elliptical8,
        elliptical8,
        elliptical8,
        elliptical8,
      ],
      relatedProducts: ["5", "19", "22"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "14",
    category: "Elliptical",
    name: "Octane xR6x Recumbent Elliptical",
    price: 3399.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: elliptical9,
      thumbnailImages: [
        elliptical10,
        elliptical9,
        elliptical9,
        elliptical10,
      ],
      relatedProducts: ["9", "10", "25"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "15",
    category: "Elliptical",
    name: "Precor EFX 883 Elliptical",
    price: 3399.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: elliptical11,
      thumbnailImages: [
        elliptical11,
        elliptical11,
        elliptical11,
        elliptical11,
      ],
      relatedProducts: ["13", "1", "20"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "16",
    category: "Exercise Bikes",
    name: "Cascade Compass Indoor Cycle",
    price: 2395.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: cascade,
      thumbnailImages: [
        cascade,
        cascade,
        cascade,
        cascade,
      ],
      relatedProducts: ["13", "1", "20"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "17",
    category: "Exercise Bikes",
    name: "Cascade CMXPRO Indoor Cycle",
    price: 2395.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: cascade1,
      thumbnailImages: [
        cascade1,
        cascade,
        cascade1,
        cascade,
      ],
      relatedProducts: ["18", "1", "30"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "18",
    category: "Exercise Bikes",
    name: "Assault AirBike Elite",
    price: 1495.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: cascade2,
      thumbnailImages: [
        cascade2,
        cascade2,
        cascade2,
        cascade2,
      ],
      relatedProducts: ["28", "11", "31"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "19",
    category: "Exercise Bikes",
    name: "Freemotion r22.9 Recumbent Bike - Demo Model",
    price: 5695.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: cascade3,
      thumbnailImages: [
        cascade3,
        cascade3,
        cascade3,
        cascade3,
      ],
      relatedProducts: ["29", "35", "32"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "20",
    category: "Exercise Bikes",
    name: "Precor UBK 685 Upright Bike",
    price: 6495.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: cascade4,
      thumbnailImages: [
        cascade4,
        cascade4,
        cascade4,
        cascade4,
      ],
      relatedProducts: ["5", "15", "12"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "21",
    category: "Climber & Steppers",
    name: "StairMaster 4G StepMill",
    price: 5495.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: stepmill10,
      thumbnailImages: [
        stepmill10,
        stepmill10,
        stepmill10,
        stepmill10,
      ],
      relatedProducts: ["5", "10", "2"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "22",
    category: "Climber & Steppers",
    name: "STEPR PRO Classic",
    price: 5999.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: step1,
      thumbnailImages: [
        step1,
        step1,
        step1,
        step1,
      ],
      relatedProducts: ["5", "10", "2"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "23",
    category: "Climber & Steppers",
    name: "True Vapor Palisade Climber",
    price: 9199.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: step2,
      thumbnailImages: [
        step1,
        step1,
        step2,
        step2,
      ],
      relatedProducts: ["4", "3", "40"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "24",
    category: "Climber & Steppers",
    name: "Spirit Fitness CS800 Stepper",
    price: 2019.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: step3,
      thumbnailImages: [
        step3,
        step1,
        step3,
        step3,
      ],
      relatedProducts: ["4", "3", "40"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "25",
    category: "Climber & Steppers",
    name: "Cascade Climber Cross Crawl",
    price: 3219.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: step4,
      thumbnailImages: [
        step4,
        step1,
        step4,
        step4,
      ],
      relatedProducts: ["9", "13", "21"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "26",
    category: "Rowers",
    name: "Hydrow Pro Rower",
    price: 2119.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: rovers,
      thumbnailImages: [
        rovers,
        rovers,
        rovers,
        rovers,
      ],
      relatedProducts: ["4", "1", "2"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "27",
    category: "Rowers",
    name: "WaterRower A1 Home Rowing Machine",
    price: 1119.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: rovers1,
      thumbnailImages: [
        rovers1,
        rovers1,
        rovers1,
        rovers1,
      ],
      relatedProducts: ["21", "30", "40"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "28",
    category: "Rowers",
    name: "WaterRower Heritage Rowing Machine",
    price: 1229.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: rovers5,
      thumbnailImages: [
        rovers5,
        rovers2,
        rovers5,
        rovers5,
      ],
      relatedProducts: ["10", "6", "9"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "29",
    category: "Rowers",
    name: "WaterRower M1 HiRise Rowing Machine",
    price: 1999.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: rovers3,
      thumbnailImages: [
        rovers3,
        rovers3,
        rovers3,
        rovers3,
      ],
      relatedProducts: ["10", "6", "9"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "30",
    category: "Rowers",
    name: "Cascade Air Rower Mag",
    price: 2199.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: rovers4,
      thumbnailImages: [
        rovers4,
        rovers4,
        rovers4,
        rovers4,
      ],
      relatedProducts: ["7", "16", "12"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "31",
    category: "Strength",
    name: "Inspire M3 Home Gym",
    price: 3599.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: strength,
      thumbnailImages: [
        strength,
        strength,
        strength,
        strength,
      ],
      relatedProducts: ["17", "36", "28"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "32",
    category: "Strength",
    name: "Inspire LP3 Leg Press Attachment",
    price: 999.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: strength1,
      thumbnailImages: [
        strength1,
        strength,
        strength1,
        strength1,
      ],
      relatedProducts: ["7", "16", "18"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "33",
    category: "Strength",
    name: "Inspire Series FT2 Pro Smith Functional Trainer",
    price: 5399.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: strength2,
      thumbnailImages: [
        strength2,
        strength,
        strength1,
        strength2,
      ],
      relatedProducts: ["4", "26", "19"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "34",
    category: "Strength",
    name: "Inspire 45/90 Hyperextension Bench",
    price: 539.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: strength4,
      thumbnailImages: [
        strength4,
        strength,
        strength1,
        strength2,
      ],
      relatedProducts: ["14", "6", "9"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "35",
    category: "Strength",
    name: "Inspire Leg Extension / Curl Attachment",
    price: 539.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: strength3,
      thumbnailImages: [
        strength3,
        strength,
        strength1,
        strength3,
      ],
      relatedProducts: ["4", "5", "8"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "37",
    category: "Strength",
    name: "Powertec Compact Leg Sled",
    price: 1009.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: strength6,
      thumbnailImages: [
        strength6,
        strength,
        strength1,
        strength6,
      ],
      relatedProducts: ["14", "30", "28"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "38",
    category: "Strength",
    name: "Inspire Ultimate Commercial Half Rack",
    price: 2009.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: strength7,
      thumbnailImages: [
        strength7,
        strength5,
        strength1,
        strength7,
      ],
      relatedProducts: ["24", "32", "41"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "39",
    category: "Flexibility",
    name: "Precor StretchTrainer 240i",
    price: 1230.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: flexibility,
      thumbnailImages: [
        flexibility,
        strength,
        flexibility,
        flexibility,
      ],
      relatedProducts: ["23", "22", "31"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "40",
    category: "Flexibility",
    name: "Teeter Hang Ups Fitspine XC5 Inversion Table",
    price: 530.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: flexibility1,
      thumbnailImages: [
        flexibility1,
        strength1,
        flexibility,
        flexibility,
      ],
      relatedProducts: ["23", "22", "31"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "41",
    category: "Accessories",
    name: "Lift Tech Fitness 4 Comp Padded Leather Belt",
    price: 89.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: tech,
      thumbnailImages: [
        tech,
        tech,
        tech,
        tech,
      ],
      relatedProducts: ["3", "2", "1"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "42",
    category: "Accessories",
    name: "Lift Tech Fitness Comp Jump Rope",
    price: 21.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: tech1,
      thumbnailImages: [
        tech1,
        tech,
        tech1,
        tech1,
      ],
      relatedProducts: ["32", "22", "31"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "43",
    category: "Accessories",
    name: "Top Fitness Bike / Stepper Mat ",
    price: 49.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: tech2,
      thumbnailImages: [
        tech2,
        tech,
        tech2,
        tech2,
      ],
      relatedProducts: ["32", "22", "31"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "44",
    category: "Accessories",
    name: "Hyperice Hypervolt 2",
    price: 199.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: tech3,
      thumbnailImages: [
        tech3,
        tech1,
        tech3,
        tech2,
      ],
      relatedProducts: ["32", "22", "31"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
  {
    id: "45",
    category: "Lateral Trainers",
    name: "Helix 3D Lateral Trainer H1000-3D",
    price: 3295.00,
    description: `
      The Life Fitness T3 Treadmill is designed with form and function in mind. Sleek, aesthetically pleasing curves complement any home. The T3 Treadmill is a streamlined choice for any home exerciser, but durable enough to withstand plenty of miles.

Choose from console options including the new Track Connect 2.0 with upgraded connectivity and seamless integration with your favorite devices, or the Go Console for a simpler experience.
    `,
    keyFeatures: [
      "Contact heart rate hand sensors and wireless telemetry heart rate monitoring system",
      "Integrated smartphone/tablet holder, which also serves as a reading rack, provide added convenience\" Remembers your preferred walk, jog and run speeds, as well as three different incline positions\" step height at 60 degrees deliver the ultimate lower body workout.",
      "Remote Handlebar Toggles for both Incline and Resistance allow for fast and easy workout changes without taking your hands off the handlebar pulse grips.",
      "Adjustable cooling fan and dual speakers with audio jack for comfort and entertainment.",
      "Contact and wireless heart rate monitoring options make your workouts more effective (chest strap transmitter not included).",
      "Bluetooth compatible with SPIRIT FIT App to monitor and record your workout data.",
    ],
    specifications: {
      mechanical: {
        productWeight: "205 lbs.",
        dimensions: "54 x 24 x 68 in",
        weightCapacity: "400 lbs.",
      },
      electrical: {
        heartRate: "Contact & Telemetric (Heart Rate Strap Not Included)",
        resistanceLevels: 20,
        inclineLevels: "20 (with 10\" - 14\" adjustments)",
      },
    },
    warranty: {
      home: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "10 Years",
        labor: "1 Year",
      },
      commercial: {
        frame: "Lifetime",
        brake: "5 Years",
        parts: "3 Years",
        labor: "1 Year",
      },
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 4.5,
        comment: "Fantastic equipment! Easy to use and incredibly effective for my workout goals.",
      },
      {
        reviewer: "Jane Smith",
        rating: 5,
        comment: "Best fitness equipment I’ve ever owned. The incline adjustments are a game-changer.",
      },
    ],
    warrantyOptions: [
      { duration: "1 Year", price: 0 },
      { duration: "2 Years", price: 199.99 },
      { duration: "3 Years", price: 299.99 },
    ],
    quantity: 10,
    images: {
      mainImage: lateral,
      thumbnailImages: [
        lateral,
        lateral,
        lateral,
        lateral,
      ],
      relatedProducts: ["32", "22", "31"], // Only store the related product IDs
    },
    faqs: [
      {
        question: "How does the resistance system work?",
        answer: "The Elite Fitness Trainer X2000 offers 20 resistance levels, which can be adjusted electronically to match your workout intensity.",
      },
      {
        question: "What is the weight capacity of the machine?",
        answer: "The maximum weight capacity of the Elite Fitness Trainer X2000 is 400 lbs, making it suitable for a wide range of users.",
      },
      {
        question: "Can I use this machine for both cardio and strength training?",
        answer: "Yes, the combination of adjustable incline, resistance levels, and ergonomic design allows users to engage in both cardio and strength training workouts.",
      },
      {
        question: "Is the machine Bluetooth compatible?",
        answer: "Yes, the Elite Fitness Trainer X2000 is Bluetooth compatible with the SPIRIT FIT app to track and record your workout data.",
      },
    ],
  },
 
];

export default productData;
