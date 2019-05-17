module.exports = {
    index: (req, res, next) => {
        res.status(200).json({
            mess: 'Welcome to project Rest API + nodejs!'
        });
    }
}