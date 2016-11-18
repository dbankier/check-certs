const https = require("https");
const moment = require("moment");

exports.domain = function (domain) {
  return new Promise((resolve, reject) => {
    let req = https.request(`https://${domain}`, res => {
      let expiry = req.connection.getPeerCertificate().valid_to;
      resolve(moment(expiry.replace(/\s+/g," "), "MMM D hh:mm:ss YYYY"))
    });
    req.end();
    req.on("error", err=> resolve(`${err.toString()}`))
  });
}

if (!module.parent) {
  exports.checkDomain("google.com")
  .catch(err=> console.log("err"));
}
