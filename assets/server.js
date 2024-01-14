const liveServer = require("live-server");
const compression = require("compression");

const params = {
  port: 8080, // Port du serveur
  host: "0.0.0.0", // Écoute sur toutes les interfaces
  compress: true, // Activer la compression
  middleware: [compression()], // Ajouter le middleware de compression
  file: "index.html", // Fichier par défaut à servir
};

liveServer.start(params);