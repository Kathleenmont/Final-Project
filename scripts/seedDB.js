const mongoose = require("mongoose");
const db = require("../models");

// This file empties the foods collection and inserts the foods below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/fooddb"
);

const foodSeed = [
{
    continent: "North America",
    country: "Mexico",
    dishName: "Mole Poblano con Pollo",
    description: "Mole sauce from Puebla, contains around 20 ingredients, including chocolate and chile peppers, covering chicken. Usually with rice on the side.",
    image: "https://i.pinimg.com/originals/e6/72/b7/e672b7e12cf5dfe9ce28ccee4d5d1f5d.png"
  },
  {
    continent: "North America",
    country: "Mexico",
    dishName: "Pozole",
    description: "Stew with Hominy, meat (usually pork or chicken) chile peppers, and seasoning.",
    image: "https://i1.wp.com/mealsheelsandcocktails.com/wp-content/uploads/2018/03/Pork-Pozole-1.jpg?fit=3008%2C2000&ssl=1"
  },
{
    continent: "North America",
    country: "Mexico",
    dishName: "Elote",
    description: "Hot corn on the cob with typically butter or mayonnaise, cheese, chile, and lime. ",
    image: "https://hispanickitchen.com/wp-content/uploads/2017/06/Elote-asado-3-2.jpg"
  },
{
    continent: "North America",
    country: "Mexico",
    dishName: "Camarones al Mojo de Ajo",
    description: "Garlic shrimp dish usually served with tortillas on the side.",
    image: "https://i.pinimg.com/originals/39/cf/95/39cf95e67568457987537adcfcd4c6a6.gif"
  },
{
    continent: "North America",
    country: "Mexico",
    dishName: "Quesadilla de Huitlacoche",
    description: "Quesedilla with corn fungus and cheese.",
    image: "https://images1.laweekly.com/imager/u/original/5967352/huitlacoche-quesadilla.jpg"
  },
{
    continent: "North America",
    country: "Canada",
    dishName: "Poutine",
    description: "Fries, cheese curds, and rich gravy.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/La_Banquise_Poutine_%28cropped%29.jpg"
  },
{
    continent: "North America",
    country: "Canada",
    dishName: "Montreal-style Bagels",
    description: "Sweeter, denser and thinner than their NYC counterparts, Montreal bagels are baked in wood fire ovens and are often covered in poppy or sesame seeds.",
    image: "https://www.tripsavvy.com/thmb/dl8OXR2b0Sc3pZQXK4Df8xq1vGE=/1600x1058/filters:no_upscale():max_bytes(150000):strip_icc()/montreal-bagels-better-than-new-york-patrick-donovan-getty-595585263df78cdc294f417c.jpg"
  },
{
    continent: "North America",
    country: "Canada",
    dishName: "Bannock",
    description: "Bannock is a simple bread that was once a key staple in the diets of Canada’s Indigenous peoples. Modern takes on bannock include baked versions (which are heavy/dense) and fried versions (which are crispy and fluffy on the inside). ",
    image: "http://media.foodnetwork.ca/recipetracker/dmm/B/A/Bannock_001.jpg"
  },
{
    continent: "North America",
    country: "Canada",
    dishName: "Peameal Bacon",
    description: "This Canadian style bacon is made from lean boneless pork loin, which is trimmed, wet-cured and then rolled in cornmeal, giving it its distinctive yellow crust. It’s juicier than American-style bacon, but also leaner.",
    image: "https://www.cbc.ca/stevenandchris/content/images/_full/roasted_peameal_bacon_sandwich.jpg"
  },
{
    continent: "North America",
    country: "Canada",
    dishName: "Pouding chômeur",
    description: 'Literally translated to the unemployment pudding", this French Canadian dessert was created during the Great Depression. Made up of cake batter topped with hot syrup.',
    image: "https://chefcuisto.com/files/2018/12/pouding-chomeur-grand-maman.jpg"
  },
{
    continent: "North America",
    country: "United States",
    dishName: "chicken and waffles",
    description: "A southern dish, fried chicken over a waffle with butter and syrup",
    image: "https://www.lovelesscafe.com/uploads/recipeimages/CHICKEN_N_WAFFLES-ALT.jpg"
  },
{
    continent: "North America",
    country: "United States",
    dishName: "Clam Chowder",
    description: "With regional differences, this dish is a thick chowder made from clams, potatoes, onions, sometimes salt pork, and milk or cream.",
    image: "https://honest-food.net/wp-content/uploads/2012/05/maine-clam-chowder.jpg"
  },
{
    continent: "North America",
    country: "United States",
    dishName: "Reuben Sandwich",
    description: "The Reuben is a grilled sandwich composed of corned beef, Swiss cheese, sauerkraut, and Russian dressing, grilled between slices of rye bread.",
    image: "http://embed.widencdn.net/img/beef/hgm3cuqxag/exact/classic-reuben-sandwich-horizontal.tif?keep=c&u=7fueml"
  },
{
    continent: "North America",
    country: "United States",
    dishName: "Jambalaya",
    description: "A Southern US dish, A combination of chicken and andouille sausage with savory flavors of onions, celery, bell peppers, rice and Cajun spice. Some versions have a tomato base.",
    image: "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_900x675/public/creole-seafood-jambalaya-sl.jpg?itok=Fldg1x1M"
  },
{
    continent: "North America",
    country: "United States",
    dishName: "Macaroni and cheese",
    description: "This dish of cooked macaroni pasta and a cheese sauce, most commonly cheddar.",
    image: "https://www.simplyrecipes.com/wp-content/uploads/2011/04/civil-war-mac-cheese-horiz-a-1800.jpg"
  },
{
    continent: "North America",
    country: "Puerto Rico",
    dishName: "Mofongo",
    description: "A mix of mashed plantains, seasonings, and an unlimited choice of fillings—including vegetables, shrimp, steak, pork, and seafood. The plantains themselves are picked green, then fried, then mashed to form a ball around a savory middle.",
    image: "https://i.pinimg.com/originals/aa/28/f7/aa28f74b0533b2c08b2a6c5287f4fbea.jpg"
  },
{
    continent: "North America",
    country: "Puerto Rico",
    dishName: "Lechón Asado",
    description: "This dish is prepared by slow roasting the whole pig— with salt, pepper, oregano, garlic, and ajíes dulces (small sweet cooking peppers)—over a wood charcoal fire and is commonly served cafeteria style with people taking their place in line to sample their favorite cuts.",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/ae/b0/cd/roast-pork-rice-with.jpg"
  },
{
    continent: "North America",
    country: "Puerto Rico",
    dishName: "Pollo Guisado",
    description:
      "A one-pot chicken stew, Dark meat chicken is browned and cooked down with Adobo, sofrito, achiote, garlic, cilantro, oregano, and other seasonings.",
    image: "https://i.ytimg.com/vi/nGDrrGUoR_k/maxresdefault.jpg"
  },
{
    continent: "North America",
    country: "Puerto Rico",
    dishName: "Pasteles",
    description:
      "Pasteles combine soft vegetable dough and meat filling, steamed in banana leaves for a flavorful little pack of delicious food. The dough is a seasoned mixture of grated green plantains, green bananas, malanga/yutía (a root vegetable similar to yuca), and potato or pumpkin with milk.",
    image: "https://cdn.shopify.com/s/files/1/2396/9693/products/pasteles4_530x@2x.jpg?v=1553715055"
  },
{
    continent: "North America",
    country: "Puerto Rico",
    dishName: "Pastelón",
    description:
      "Pastelón a classic Puerto Rican dish made with layers of thinly-sliced plantains, ground beef, and cheese! ",
    image: "https://images-gmi-pmc.edge-generalmills.com/7a47adaa-7a31-458a-a2b6-b052ae6066ee.jpg"
  },
{
    continent: "South America",
    country: "Peru",
    dishName: "Lomo Saltado",
    description:
      "this dish represents a fusion of Chinese stir frying and classic Peruvian ingredients. Juicy strips of soy-marinated beef (or alpaca), onions, tomatoes, aji chilies, and other spices are stir-fried until the beef is just cooked and the tomatoes and onions start to form a robust, meaty gravy.",
    image: "https://dinnerthendessert.com/wp-content/uploads/2015/05/Lomo-Saltado-Side.jpg"
  },
{
    continent: "South America",
    country: "Peru",
    dishName: "Aji de Gallina",
    description:
      "Shredded chicken in a thick sauce made with cream, ground walnuts, cheese, and aji amarillo.",
    image: "https://okdiario.com/img/2018/10/10/receta-de-aji-de-gallina-655x368.jpg"
  },
{
    continent: "South America",
    country: "Peru",
    dishName: "Papas a la Huancaina",
    description:
      "Sliced yellow potatoes are drenched in a purée of queso fresco, aji amarillo, garlic, evaporated milk, lime juice and saltine crackers.",
    image: "https://i.pinimg.com/originals/19/8a/a9/198aa9ca8f6740c17d901a5703a97248.jpg"
  },
{
    continent: "South America",
    country: "Peru",
    dishName: "Rocoto Relleno",
    description:
      "Red aji rocoto chilies are stuffed with a cooked mix of ground beef, onions, garlic, olives, raisins, herbs, and spices, then topped with queso fresco and baked in an egg-and-milk sauce.",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/34/27/35/rocoto-relleno.jpg"
  },
{
    continent: "South America",
    country: "Peru",
    dishName: "Pollo a la Brasa",
    description:
      "A whole chicken is marinated in a powerful combination of garlic, herbs, and spices before roasting on a spit. Perhaps even more beloved than the chicken itself is the green huacatay (Peruvian black mint) sauce served next to it: every chicken comes with it, though the recipe often varies and is a closely-guarded secret. ",
    image: "https://img.peru21.pe/files/ec_article_multimedia_gallery/files/crop/uploads/2018/01/18/5a60ef588bdb6.r_1531667673018.517-547-2682-1790.jpeg"
  },
{
    continent: "South America",
    country: "Colombia",
    dishName: "Arepa",
    description: "A circular bread made from fresh cornmeal, arepas are the foundations of many meals, and often times they’re eaten alone. Toppings can range from simply butter and cheese to heaping piles of meat and vegetables.",
    image: "https://cdn.colombia.com/sdi/2011/08/05/arepas-blancas-con-queso-523847.jpg"
  },
{
    continent: "South America",
    country: "Colombia",
    dishName: "Bandeja Paisa",
    description:
      "On one plate you’ll normally find steak, ground beef, chicharrones, rice, beans, an egg, avocado, an arepa, and plantains.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Bandeja_paisa_30062011.jpg/1200px-Bandeja_paisa_30062011.jpg"
  },
{
    continent: "South America",
    country: "Colombia",
    dishName: "Cazuela de mariscos",
    description: "Cazuela de mariscos (seafood pot) is a creamy, seafood stew which is popular along the coast. It’s made with coconut milk, various vegetables and spices, although prawns are almost always used. ",
    image: "https://www.hotelelmiradordearboletes.com/images/restaurantes/recetas/casuela-de-mariscos.jpg"
  },
{
    continent: "South America",
    country: "Colombia",
    dishName: "Arroz con pollo",
    description: "Arroz con pollo translates as rice and chicken, stewed together with chicken stock.",
    image: "http://www.somoscolombianos.com/wp-content/uploads/2012/02/receta-arroz-pollo.jpg"
  },
{
    continent: "South America",
    country: "Colombia",
    dishName: "Pandebono",
    description: "Pan de bono is a small, round bread-like bite which is flavored with a sweet cheese. Popular all over the country, pan de bono is eaten as a snack throughout the day and is often served alongside a delicious hot chocolate early in the morning",
    image: "https://ugc-02.cafemomstatic.com/gen/full/2016/03/31/06/6h/a1/pozgjrhm8s.jpg"
  },
{
    continent: "South America",
    country: "Brazil",
    dishName: "Moqueca",
    description: "Baianos (residents of Bahia, in the north-east of the country) and Capixabas (from the neighbouring state of Espírito Santo) both lay claim to the origins of the dish, and both serve up equally tasty variations. At its simplest, fish and/or other seafood are stewed in diced tomatoes, onions and coriander. The Capixabas add annatto seeds for a natural red food colouring, while the Baianos serve a heavier version, made with palm oil, peppers and coconut milk. It’s teamed with rice, farofa (toasted manioc flour) and pirão (a spicy fish porridge made with manioc flour).",
    image: "https://static01.nyt.com/images/2016/03/16/dining/16MOQUECA/16MOQUECA-articleLarge.jpg"
  },
{
    continent: "South America",
    country: "Brazil",
    dishName: "Feijoada",
    description: "Feijoada is a hearty stew of black beans, sausages and various cuts of pork, feijoada done the old fashioned way takes up to 24 hours to make, including soaking the beans and desalting the pork. Most Brazilians go out to restaurants and bars to eat feijoada, and it's traditionally eaten on Wednesdays and Saturdays. Rice, kale, orange slices, farofa (toasted manioc flour) and pork scratchings are served on the side, along with a tipple of cachaça to ease digestion.",
    image: "https://img.cybercook.com.br/receitas/776/feijoada-360x220.jpeg"
  },
{
    continent: "South America",
    country: "Brazil",
    dishName: "Coxinhas",
    description: 'Little raindrops of fried goodness usually filled with chicken and a very creamy cheese called "catupiry."',
    image: "https://guiadacozinha.com.br/wp-content/uploads/2017/03/coxinha-de-frango-cremosa.jpg"
  },
{
    continent: "South America",
    country: "Brazil",
    dishName: "Salpicão",
    description: "A salad made of chicken, ham, raisins, carrots, apples, olives, and mayonnaise, and topped with shoestring potatoes.",
    image: "https://www.receitasdecomidas.com.br/wp-content/uploads/2016/12/salpic%C3%A3o-420x279.jpg"
  },
{
    continent: "South America",
    country: "Brazil",
    dishName: "Empadão",
    description: "A baked casserole usually made with chicken, olives, hearts of palm, corn, and other fillings.",
    image: "https://guiadacozinha.com.br/wp-content/uploads/2018/09/empadao-fricasse-frango.jpg"
  },
{
    continent: "Africa",
    country: "Ethiopia",
    dishName: "Tibs ",
    description: 'The country’s "go-to meat dish," as Curtis describes it, is usually made from beef cut into small chunks and sautéed in butter or oil with onions, garlic, hot pepper and rosemary. Served with injera.',
    image: "https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201211-xl-ethiopian-spiced-lamb-stew.jpg?itok=3N4wF3cb"
  },
{
    continent: "Africa",
    country: "Ethiopia",
    dishName: "Shiro be Kibbe",
    description: "Shiro be Kibbe  is a reddish, saucy dish is made by combining a flour of ground split peas and chickpeas with kibbe, or spiced clarified butter.",
    image: "https://photos.smugmug.com/Blog-Posts/i-wrWTjS6/0/38eba3b5/XL/ethiopian-shiro-wat-XL.jpg"
  },
{
    continent: "Africa",
    country: "Ethiopia",
    dishName: "Kitfo ",
    description: "Kitfo is ground raw beef that’s been mixed with kibbe, the spiced clarified butter. It can be accompanied by mitmita, another popular Ethiopian spice blend. The result melts in your mouth and tastes great with the typical accompaniments of gomen (cooked greens) and a soft fresh cheese. A special flatbread called kocho usually accompanies the dish, along with injera. ",
    image: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190205150343-kitfo.jpg"
  },
{
    continent: "Africa",
    country: "Ethiopia",
    dishName: "Doro wat",
    description: "This red stew gets its deep red hue from berbere, and the richness is often offset with an accompaniment of fresh cheese and gomen (stewed greens). ",
    image: "https://www.seriouseats.com/recipes/images/2014/03/20140327-287489-cook-the-book-doro-wat.jpg"
  },
{
    continent: "Africa",
    country: "Ethiopia",
    dishName: "Fir-Fir ",
    description: "The most typical Ethiopian breakfast is fir-fir, shredded leftover injera that’s stir-fried with berbere and kibbe. The spicy, carb-y morning meal might be mixed with leftover shiro or meat stews.",
    image: "https://d339dxqzr61e5.cloudfront.net/system/recipe_pictures/24305/medium/965e1d9d21012b4e19a750a1798f02ec.jpg?1495234359"
  },
{
    continent: "Africa",
    country: "Nigeria",
    dishName: "Bean and plantain pottage",
    description: "A thick and seasoned bean and plantain stew.",
    image: "https://wejacksonites.files.wordpress.com/2017/09/how-to-cook-beans-and-plantain-porridge.jpg?w=748"
  },
{
    continent: "Africa",
    country: "Nigeria",
    dishName: "Ogbono (or apon)",
    description: "A soup made from ground ogbono (African mango) seeds plus palm oil, stock and spices. It's usually eaten with staples like eba, fufu, pounded yam or amala.",
    image: "http://glooneevents.com/wp-content/uploads/2018/04/Abak-Atama-Soup.jpeg"
  },
{
    continent: "Africa",
    country: "Nigeria",
    dishName: "Suya",
    description: "Skewers of intricately spiced cuts of meat, grilled to perfection over an open flame. Often served with sharp, raw chopped onions.",
    image: "https://i2.wp.com/www.nigeriaserve.com/wp-content/uploads/2018/02/Beef_1suya.jpg?resize=450%2C300&ssl=1"
  },
{
    continent: "Africa",
    country: "Ethiopia",
    dishName: "Nigeria",
    description: "A palm fruit-based soup that is most commonly associated with the Delta region, and particularly the Urhobo ethnic group. There are variations across the country – and indeed west Africa and beyond – but they all include regional spices and all elevate fresh ingredients (fish and seafood, assorted meats, the palm fruit itself) above all things.",
    image: "https://netstorage-legit.akamaized.net/images/vllkyt3a5p82lhj19g.jpg"
  },
{
    continent: "Africa",
    country: "Nigeria",
    dishName: "Efo riro",
    description: 'A literal translation from the Yoruba is "mixed greens" and while they are the star of this rich, fragrant vegetable stew, there is so much goodness besides: blended scotch bonnets, bell pepper, onions and locust beans. This is a classic Yoruba dish.',
    image: "https://guardian.ng/wp-content/uploads/2017/09/efo-riro-2-e1504465628981.jpg"
  },
{
    continent: "Africa",
    country: "Egypt",
    dishName: "Ful Medammes",
    description: "Ful is the most common traditional breakfast, it’s a staple in every Egyptians’ diet. Ful is made of fava beans cooked with oil and salt. Ful is commonly eaten as a dish with eggs, cheese, pita bread.",
    image: "https://www.seriouseats.com/recipes/images/20090407fulmedames.jpg"
  },
{
    continent: "Africa",
    country: "Egypt",
    dishName: "Koshari",
    description: "Koshary or koshari is one of the most traditional Egyptian foods. A layering of rice, macaroni, lentils, and chickpeas topped off with caramelized onions, thick red sauce, and a garlic/chili/vinegar/ sauce.",
    image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Sapana_Behl/Egyptian_Koshari.jpg"
  },
{
    continent: "Africa",
    country: "Egypt",
    dishName: "Mahshi",
    description: "Mahshi is basically vegetables stuffed with a rice filling, can be made with zucchini, eggplants, bell peppers, tomatoes, cabbage leaves, or grapevine leaves. The filling consists of rice, herbs (parsley, cilantro, and dill), tomato sauce with seasoning and a touch of cinnamon.",
   image: "https://s24667.pcdn.co/wp-content/uploads/2019/03/Egyptian-Food-Mahshi.jpg"
  },
{
    continent: "Africa",
    country: "Egypt",
    dishName: "Fattah",
    description: "Fattah goes all the way back to ancient Egypt where it was served in big feasts, celebrations such as weddings and the birth of a new baby. Still today fattah is a main dish in the first day of the Islamic feast (Eid-al-adha). It is a combination of crispy bread, rice, meat and vinegar/tomato sauce.",
   image: "http://www.egypttoday.com/images/larg/48380.jpg"
  },
{
    continent: "Africa",
    country: "Egypt",
    dishName: "Macaroni Béchamel",
    description: "Made with rigatoni noodles, minced meat cooked in chopped onion and tomato paste, topped with the classic béchamel sauce. It’s hard to not go for seconds!",
   image: "https://tarasmulticulturaltable.com/wp-content/uploads/2019/01/Macarona-Bechamel-Egyptian-Baked-Pasta-6-of-7.jpg"
  }
];

db.Food
  .remove({})
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

