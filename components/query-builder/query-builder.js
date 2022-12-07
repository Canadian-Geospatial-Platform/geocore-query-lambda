// /geo?north=76.26869465080624&east=-32.69531250000001&south=28.459033019728068&west=-167.34375000000003&keyword=blood native&lang=en&min=1&max=10&theme=economy
const query = function (keywordsArray , languageCode) {
  let ret = "select properties[1].id as id from v2_25 "
  ret += whereClause(keywords, languageCode)
  ret += " limit 3"
  return ret;
};

// keywordsArray sample: ["Blood in the water", "mountain", "nonce"]
const whereClause = function (keywordsArray, languageCode) {
  if (!keywordsArray.length) return "";
  let ret = "where regexp_like(properties[1].title." + languageCode + ", '(?i)";
  let firstItem = true;
  keywordsArray.forEach((e) => {
    if (firstItem) {
      ret += e;
      firstItem = false
    } else {
      ret += "|" + e.toLowerCase();
    }
  });
  return ret + "')";
};

module.exports = {
  query,
  whereClause,
};
