const path = require('path');

function getMessage(req, res) {
    res.render('messages', {
        title: 'Message to my friend',
        friend: 'Elon Musk',
    })
    //res.sendFile(path.join(__dirname, '..', 'public','images', 'skimountain.jpg'));
    //res.send('<ul><li>Akshat Jain</li></ul>')
};

function postMessage(req, res) {
    console.log('Updating messgae...!!!')
};

module.exports = {
    getMessage,
    postMessage
}
