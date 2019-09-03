export const vinyls = [
  {
    artist: "Kate Nash",
    album: "Made of Bricks",
    year: 2007
  },
  {
    artist: "The 1975",
    album: "A Brief Inquiry Into Online Relationships",
    year: 2018
  },
  {
    artist: "Allie X",
    album: "Super Sunset",
    year: 2018
  },
  {
    artist: "Florence + the Machine",
    album: "Lungs",
    year: 2009
  },
  {
    artist: "Lana Del Rey",
    album: "Born to Die",
    year: 2012
  },
  {
    artist: "Lykke Li",
    album: "so sad so sexy",
    year: 2018
  },
  {
    artist: "Adele",
    album: "19",
    year: 2008
  },
  {
    artist: "Arctic Monkeys",
    album: "Favourite Worst Nightmare",
    year: 2007
  },
  {
    artist: "Banks",
    album: "III",
    year: 2019
  },
  {
    artist: "Amy Winehouse",
    album: "Back to Black",
    year: 2006
  }
  // sort by artist
].sort((a, b) => (a.artist > b.artist ? 1 : -1));

const degreesCelcius = "\u00b0C";
const puree = "pur\u00e9e";

export const recipes = [
  {
    id: "lemon_drizzle",
    title: "lemon drizzle loaf cake",
    ingredients: [
      "220g unsalted butter (softened)",
      "220g golden caster sugar",
      "220g self-raising flour",
      "4 eggs",
      "3 large lemons (juice and zest)",
      "100g icing sugar"
    ],
    method: [
      "preheat oven to 150" + degreesCelcius,
      "mix butter, sugar, flour, eggs",
      "stir in lemon zest, juice of 1 lemon",
      "spoon mixture into non-stick loaf tin (ensure flat mixture flat)",
      "bake for 50-60 mins (until skewer runs clean)",
      "mix juice of remaining 2 lemons with icing sugar in Pyrex jug",
      "prod all over cake to create holes, leave to cool",
      "evenly coat drizzle topping"
    ],
    makes: "10 slices"
  },
  {
    id: "banana_cake",
    title: "banana loaf cake",
    ingredients: [
      "210g unsalted butter (softened)",
      "210g golden caster sugar",
      "210g self-raising flour",
      "1.5 tsp baking powder",
      "3 eggs",
      "3 very ripe bananas",
      "1 tsp cinnamon",
      "1 tsp freshly ground nutmeg",
      "75g icing sugar (4 tsp water)"
    ],
    toServe: ["banana chips"],
    method: [
      "preheat oven to 150" + degreesCelcius,
      "cream butter, sugar",
      "fold in beaten eggs, flour, baking powder",
      "mash bananas, add to mixture",
      "stir in cinnamon, nutmeg",
      "transfer mixture to non-stick loaf tin, create sunken centre so it rises to form flat top",
      "bake for 50-60 mins (until skewer runs clean)",
      "allow to cool",
      "drizzle over icing"
    ],
    makes: "10 slices"
  },
  {
    id: "ratatouille",
    title: "ratatouille",
    ingredients: [
      "3 medium onions",
      "5 garlic cloves",
      "1 pack baby chestnut mushrooms",
      "140g can tomato " + puree,
      "3 mixed peppers",
      "1 fresh red chilli",
      "2 courgettes",
      "1 aubergine",
      "1 tbsp dried thyme",
      "1 tbsp dried basil",
      "1 tbsp dried oregano",
      "1 tbsp dried rosemary",
      "1 tsp salt",
      "1 tsp ground black pepper",
      "800g (2 cans) chopped tomatoes"
    ],
    method: [
      "fry sliced onions, garlic and mushrooms",
      "shower with herbs and tomato " + puree,
      "add sliced peppers and finely chopped chilli",
      "add sliced courgettes and aubergine",
      "add water to prevent from drying out",
      "allow the vegetables to soften",
      "add chopped tomatoes and passata, stir",
      "cook on medium heat with lid on, regularly stirring"
    ],
    makes: "8 portions"
  },
  {
    id: "gingerbread",
    title: "gingerbread people",
    ingredients: [
      "110g margarine",
      "1 egg yolk",
      "85g golden syrup",
      "110g brown sugar",
      "280g plain flour",
      "1 tsp bicarbonate of soda",
      "3 tsp ground ginger"
    ],
    toServe: ["icing (icing sugar and water)", "jelly beans"],

    method: [
      "preheat oven to 180" + degreesCelcius,
      "mix wet ingredients together (no need to melt margarine)",
      "add dry ingredients and stir",
      "dust worktop with plain flour and roll mixture into slab",
      "use cutter to create people and transfer to non-stick baking tray",
      "bake for 7-10 mins"
    ],
    makes: "10 people plus some leftover blobs"
  },
  {
    id: "bolognese",
    title: "bolognese",
    ingredients: [
      "4 medium celery sticks",
      "2 carrots",
      "2 white onions",
      "250g chestnut mushrooms",
      "5 garlic cloves",
      "500g beef mince (5% fat)",
      "2 tbsp tomato " + puree,
      "20g fresh basil",
      "5 sprigs fresh rosemary",
      "1 tbsp dried oregano",
      "1 tsp salt",
      "1 tsp ground black pepper",
      "125ml red wine",
      "400g chopped tomatoes",
      "500g passata",
      "1 stock cube (beef or veg)"
    ],
    toServe: [
      "pasta or rice",
      "parmesan or mature cheddar",
      "broccoli or tenderstem"
    ],
    method: [
      "blend fresh herbs with passata and stock cube",
      "fry diced celery, carrot, onion, crushed garlic",
      "add mince, mushrooms",
      "add tomato " + puree + ", wine, dried herbs",
      "once brown, add passata mix, chopped tomatoes",
      "reduce heat and cover for over an hour"
    ],
    makes: "7 portions"
  },
  {
    id: "piri_piri_chicken",
    title: "piri piri chicken",
    ingredients: [
      "2 small red bell peppers (or 1.5 large)",
      "1 small white onion",
      "1 garlic bulb (all cloves)",
      "10 red bird eye chillis (typically 1 bag)",
      "75ml olive oil",
      "125ml white wine vinegar",
      "1 tbsp dried oregano",
      "1 tbsp smoked paprika",
      "1 tbsp salt",
      "1 tsp ground black pepper",
      "1 small lemon (zest and juice)",
      "800g (2 regular packs) chicken breast"
    ],
    toServe: ["mashed potato or vegetable rice", "sweetcorn or tenderstem"],
    method: [
      "chop the pepper and onion, peel the garlic",
      "add everything to a blender and blend until smooth",
      "transfer to a saucepan and cook on low heat for 20 minutes",
      "leave to cool",
      "massage the chicken with the sauce and leave to marinade for 6 hours",
      "bake in covered casserole dish for 35 minutes (until chicken reaches 75" +
        degreesCelcius +
        ")",
      "serve with mashed potato and greens or rice and sweetcorn"
    ],
    makes: "5 portions"
  },

  {
    id: "risotto",
    title: "risotto",
    ingredients: [
      "2 small white onions",
      "2 large leeks or 1 pack baby leeks",
      "7 garlic cloves",
      "2 tbsp cider vinegar",
      "3 sprigs fresh rosemary",
      "1 tbsp dried thyme",
      "1 tsp salt",
      "1 tsp ground black pepper",
      "500g risotto rice",
      "2L vegetable stock (3 cubes)",
      "150g petit pois",
      "200g fine green beans",
      "75g prosciutto"
    ],
    toServe: ["parmesan", "fresh lemon juice"],
    method: [
      "fry diced onions, sliced leeks, crushed garlic",
      "once softened, add herbs and vinegar",
      "add rice, lightly fry",
      "begin adding stock, monitor",
      "keep stirring, add more stock",
      "add beans when you like depending on desired crunch",
      "add petit pois towards end",
      "remove from heat, stir in thinly-sliced prosciutto"
    ],
    makes: "7 portions"
  },
  {
    id: "pancakes",
    title: "pancakes",
    ingredients: ["100ml milk", "50g plain flour", "1 egg"],
    toServe: [
      "savoury: bacon, Red Leicester, avocado",
      "sweet: banana, berries, golden syrup"
    ],
    method: [
      "beat milk, flour, egg in a Pyrex jug",
      "heat oil in large frying pan",
      "add enough batter to the centre of the pan and spread",
      "flip when crispy on one side"
    ],
    makes: "2"
  },
  {
    id: "courgette_loaf",
    title: "courgette loaf cake",
    ingredients: [
      "300g courgette (less than 2 whole)",
      "1 regular ripe avocado (not large)",
      "75ml sunflower oil",
      "175g golden caster sugar",
      "3 large eggs",
      "3 limes",
      "1 tsp vanilla extract",
      "1 tsp baking powder",
      "300g self-raising flour",
      "175g icing sugar"
    ],
    method: [
      "preheat oven to 150" + degreesCelcius,
      "coarsely grate courgette and dry with clean tea towel",
      "blend avocado and sunflower oil",
      "zest 2 limes using fine grater setting",
      "mix courgette, avocado oil, sugar, lime zest, eggs and vanilla extract",
      "add baking powder and fold in flour",
      "transfer mixture to non-stick loaf tin",
      "bake for 50-60 minutes (until skewer runs clean)",
      "leave to cool for 20 minutes",
      "transfer from loaf tin to wire rack",
      "poke copious holes into loaf and drizzle over juice from the 2 naked limes",
      "mix icing sugar with enough juice from the remaining lime for it to become runny yet stiff",
      "drizzle loaf with icing and scatter with zest from remaining lime"
    ],
    makes: "10 large slices"
  },
  {
    id: "smoothie",
    title: "breakfast smoothie",
    ingredients: [
      "1 banana",
      "handful spinach leaves",
      "2 tbsp oats (optional)",
      "1 heaped tbsp natural yoghurt",
      "125ml apple juice",
      "dash fresh citrus juice (lemon or lime)",
      "handful frozen fruit (berries, grapes or mango, pineapple)"
    ],
    method: ["add all ingredients to blender", "blend until smooth"],
    makes: "350ml"
  },
  {
    id: "carbonara",
    title: "carbonara",
    ingredients: [
      "300g smoked streaky bacon",
      "500g spaghetti or tagliatele",
      "2 tbsp butter",
      "2 medium or 3 small white onions",
      "5 garlic cloves",
      "250g chestnut mushrooms",
      "250g spinach",
      "1 tbsp dried thyme",
      "1 tbsp dried mixed herbs",
      "1 tsp ground black pepper",
      "4 eggs",
      "100g parmesan",
      "250ml double cream"
    ],
    method: [
      "grill bacon until crispy",
      "boil pasta until al dente",
      "fry sliced onions and mushrooms in butter",
      "add crushed garlic, spinach and seasoning",
      "whisk 4 eggs with freshly grated parmesan",
      "drain the pasta and transfer to frying pan",
      "pour over egg mix and stir",
      "add cream to loosen the pasta"
    ],
    makes: "7 portions"
  },
  {
    id: "meatballs",
    title: "meatballs",
    ingredients: [
      "2 white onions",
      "2 carrots",
      "4 celery sticks",
      "7 garlic cloves",
      "1 or 2 fresh mixed chillis (red or green)",
      "5 sprigs fresh rosemary (no stalk)",
      "1 tbsp dried mixed herbs",
      "1 tsp crushed chillis",
      "1 tsp table salt",
      "1 tsp ground black pepper",
      "1 tbsp tomato " + puree,
      "1kg IKEA frozen meatballs",
      "400g can chopped tomatoes",
      "500g carton passata",
      "250g mascarpone"
    ],
    toServe: [
      "spaghetti, tricolour pasta or garlic rice",
      "broccoli or asparagus"
    ],
    method: [
      "fry diced onion, carrot, celery",
      "add crushed garlic, fresh chillis, tomato " +
        puree +
        ", fresh/dried herbs, salt, pepper",
      "place meatballs in slow cooker",
      "add frying pan contents to meatballs, stir",
      "add chopped tomatoes, stir",
      "add passata, stir",
      "slow cook on low for 4-5 hours",
      "swirl in mascarpone"
    ],
    makes: "7 portions"
  },
  {
    id: "key_lime_pie",
    title: "key lime pie",
    ingredients: [
      "300g ginger nuts",
      "150g unsalted butter",
      "400g condensed milk",
      "3 egg yolks",
      "6 limes",
      "300ml double cream",
      "1 tbsp icing sugar"
    ],
    toServe: ["1 punnet fresh raspberries"],
    method: [
      "preheat oven to 160" + degreesCelcius,
      "crush biscuits with food processor (bit by bit)",
      "melt butter and add crushed biscuits",
      "press biscuit mix into base of 20cm non-stick cake tin",
      "bake for 10 minutes, then leave to cool",
      "whisk 3 egg yolks",
      "add condensed milk and electric whisk for 3 minutes",
      "add juice of 6 limes and zest of 5, electric whisk for 3 minutes",
      "pour filling into cooled biscuit base and bake for 15 minutes",
      "leave to cool, then refridgerate for 3+ hours or overnight",
      "whip cream with icing sugar and zest of 6th lime",
      "cover the cooled pie with the whipped cream and top with raspberries"
    ],
    makes: "10 pieces"
  },
  {
    id: "pesto",
    title: "pesto",
    ingredients: [
      "25g fresh basil",
      "25g pine nuts",
      "25g parmesan (freshly grated)",
      "1 or 2 garlic cloves",
      "2 tbsp fresh lemon juice",
      "1 tbsp cider vinegar",
      "0.25 tsp ground black pepper",
      "100ml olive oil"
    ],
    method: ["transfer all ingredients to blender", "blend until smooth"],
    makes: "125g"
  },
  {
    id: "banoffee_pie",
    title: "banoffee pie",
    ingredients: [
      "250g Hobnobs",
      "200g unsalted butter (125g for base, 75g for caramel",
      "75g dark brown sugar",
      "400g can condensed milk",
      "1 tsp vanilla extract",
      "3 large just-ripe bananas",
      "300ml double cream"
    ],
    toServe: ["50g dark chocolate (melted) or 1 tbsp cocoa powder"],
    method: [
      "crush the biscuits in a blender",
      "melt the butter for the base, stir in biscuits",
      "transfer to cake tin, chill for 15 minutes",
      "heat remaining butter with sugar",
      "add condensed milk, bring to boil, then stir continuously for 2-3 minutes on a lower heat",
      "add vanilla extract and layer on top of biscuit base",
      "chill overnight",
      "peel and slice bananas, arrange atop caramel",
      "whip cream to soft peaks and pour over banana layer",
      "flatten cream and refrigerate for 1 hour"
    ],
    makes: "10 segments"
  },
  {
    title: "mac and cheese",
    ingredients: [
      "500g pasta (macaroni, conchigle)",
      "1 large cauliflower or 2 small",
      "1L milk",
      "100g plain flour",
      "100g butter",
      "125g mature cheddar",
      "125g red leicester",
      "50g parmesan",
      "1 large white onion or 2 small",
      "50g jalape\u00f1os (drained weight)",
      "2 sweet red pointed peppers",
      "1 tbsp dried oregano",
      "1 tbsp dried mixed herbs",
      "1 tsp salt",
      "1 tsp ground black pepper",
      "3 garlic cloves",
      "fresh thyme",
      "75g golden breadcrumbs"
    ],
    method: [
      "boil pasta for 3 minutes, add cauliflower for 7 minutes",
      "drain, reserving 150ml cooking water",
      "fry onion, peppers, jalape\u00f1os with the herbs",
      "melt butter, add flour, slowly pour in milk",
      "allow to thicken, remove from heat, stir in cheese",
      "mix breadcrumbs, crushed garlic, thyme",
      "coat pasta with crunch topping",
      "grill for 5-10 minutes"
    ],
    makes: "6-7 portions"
  },
  {
    id: "flapjacks",
    title: "flapjacks",
    ingredients: [
      "140g butter",
      "90g golden syrup",
      "50g brown sugar (light or dark)",
      "200g oats",
      "pinch salt",
      "100g dried apricots",
      "50g dried blueberries",
      "50g dried cranberries"
    ],
    method: [
      "preheat oven to 150" + degreesCelcius,
      "melt butter with golden syrup and sugar",
      "mix oats together with finely chopped fruit, salt",
      "pour in melted butter mix, stir thoroughly",
      "transfer to non-stick loaf tin",
      "flatten mixture to cover base",
      "bake for 15-20 minutes (depending how gooey you desire, it will solidify overnight somewhat)",
      "leave to cool before cutting into suitably-sized chunks"
    ],
    makes: "over 12 chunks"
  },
  {
    id: "lasagne",
    title: "lasagne",
    ingredients: [
      "500g beef mince (5% fat)",
      "2 small white onions",
      "5 garlic cloves",
      "2 red peppers",
      "1 tsp fennel seeds",
      "1 tsp dried oregano",
      "1 tsp sugar",
      "1 tsp salt",
      "0.5 tsp ground black pepper",
      "25g bag fresh basil",
      "25g bag fresh parsley",
      "800g (2 cans) chopped tomatoes",
      "140g can tomato " + puree,
      "100ml chicken stock (1 cube)",
      "10 lasagne sheets",
      "500g ricotta cheese",
      "2 eggs",
      "75ml milk",
      "pinch ground nutmeg, freshly ground rock salt and black pepper",
      "150g fresh mozzarella (grated)",
      "50g parmesan"
    ],
    toServe: ["spinach", "cucumber", "fresh tomatoes"],
    method: [
      "fry mince with diced onions, red pepper, garlic until brown",
      "add dried herbs, blended fresh herbs, tomato " + puree,
      "add chopped tomatoes, chicken stock",
      "reduce heat, simmer for 2 hours, stirring intermittently",
      "soak lasagne sheets in water for 30 minutes",
      "freeze mozarella for 15 minutes, grate",
      "mix ricotta with eggs, milk, grated mozzarella, nutmeg, salt and pepper",
      "spoon a third of the meat mix into oven dish and cover with lasagne sheets",
      "layer a third of the ricotta mix",
      "repeat previous 2 steps twice, finish with parmesan topping",
      "bake for 20 minutes covered with foil, then 20 final minutes without"
    ],
    makes: "6 portions"
  },
  {
    id: "watermelon_cooler",
    title: "watermelon cooler",
    ingredients: [
      "500g chopped watermelon (approx. half a mini/baby watermelon)",
      "3 limes",
      "3 large basil leaves",
      "1 tbsp agave nectar"
    ],
    toServe: ["ice"],
    method: [
      "chop the watermelon and remove as many seeds as you can be bothered to",
      "transfer to blender along with basil, nectar and the juice of 3 limes",
      "blend until smooth",
      "pour over a tumbler of ice"
    ],
    makes: "700ml"
  },
  {
    id: "crumble",
    title: "crumble",
    ingredients: [
      "300g plain flour",
      "150g golden caster sugar",
      "150g unsalted butter (softened)",
      "700g diced Bramley apple (approx. 7 small)",
      "350ml water",
      "110g demerera sugar",
      "350g bag frozen raspberries",
      "150g punnet fresh blackberries",
      "1 tbsp ground cinnamon"
    ],
    toServe: ["cream or custard"],
    method: [
      "preheat oven to 170" + degreesCelcius,
      "mix flour, sugar",
      "add diced butter, use fingertips to form light crumble, don't overwork",
      "blind bake for 20 minutes",
      "peel, core, chop apple into cubes",
      "stew apple in water",
      "once softened, add sugar, raspberries and blackberries, stir",
      "transfer fruit compote to oven dish, top with half-baked crumble topping",
      "bake for further 20 minutes"
    ],
    makes: "8 portions"
  },
  {
    title: "jambalaya",
    ingredients: [
      "1 white onion",
      "125g bunch spring onion (topped, tailed)",
      "5 garlic cloves (crushed)",
      "2 peppers (yellow, orange or red)",
      "1 fresh chilli (red or green)",
      "225g chorizo ring",
      "800g chopped tomatoes",
      "400ml stock (chicken or veg)",
      "1 tbsp cajun seasoning",
      "1 tbsp smoked paprika",
      "1 tbsp dried mixed herbs",
      "1 tbsp dried oregano",
      "1 tsp ground black pepper",
      "1 tsp salt",
      "400g long grain rice"
    ],
    toServe: ["mature cheddar"],
    method: [
      "remove chorizo skin, cut into edible chunks",
      "transfer all ingredients to slow cooker apart from rice",
      "cook on low for 3-4 hours",
      "add rice",
      "cook on high for 20 minutes",
      "stir, cook for final 20 minutes"
    ],
    makes: "6 portions",
    hide: false
  },
  {
    id: "quiche",
    title: "quiche",
    ingredients: [
      "375g shortcrust pastry (or enough to line quiche tin)",
      "240g salmon (skinless, boneless)",
      "100ml milk",
      "25g butter",
      "1 white onion",
      "2 garlic cloves",
      "100g asparagus",
      "75g frozen petit pois",
      "200ml crème fraîche",
      "4 large beaten eggs (1 for glaze, rest for filling)",
      "1 tbsp fresh dill (no stalk)",
      "1 tbsp dried mixed herbs",
      "1 tsp salt",
      "1 tsp ground black pepper",
      "0.5 lemon (zest + juice)",
      "50g mature cheddar (finely grated)"
    ],
    method: [
      "preheat oven to 180" + degreesCelcius,
      "roll out pastry into shape that will cover quiche tin",
      "carefully place pastry over tin, ensuring all sides covered",
      "gently press pastry into sides of tin (use ball of floured pastry)",
      "prick base with fork",
      "blind bake (with baking paper and beads) for 15 minutes",
      "remove baking paper and beads, glaze with beaten egg",
      "bake for further 15 minutes",
      "poach salmon in milk (bring to simmer on medium heat, leave for 5 minutes)",
      "separate milk and salmon, leave each to cool",
      "lightly fry onion, garlic in butter",
      "blanch petit pois, asparagus (boil for 3 minutes then cool rapidly)",
      "combine all cooled ingredients to form filling",
      "pour filling all over pastry",
      "bake for 45 minutes (or until filling is set)"
    ],
    makes: "6 good slices"
  },
  {
    id: "porridge",
    title: "porridge",
    ingredients: [
      "50g oats",
      "200ml milk (+ extra dash at end)",
      "1 tsp granulated sugar",
      "1 tsp ground cinnamon",
      "100g frozen fruit (raspberries, blueberries, pomegranate seeds)"
    ],
    method: [
      "transfer all ingredients to heating device of choice",
      "heat, stir until thick and creamy (approx. 2:30 if using microwave with 1 break to stir)",
      "stir in final dash of milk to prevent drying out"
    ],
    makes: "1 portion"
  },
  {
    id: "cumberland_pie",
    title: "cumberland pie",
    ingredients: [
      "2 white onions",
      "1 swede (approx. 500g)",
      "3 carrots (approx. 450g)",
      "5 garlic cloves",
      "500g lamb or beef mince (10% or 5% fat)",
      "4 sprigs fresh rosemary",
      "1 tbsp dried thyme",
      "1 tsp salt",
      "1 tsp ground black pepper",
      "3 tbsp Worcester sauce",
      "2 tbsp tomato " + puree,
      "1-2 tbsp mint sauce (optional)",
      "500ml chicken stock (1 cube)",
      "2 tbsp plain flour",
      "250g petit pois",
      "1.25kg Maris Piper potatoes (weight after peeling, before boiling)",
      "100g butter",
      "150ml milk",
      "100g mature cheddar (finely grated)",
      "50g golden breadcrumbs",
      "1 tsp dried mixed herbs"
    ],
    method: [
      "fry diced onion, carrot, swede, garlic",
      "(once softened) add mince",
      "season with fresh/dried herbs, salt, pepper",
      "add Worcester sauce, tomato " + puree + " (+ mint sauce)",
      "(once brown) add stock, flour",
      "reduce heat and cover for 1-2 hours or transfer to slow cooker and cook on low for 3-4 hours",
      "peel, boil potatoes",
      "preheat oven to 180" + degreesCelcius,
      "mash potatoes",
      "loosen/season potato with milk, butter, salt, pepper",
      "mix cheese, breadcrumbs, mixed herbs to make topping",
      "stir petit pois into mince filling",
      "spoon mince filling into oven dish, cover with potato and topping",
      "bake for 50 minutes"
    ],
    makes: "8 portions"
  },
  {
    id: "sweet_and_sour",
    title: "sweet and sour",
    ingredients: [
      "300ml pineapple juice (2 tbsp for slurry, rest for sauce base)",
      "2 tbsp vinegar (rice or white wine)",
      "2 tbsp ketchup",
      "2 tbsp light brown sugar",
      "2 tbsp soy sauce (light or dark)",
      "1 tsp dried crushed chillis",
      "75g cornflour (1 tbsp for slurry, 65g for chicken coating)",
      "2 chicken breasts or 1 small cauliflower",
      "1 tsp salt",
      "0.5 tsp ground black pepper",
      "1 tbsp veg oil (for marinade, + extra for stir-frying veg)",
      "1 egg",
      "1 white onion",
      "1 bunch spring onions",
      "2 peppers (red and green)",
      "3 garlic cloves",
      "25g fresh ginger (peeled, grated)",
      "200g pineapple"
    ],
    toServe: ["egg fried rice", "rice crackers"],
    method: [
      "marinade diced chicken or cauliflower in oil, salt, pepper for 20 minutes",
      "make slurry from cornflour, pineapple juice",
      "bring vinegar, ketchup, soy, sugar, crushed chillis, pineapple juice to boil",
      "remove sauce from heat, leave to cool",
      "add beaten egg to marinaded chicken or cauliflower, stir",
      "add cornflour to chicken or cauliflower, stir until unevenly coated",
      "fry coated chicken or cauliflower on medium-high, turning regularly (approx. 6 minutes for chicken, less for cauliflower)",
      "set chicken or cauliflower aside",
      "fry chunky onions, peppers, garlic, ginger",
      "(once veg slightly softened) add fried chicken or cauliflower, pineapple, sauce, simmer for 5 minutes",
      "add cornflour slurry to wok, cook for 1 minute until thick, glossy"
    ],
    makes: "4 portions"
  },
  {
    id: "egg_fried_rice",
    title: "egg fried rice",
    ingredients: [
      "250g jasmine rice",
      "2 tbsp olive oil",
      "2 tbsp soy sauce (light or dark)",
      "4 large eggs",
      "150g frozen mixed veg (thawed)",
      "1 small red onion (diced)"
    ],
    method: [
      "cook rice as per pack instructions",
      "drain rice, leave to cool, chill overnight",
      "heat 0.5 tbsp oil on high heat",
      "fry 3 beaten eggs for 1 minute, set aside",
      "fry onion in 1.5 tbsp oil for 2 minutes",
      "add thawed mixed veg, fry for 1 minute",
      "add rice to eggs, stir-fry for 2-3 minutes (until rice cooked through)",
      "pour over 1 beaten egg, stir-fry for 1 minute",
      "add soy sauce, scrambled egg, stir-fry for 1-2 final minutes"
    ],
    makes: "4 portions"
  }
  // sort by recipe title
].sort((a, b) => (a.title > b.title ? 1 : -1));
