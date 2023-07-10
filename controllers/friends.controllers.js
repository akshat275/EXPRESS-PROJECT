const model = require('../models/friends.models');

function getFriend(req, res) {
    const friendsId = Number(req.params.friendsId);
    const friend = model[friendsId];
    if(friend) {
         res.status(200).json(friend);
    } else {
         res.status(404).json({
            error: "Friend not found"
         })
    }
};

function postFriend(req, res) {
    if(!req.body.name) {
        return res.status(400).json({
            error: 'Missing Data ERROR'
        })
    }

    const newFriend = {
        name: req.body.name,
        id: model.length
    };
    model.push(newFriend);
    res.json(newFriend);
};

function getFriends(req, res) {
    res.end(JSON.stringify(model));
};

module.exports = {
    getFriend,
    getFriends,
    postFriend,
}