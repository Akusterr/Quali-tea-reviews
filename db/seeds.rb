

puts "Clearing db..."
User.destroy_all
Tea.destroy_all
Review.destroy_all


puts "Seeding users..."

u1 = User.create(
    name: "Alexa", 
    location: "New Jersey", 
    image: "https://t3.ftcdn.net/jpg/02/85/26/36/360_F_285263603_ATuaGwXIW70XGyWdcaGzbpYCJaB2e04f.jpg",
    username: "kus"
)

u2 = User.create(
    name: "Jerica",
    location: "California",
    image: "https://twosleevers.com/wp-content/uploads/2017/05/Hibiscus-Tea-Wide.jpg",
    username: "jer"
)

u3 = User.create(
    name: "Caity",
    location: "Massachusetts",
    image: "https://cdn.create.vista.com/api/media/small/222785650/stock-photo-flat-lay-arranged-cinnamon-sticks", 
    username: "murph"
)


puts "Seeding teas..."

t1 = Tea.create(
    brand: "Yogi",
    style: "Green Kombucha",
    herbal: false,
    origin: "Eugene, Oregon",
    image: "https://i5.walmartimages.com/asr/4b3803c0-35b4-4004-a768-97432864a444.8214f3cf0e26a3b35ce1e4d62f2ea3ef.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
)

t2 = Tea.create(
    brand: "Twinings",
    style: "Rooibos",
    herbal: true,
    origin: "Clifton, New Jersey",
    image: "https://www.quill.com/is/image/Quill/568FA055-0E05-4B03-9CB7D5290C35407F_s7?wid=600&hei=600"
)

t3 = Tea.create(
    brand: "The Republic of Tea",
    style: "Earl Grey",
    herbal: false,
    origin: "Larkspur, California",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61ERO-kK44L._SL1000_.jpg"
)


puts "seeding reviews..."

r1 = Review.create(
    tea_rating: 3.5,
    tea_comment: "calming SPICED tea that's perfect for a calming afternoon cup!",
    user_id: u1.id,
    tea_id: t2.id
)

r2 = Review.create(
    tea_rating: 4,
    tea_comment: "I love a cup of green Kombucha tea after after one of my yoga training classes",
    user_id: u3.id,
    tea_id: t1.id
)

r3 = Review.create(
    tea_rating: 2,
    tea_comment: "Personally, I'm more of a coffee gal",
    user_id: u2.id,
    tea_id: t3.id
)

puts "Seeding is complete!!"
