const imageUrlsOf = {
  hotel: [
    'https://images.trvl-media.com/hotels/1000000/30000/23400/23395/3e548c73_z.jpg',
    'https://exp.cdn-hotels.com/hotels/1000000/20000/15800/15779/bef54cd0_z.jpg',
    'https://s-ec.bstatic.com/images/hotel/max1024x768/203/20384335.jpg',
    'https://img1.10bestmedia.com/Images/Photos/232757/pool6-hi_54_990x660_201404241432.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSHt-wnyI2aiK5n3tZK1a_cp7-pifGOnoLds3KqkcbTb9Y22a',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrVueftXqtL8hoAe8i41tRuopHbm-xO115ae1pedqF9alCTFx',
    'https://cache.marriott.com/propertyimages/s/sfoak/sfoak_main01_r.jpg',
    'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1488215938/san-francisco-VIRGIN0217.jpg?itok=4xrADA2A',
    'https://exp.cdn-hotels.com/hotels/1000000/10000/8800/8737/1bcd8d1c_z.jpg',
    'https://s-ec.bstatic.com/images/hotel/max1024x768/485/48597575.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROR3uEp_sVh6zxht9g-4bGpOHiCn5_sZckNW08jScwAJwMUjZetw',
    'https://s-ec.bstatic.com/images/hotel/max1024x768/360/36092062.jpg',
    'http://www.turnipseedtravel.com/uploads/1/5/9/2/15922294/6762036_orig.jpg'
  ],

  restaurant: [
    'https://media.timeout.com/images/103425975/image.jpg',
    'https://dwgfmnrdprofc.cloudfront.net/wp-content/uploads/2013/09/greens_san_francisco.jpg',
    'https://media.timeout.com/images/103258037/image.jpg',
    'http://www.yamasho-sf.com/images/yamasho_interior_30.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/xOEbCFlQvomxmtcGX5uQMw/o.jpg',
    'https://d37219swed47g7.cloudfront.net/media/reviews/greens-restaurant/banners/greens-sf_0.jpg',
    'https://static1.squarespace.com/static/52c0d31ae4b0803bf7e95f36/5396109ae4b028c25b52a341/5813e06f2994ca5361c37590/1493841588532/Waterbar-23_aquariumlit_2016.jpg',
    'http://www.chart-house.com/locations/san-francisco/img/overview/1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzm2Wh4mLHC2A1JY02RAwgpIY7A3_9MDsmezkFWcaikZZLuim-GQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5H0-qVuTzXz8Tsk0AVvsrm5mSNkN6qpmU2uuRILPvvxvlaESGtA',
    'https://media.timeout.com/images/103425986/image.jpg',
    'http://24217cf2618f6a56cc6d-80e889c29561f966401bb18d0de48ed3.r11.cf1.rackcdn.com/XLGallery/W_San_Francisco_Living_Room_Bar.jpg'
  ],

  attraction: [
    'https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_571078255.jpg',
    'https://media.timeout.com/images/101714767/image.jpg',
    'https://freetoursbyfoot.com/wp-content/uploads/2016/03/1.-Lombard.jpg',
    'https://media.timeout.com/images/101714755/image.jpg',
    'https://www.travelalphas.com/wp-content/uploads/2016/03/13360251245_088d237945_o-768x1024.jpg',
    'https://www.orbitz.com/blog/wp-content/uploads/2016/09/japantown-san-francisco.jpg',
    'http://cdn.mntm.me/60/2c/a0/Best-Things-to-Do-with-Kids-from-San-Diego-to-San-Francisco-602ca00f77854755ac30f4da7862ddaf.jpg',
    'http://gle2e78pzo-flywheel.netdna-ssl.com/wp-content/uploads/2017/04/MIssionSF.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcLgCTyu_h5sWwNjrH_Ln_g81RjY9CO9EkhUicKYtTFO7QOPwrA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgg-opv5FCza9xwACjx3IuG8wEkOQQFwNTjB5Q3VcnJ-apPFjxA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRF59kvnKvbip-uVBjv-fHDDP6GygJuzxHTKrGdioWqkgT-Zt4qQ',
    'https://img1.10bestmedia.com/Images/Photos/232069/p-IMG-0762_54_990x660_201404241344.jpg'
  ]
};

let randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomImages = (type = 'attraction') => {
  let imageUrls = imageUrlsOf[type];
  let index = randomNumber(0, imageUrls.length);

  return imageUrls[index];
};

module.exports = randomImages;

