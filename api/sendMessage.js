const SnowTransfer = require("snowtransfer");

// BEGIN CONFIG
const TOKEN = "";
const USER_ID = "";
// END CONFIG

module.exports = async (req, res) => {
  const { body } = req;
  const name = body.name       || null;
  const email = body.email     || null;
  const message = body.message || null;

  let hasErrored = false;
  [name, email, message].forEach(v => {
    if (v === null) hasErrored = true;
  });

  if (hasErrored) {
    return res.status(400).json({
      success: false,
      data: {
        message: "Bad request"
      }
    })
  }

  try {
    const content = `**NEW MESSAGE**\nName: ${name}\nEmail: ${email}\n\nMessage: ${message}\n----------`;
    const client = new SnowTransfer(TOKEN);
    const channel = await client.user.createDirectMessageChannel(USER_ID);
    await client.channel.createMessage(channel.id, content);
  } catch (e) {
    return res.status(500).json({
      success: false,
      data: {
        message: "Failed to deliver message",
        dump: String(e)
      }
    })
  }

  return res.status(200).json({
    success: true,
    data: {}
  })
}