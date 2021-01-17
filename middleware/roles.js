module.exports.Admin = function (req, res, next) {
    if (req.user.role !== "admin") return res.status(403).send("Acess denied");
    next();
};
module.exports.Owner = function (req, res, next) {
    if (req.user.role !== "owner") return res.status(403).send("Acess denied");
    next();
};
module.exports.User = function (req, res, next) {
    if (req.user.role !== "user") return res.status(403).send("Acess denied");
    next();
};
