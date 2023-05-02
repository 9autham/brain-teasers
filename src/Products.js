import React from "react";
import Product from "./Product";
function Products() {
  let prouctsList = [
    {
      productName: "Brainteaser Quiz",
      productImage0:
        "https://kids.niehs.nih.gov/sites/niehs-kids/files/kids/assets/images/brainteaserquizes_image.svg",
      direct: "../Game1"
    },
    {
      productName: "Not So Hard Riddles",
      productImage0:
        "https://kids.niehs.nih.gov/sites/niehs-kids/files/kids/assets/images/notsohardriddles_image.svg",
      direct: "../Game2"
    },
    {
      productName: "Cows&Bull",
      productImage0:
        "https://3.bp.blogspot.com/-2XL1nAeVazs/VCa-8lW8t5I/AAAAAAAADag/HZRikq-RFSU/s1600/iTunesArtwork%402x.png",
      direct: "../Game3"
    },
    {
      productName: "Quizzes",
      productImage0:
        "https://kids.niehs.nih.gov/sites/niehs-kids/files/kids/assets/images/quizzes_image.svg",
      direct: "/Game4"
    },
    {
      productName: "What's the word",
      productImage0:
        "https://kids.niehs.nih.gov/sites/niehs-kids/files/kids/assets/images/whats_the_word.svg",
      direct: "/Game5"
    },
    {
      productName: "New Twists on Old Proverbs",
      productImage0:
        "https://kids.niehs.nih.gov/sites/niehs-kids/files/kids/assets/images/twist_on_old_proverbs_image.svg",
      direct: "/Game6"
    }
  ];
  return (
    <div className="text-center">
      <p className="display-3 text-info">Brainteasers</p>
      <div className="d-flex flex-wrap">
        <hr />
        {prouctsList.map((productObj) => (
          <Product productObj={productObj} />
        ))}
      </div>
    </div>
  );
}

export default Products;
