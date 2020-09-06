var api = require("./v1");

module.exports = (app, BASE_PATH, device) => {
    api(app, BASE_PATH+"/v1", device);
}