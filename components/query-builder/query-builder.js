// /geo?north=76.26869465080624&east=-32.69531250000001&south=28.459033019728068&west=-167.34375000000003&keyword=blood native&lang=en&min=1&max=10&theme=economy
const query = function (keywords) {
  return "SELECT properties[1].id AS id FROM v2_25 LIMIT 3";
};

// keywordsArray sample: ["Blood in the water", "mountain", "nonce"]
const whereClause = function (keywordsArray) {
  if (!keywordsArray) return "";
  let ret = "where";
  const firstItem = true;
  keywordsArray.forEach((e) => {
    if (firstItem) {
      ret += " and " + e.toLowerCase();
    } else {
      ret += e.toLowerCase();
    }
  });
  return ret;
};

module.exports = {
  query,
  whereClause,
};
