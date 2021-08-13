const data = require("../data/data.json");

module.exports = {
  async getData (req, res) {
    res.status(200).json(data);
  },
  async getClient (req, res) {
    const { id } = req.params;
    const client = data.find(client => client.id == id);
    if (!client) return res.status(204).json();
    res.status(200).json(client);
  },
  async saveClient(req, res) {
    const { name, username, email } = req.body;
    data.push({
      id: (Math.random() * 100).toFixed(0),
      name: name,
      username: username,
      email: email,
    });
    res.status(201).json(data);
  },
  async updateClient(req, res) {
    const { id } = req.params;
    const client = data.find(client => client.id == id);

    if (!client) return res.status(204).json({
      message: "Client not found.",
      success: false,
      data: data,
    });

    const { name, username, email } = req.body;
    client.name = name;
    client.username = username;
    client.email = email;

    res.status(200).json({
      message: "Client updated",
      success: true,
      data: client});
  },
  async deleteClient (req, res) {
    const { id } = req.params;
    const clientIndex = data.findIndex(client => client.id == id);
    if (clientIndex === -1) {
      res.status(404).json({
        message: "Client not found.",
        success: false,
        data: data,
      });
    } else {
      data.splice(clientIndex, 1);
      res.status(200).json({
        message: "Client found and deleted!",
        success: true,
        data: data,
      });
    };
  }

}