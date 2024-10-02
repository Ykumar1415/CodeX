const axios = require("axios");
const cheerio = require("cheerio");
//Codechef
exports.getdata = async (req, res) => {
  try {
    const handle = req.params.handle;
    const article = {};
   await axios(`https://www.codechef.com/users/${handle}`)
      .then((res) => {
        const htmldata = res.data;
        const $ = cheerio.load(htmldata);

        

        const rating = $(".rating-number").text();
        const ratingHigest = $(".rating-header small").text();
        const quessolved = $(".content h5").text();
        const contest = $(".contest-participated-count b").text();
        const name = $(".h2-style").text();
        const globalrank = $(".inline-list strong")
          .map((index, product) => {
            const $product = $(product);
            return $product.text();
          })
          .toArray();
        // console.log(globalrank);
        article.globalrank = globalrank[0];
        article.contest = contest;
        article.name = name;
        article.quessolved = quessolved.split("(")[1].split(")")[0];
        article.countryrank = globalrank[1];
        article.rating = rating.split("?")[0];
        article.ratingMax = ratingHigest.split(" ")[2].split(")")[0];

        console.log(article);
      })
      res.status(200).json({
        status:'success',
        data:article
      })
      
  } catch (error) {
    console.log(err);
    res.status(401).json({
        status:'fail',
        error:err
    })
}
};
