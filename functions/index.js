const functions = require('firebase-functions');
const SnowTransfer = require("snowtransfer");
const cors = require("cors")({ origin: true, });

// BEGIN CONFIG
const TOKEN = "";
const USER_ID = "";
// END CONFIG

exports.sendMail = functions.https.onRequest((req, res) => {

    return cors(req, res, async () => {
        const name = req.query.name       || null;
        const email = req.query.email     || null;
        const message = req.query.message || null;

        let hasErrored = false;
        [name, email, message].forEach(v => {
            if (v === null) {
                hasErrored = true;
            }
        });
        if (hasErrored) {
            res.status(400).send("badreq").end();
            return;
        } else {

            try {
                let template = `**NEW MESSAGE**\nName: ${name}\nEmail: ${email}\n\nMessage: ${message}\n-----`;

                let client = new SnowTransfer(TOKEN);
                let channel = await client.user.createDirectMessageChannel(USER_ID);
                await client.channel.createMessage(channel.id, template);
            } catch (e) {
                res.status(500).send("err\n"+e).end();
                return;
            }

            res.status(200).send("ok").end();
            return;
        }
    });
  });