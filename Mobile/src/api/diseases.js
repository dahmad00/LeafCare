const POPULAR_PLANTS = [
  // {
  //   id: '1',
  //   name: 'Scab',
  //   imageUri: require('../../images/Scab.jpg'),
  //   symptoms:'A healthy apple leaf displays a vibrant green color, smooth texture, and uniform appearance. It is free from any visible signs of disease, such as spots, lesions, or discoloration. Healthy leaves are essential for photosynthesis and overall tree vigor'  ,
  //   causes:'Leaf diseases in apple trees can be caused by various factors, including fungal pathogens, bacterial infections, environmental stressors, and poor orchard management practices. Fungal diseases often thrive in humid conditions, while bacterial infections can spread through contaminated equipment or insect vectors',
  //   remedies:'Fungicide Application: Use fungicides specific to common apple leaf diseases to prevent infections and maintain leaf health. Proper Pruning: Regularly prune apple trees to improve air circulation and reduce humidity levels, which can help prevent the spread of diseases. Sanitation Practices: Remove and destroy any infected leaves or branches promptly to prevent the spread of pathogens within the orchard',
  //    },
  // {
  //   id: '2',
  //   name: 'Brown Rot',
  //   imageUri: require('../../images/brownrot.jpg'), // Replace with actual image path or require statement
  //   symptoms:'A healthy apple leaf displays a vibrant green color, smooth texture, and uniform appearance. It is free from any visible signs of disease, such as spots, lesions, or discoloration. Healthy leaves are essential for photosynthesis and overall tree vigor'  ,
  //   causes:'Leaf diseases in apple trees can be caused by various factors, including fungal pathogens, bacterial infections, environmental stressors, and poor orchard management practices. Fungal diseases often thrive in humid conditions, while bacterial infections can spread through contaminated equipment or insect vectors',
  //   remedies:'Fungicide Application: Use fungicides specific to common apple leaf diseases to prevent infections and maintain leaf health. Proper Pruning: Regularly prune apple trees to improve air circulation and reduce humidity levels, which can help prevent the spread of diseases. Sanitation Practices: Remove and destroy any infected leaves or branches promptly to prevent the spread of pathogens within the orchard',
  //    },
  {
    id: '3',
    name: 'Healthy Apple',
    imageUri: require('../../images/healthy-apple.jpg'),
    symptoms: '',
    causes: '',
    remedies: '',
  },
  {
    id: '4',
    name: 'General Scab',
    imageUri: require('../../images/Apple-scab.png'),
    symptoms: 'Olive-green to black lesions on leaves, velvety texture, premature leaf drop.',
    causes: 'Fungus Venturia inaequalis, thrives in warm, humid conditions.',
    remedies: 'Fungicide treatment, pruning, sanitation of fallen leaves.',
  },
  {
    id: '5',
    name: 'Serious Scab',
    imageUri: require('../../images/serious-apple-scab.jpg'),
    symptoms: 'Similar to General Apple Scab with more severe impact on appearance, quality.',
    causes: 'Same fungus as General Apple Scab, fast spread in suitable conditions.',
    remedies: 'Similar to General Apple Scab: fungicide, pruning, sanitation.',
  },
  {
    id: '6',
    name: 'Grey Spot',
    imageUri: require('../../images/gray-spot.jpg'),
    symptoms: 'Gray-white powdery patches, leaf and shoot browning, small sunken fruit spots.',
    causes: 'Fungus Podosphaera leucotricha, overwinters in leaves, infects in spring.',
    remedies: 'Fungicide treatment, pruning for air circulation, sanitation of fallen leaves.',
  },
  {
    id: '7',
    name: 'General Cedar Rust',
    imageUri: require('../../images/GeneralCedarAppleRust.jpg'),
    symptoms: 'Greenish-yellow to orange-yellow leaf spots, red border, mottled fruit.',
    causes: 'Fungus Gymnosporangium, overwinters on junipers, infects apples in spring.',
    remedies: 'Fungicides, pruning, resistant apple varieties, proper pruning.',
  },
  {
    id: '8',
    name: 'Serious Cedar Rust',
    imageUri: require('../../images/Severe-Apple-Cedar-Rust.jpg'),
    symptoms: 'Intensified symptoms of General Cedar Apple Rust, significant defoliation.',
    causes: 'Same as General Cedar Apple Rust, facilitated by wet spring weather.',
    remedies: 'Similar to General Cedar Apple Rust: fungicides, pruning, sanitation.',
  },
  {
    id: '9',
    name: 'Cordana',
    imageUri: require('../../images/early-blight.jpg'),
    symptoms: '"Bulls eye" pattern lesions on lower leaves, severe leaf drop.',
    causes: 'Fungus Alternaria solani, overwinters in plant debris, infects in spring.',
    remedies: 'Fungicides, crop rotation, residue management, remove infected leaves.',
  },
  {
    id: '10',
    name: 'Pestalotiopsis',
    imageUri: require('../../images/bacterial-spot.jpg'),
    symptoms: 'Small, round, water-soaked to dark-brown/black spots, yellow halo, leaf yellowing, loss.',
    causes: 'Caused by Xanthomonas species, infects through openings/wounds, thrives in warm, humid conditions.',
    remedies: 'Apply bactericides, improve air circulation with pruning, remove and destroy infected leaves/fruits.',
  },
  {
    id: '11',
    name: 'Sigatoka',
    imageUri: require('../../images/lateblight.jpg'),
    symptoms: 'Water-soaked to brown lesions on leaves/stems/fruits, rapid deterioration.',
    causes: 'Oomycete Phytophthora infestans, thrives in cool, wet conditions, spreads via wind/water.',
    remedies: 'Fungicide treatment, space plants for air circulation, avoid overhead irrigation, remove infected material.',
  },
  {
    id: '12',
    name: 'Healthy Banana',
    imageUri: require('../../images/tomato-leaf-mold.jpg'),
    symptoms: '',
    causes: 'Fungus Passalora fulva (Cladosporium fulvum), thrives in warm, humid, poor circulation environments.',
    remedies: 'Fungicides for control, space plants, avoid overhead irrigation, remove infected leaves.',
  },
  {
    id: '13',
    name: 'Black Spot',
    imageUri: require('../../images/septoria-leaf-spot.jpg'),
    symptoms: 'Small, circular, dark center spots, leaf yellowing, premature defoliation.',
    causes: 'Fungus Septoria lycopersici, warm, humid conditions, overwinters in debris, spreads via water/contact.',
    remedies: 'Remove infected leaves, improve air circulation, apply fungicides for control.',
  },
  {
    id: '14',
    name: 'Canker',
    imageUri: require('../../images/Spider-Mite.jpg'),
    symptoms: 'Stippling (tiny yellow dots) on leaves, webbing, leaf discoloration, yellowing, drop.',
    causes: 'Thrive in warm, dry conditions, feed on plant sap, rapid reproduction.',
    remedies: 'Horticultural oils or insecticidal soaps, water sprays, remove debris, introduce predators like ladybugs.',
  },
  {
    id: '15',
    name: 'Greening',
    imageUri: require('../../images/target-spot.jpg'),
    symptoms: 'Irregular spots, yellow margins, dark center, leaf yellowing, premature defoliation.',
    causes: 'Fungus Corynespora cassiicola, warm, humid conditions, poor air circulation.',
    remedies: 'Fungicide treatment, improve air circulation, remove infected leaves.',
  },
  {
    id: '16',
    name: 'Healthy Citrus',
    imageUri: require('../../images/mosaic-virus.jpeg'),
    symptoms: '',
    causes: '',
    remedies: '',
  },
  {
    id: '17',
    name: 'Blight Disease',
    imageUri: require('../../images/Tomato-Leaf-Curl.jpg'),
    symptoms: 'Marginal leaf yellowing, cupping, size reduction, flower/fruit drop, stunted growth.',
    causes: 'Begomovirus transmitted by whiteflies, affects photosynthesis and growth.',
    remedies: 'Remove infected plants, control whiteflies, plant TYLCV-resistant varieties.',
  },
  {
    id: '18',
    name: 'Healthy Corn',
    imageUri: require('../../images/healthy-corn.jpg'),
    symptoms: '',
    causes: '',
    remedies: '',
  },
  {
    id: '19',
    name: 'Grey Leaf Spot',
    imageUri: require('../../images/blight.jpg'),
    symptoms: 'Tan/brown oblong lesions, irregular shape/size, significant grain loss if infected before silking.',
    causes: 'Fungus Exserohilum turcicum, infects through openings/wounds, warm, humid conditions.',
    remedies: 'Fungicides for control, good sanitation, proper planting density, copper-based fungicides.',
  },
  {
    id: '20',
    name: 'Common Rust',
    imageUri: require('../../images/common-rust.jpg'),
    symptoms: 'Rust-colored to dark brown pustules on leaf surfaces, leaf discoloration, stress.',
    causes: 'Fungus Puccinia sorghi, thrives in warm, humid conditions, affects susceptible cultivars.',
    remedies: 'Apply fungicides, crop rotation, residue management, plant resistant hybrids.',
  },
  {
    id: '21',
    name: 'Yellow Leaf Curl Virus',
    imageUri: require('../../images/Gray_leaf_spot.png'),
    symptoms: 'Small, rectangular/oval lesions, yellow halos, initial tan turning gray, severe leaf damage, reduced photosynthesis/yield.',
    causes: 'Fungus Cercospora zeae-maydis, spore infection, thrives in warm, humid conditions, impacts U.S. corn belt.',
    remedies: 'Apply grey leaf spot fungicides, crop rotation, residue management, plant resistant corn hybrids.',
  },
  {
    id: '22',
    name: 'Target Spot',
    imageUri: require('../../images/Cordana-leaf-spot.jpg'),
    symptoms: 'Small, brown, circular spots with darker center, spots may coalesce into larger blotches, causes leaf yellowing/premature drop.',
    causes: 'Fungi Colletotrichum musae and gloeosporioides, infects through natural openings/wounds, high humidity and warm temperatures.',
    remedies: 'Proper agricultural practices, apply labeled fungicides for Cordana, copper-based fungicides as preventative measure.',
  },
  {
    id: '23',
    name: 'Spider Mites',
    imageUri: require('../../images/healthy-banana.jpg'),
    symptoms: 'Vibrant green color, smooth texture, uniform appearance, crucial for photosynthesis and plant growth.',
    causes: '',
    remedies: 'Inspect for pests/disease, consistent watering, sufficient light for photosynthesis.',
  },
  {
    id: '24',
    name: 'Septoria Leaf Spot',
    imageUri: require('../../images/sigatoka.jpg'),
    symptoms: 'Light yellow/brownish-green streaks, pale yellow spots, spots coalesce into larger lesions with yellow halos, extensive leaf damage.',
    causes: 'Fungi Mycosphaerella fijiensis and musicola, spore spread by wind/rain, thrives in warm, humid, tropical regions.',
    remedies: 'Apply fungicides for Sigatoka, prune for air circulation, remove infected leaves, monitor for early signs.',
  },
  {
    id: '25',
    name: 'Mosaic Virus',
    imageUri: require('../../images/Pestalotiopsis.png'),
    symptoms: 'Yellow/pale brown oval/eye-shaped spots, spots enlarge/necrotic, extensive leaf damage, defoliation.',
    causes: 'Fungus Pestalotiopsis microspora, infects through wounds, thrives in warm, humid, tropical conditions.',
    remedies: 'Apply controlling fungicides, improve air circulation with pruning, remove infected leaves, monitor and act on early signs.',
  },
  {
    id: '26',
    name: 'Leaf Mold',
    imageUri: require('../../images/anthracnose-on-mango-leaves.jpg'),
    symptoms: 'Small, brown spots, dark border on leaves/fruit, thrives in warm, wet conditions, prune/destroy infected parts.',
    causes: 'Fungal spores in infected twigs/leaf litter, moist spring weather leads to new spores, affects new leaves.',
    remedies: 'Resistant cultivars, pruning and destruction of infected parts, apply copper sprays/sulfur powders, ensure good tree vigor.',
  },
  {
    id: '27',
    name: 'Late Blight',
    imageUri: require('../../images/Bacterial-canker.jpg'),
    symptoms: 'Water-soaked lesions develop into cankers, wilting symptoms, cankers over vascular discoloration, gum exudation.',
    causes: 'Bacterium Erwinia billingiae, systemic, affects all tree parts, pre-harvest disease impacting fruits, first described in South Africa.',
    remedies: 'Prune/destroy infected parts, disinfect pruning tools, plant in well-drained soil, copper-based fungicides for management.',
  },
  {
    id: '28',
    name: 'Healthy Tomato',
    imageUri: require('../../images/cutting_weevil.jpg'),
    symptoms: '',
    causes: '',
    remedies: '',
  },
  {
    id: '29',
    name: 'Sooty mold',
    imageUri: require('../../images/Sooty-mold.jpg'),
    symptoms: 'Black powdery fungal growth from honeydew-producing insects like aphids, blocks sunlight, affects photosynthesis.',
    causes: 'Honeydew from aphids, scales, mealybugs fosters sooty mold fungus growth, prevalent in warm, humid conditions.',
    remedies: 'Control honeydew-producing insects, wash leaves to remove mold/honeydew, use insecticidal soaps or horticultural oils in severe cases.',
  },
  {
    id: '30',
    name: 'Die back',
    imageUri: require('../../images/die-back.jpg'),
    symptoms: 'Wilting, affected parts wither and die, cankers may exude gum, leads to tree decline.',
    causes: 'Fungal infections, bacterial pathogens, environmental stressors, or improper cultural practices weaken immunity.',
    remedies: 'Prune affected parts, proper orchard management for vigor, use fungicides/bactericides, ensure optimal growing conditions.',
  },
  {
    id: '31',
    name: 'Gall midge',
    imageUri: require('../../images/gall-midge.jpg'),
    symptoms: 'Small, swollen growths on leaves/stems from gall midge larvae, causes leaf deformation and drop, reduces fruit production.',
    causes: 'Gall midge larvae feed on plant tissue, causing galls, considered a serious pest for mango trees.',
    remedies: 'Apply insecticidal soap or neem oil, proper tree care for resilience, introduce natural predators for biological control.',
  },
  {
    id: '32',
    name: 'Powdery mildew',
    imageUri: require('../../images/powdery-mildew.jpg'),
    symptoms: 'White, powdery fungal growth on leaves, flowers, young fruits, causes stunted growth, leaf distortion, affects yield.',
    causes: 'Fungi thriving in warm, humid conditions, infect through airborne spores, poor air circulation, and overcrowding exacerbate.',
    remedies: 'Use powdery mildew-specific fungicides, prune to improve air circulation, proper spacing and watering, monitor for early signs.',
  },
  {
    id: '33',
    name: 'Healthy Mango',
    imageUri: require('../../images/healthy-mango.jpg'),
    symptoms: 'Vibrant green, smooth, glossy leaves, free from disease/pest infestation, crucial for photosynthesis and growth.',
    causes: 'Balanced nutrition, adequate sunlight, optimal watering, and air circulation contribute to healthy leaf development.',
    remedies: 'Ensure balanced fertilization, adequate sunlight, proper watering, monitor for pests/diseases to maintain leaf health.',
  },
  {
    id: '34',
    name: 'Black spot',
    imageUri: require('../../images/black-Spot.jpg'),
    symptoms: 'Circular to oval lesions with dark centers, yellow halos, can lead to leaf drop, impacts fruit quality/yield.',
    causes: 'Fungus Phyllosticta citricarpa spreads in warm, humid conditions, facilitated by overhead irrigation/rain.',
    remedies: 'Apply black spot-specific fungicides, prune for air circulation, remove infected material, manage humidity.',
  },
  {
    id: '35',
    name: 'Canker',
    imageUri: require('../../images/citrus-canker.jpg'),
    symptoms: 'Brown spots with water-soaked appearance, lesions on leaves/stems/fruit, leads to defoliation, fruit drop.',
    causes: 'Bacterium Xanthomonas citri, infects through wounds/openings, spread by infected material, water, insects.',
    remedies: 'Use bactericides, improve air circulation with pruning, remove infected material, avoid overhead irrigation.',
  },
  {
    id: '36',
    name: 'Greening',
    imageUri: require('../../images/greening.jpg'),
    symptoms: 'Blotchy mottling, asymmetrical yellowing, vein corking, stunted growth, reduced fruit size, bitter taste.',
    causes: 'Bacterium Candidatus Liberibacter asiaticus spread by Asian citrus psyllid, disrupts nutrient transport.',
    remedies: 'Control psyllid vectors, remove infected trees, proper fertilization and irrigation, maintain tree vigor.',
  },
  {
    id: '37',
    name: 'Melanose',
    imageUri: require('../../images/melanose.jpg'),
    symptoms: 'Small, red-to-brown spots with ringed appearance on leaves and fruit, leads to deformation, premature drop, reduced quality.',
    causes: 'Fungus Phyllosticta citricarpa, spreads in warm, humid conditions via infected material and water, exacerbated by overhead irrigation.',
    remedies: 'Use specific fungicides, prune for air circulation, remove infected material, manage orchard to prevent spread.',
  },
  {
    id: '38',
    name: 'Healthy Citrus',
    imageUri: require('../../images/healthy-citrus.jpg'),
    symptoms: 'Vibrant green, glossy, uniform leaves free from disease, crucial for photosynthesis and tree health.',
    causes: '',
    remedies: 'Ensure balanced fertilization, consistent soil moisture, monitor for pests/diseases, support leaf health through proper care.',
  },
];
export default POPULAR_PLANTS;