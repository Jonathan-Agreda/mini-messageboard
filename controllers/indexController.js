// Array de mensajes inicial
const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
];

// Mostrar todos los mensajes
exports.getAllMessages = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
};

// Mostrar el formulario para un nuevo mensaje
exports.getForm = (req, res) => {
  res.render("form", { title: "New Message" });
};

// Agregar un nuevo mensaje
exports.addMessage = (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
};

// Ver un mensaje por ID
exports.getMessageById = (req, res) => {
  const messageId = req.params.id;
  const message = messages[messageId];
  res.render("message", { title: "Message Details", message, messageId });
};
