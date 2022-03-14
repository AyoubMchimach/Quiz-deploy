const qBank = [
  {
    question:
      "laquelle des couches suivante ne figure pas dans l'architecture de JEE?   ",
    answers: ["communication", "metier", "presentation", "Base de données"],
    correct: "communication",
    questionId: "099099"
  },
  {
    question:
      "comment appelle-t-on un client qui n'accede à notre servlet que grace à un navigateur web ?",
    answers: ["client leger", "client lourd", "client faible", "client navigateur"],
    correct: "client leger",
    questionId: "183452"
  },
  {
    question:
      "lequel des serveurs suivant est n'est pas un moteur de servlet ?",
    answers: ["Xampp", "Tomcat", "Geronimo", "Jboss"],
    correct: "Xampp",
    questionId: "267908"
  },
  {
    question: "on peut remplacer le role du fichier Web.xml en utilisant?",
    answers: [
      "les annotations",
      "les moeteurs de servlet",
      "Jsp",
      "xquerry"
    ],
    correct: "les annotations",
    questionId: "333247"
  },
  {
    question: "que veut dire MVC?",
    answers: ["model view controler", "model version compiler", "modern virtual concept", "model view collumn"],
    correct: "model view controler",
    questionId: "496293"
  },
  {
    question:
      "angular est un framework ?",
    answers: [
      "javascript",
      "php",
      "java",
      "C"
    ],
    correct: "javascrpit",
    questionId: "588909"
  },
  {
    question:
      "quel element nous permet de gerer le cycle de vie d'une servlet ?",
    answers: ["Moteur de servlet", "url-pattern", "web.xml", "web services technologies"],
    correct: "Moteur de servlet",
    questionId: "648452"
  },
  {
    question: "quelle methode fonctionne vers la fin du cycle de vie d'une servlet?",
    answers: ["init()", "destroy()", "doGet()", "doPost()"],
    correct: "destroy()",
    questionId: "786649"
  },
  {
    question: "quelle methode fonctionne lors du chargement d'une servlet?",
    answers: [ "destroy()","init()", "doGet()", "doPost()"],
    correct: "init()",
    questionId: "839754"
  },
  {
    question: "Quelle exception est levée lors de l’initialisation du Servlet échoue?",
    answers: [ "SocketException","IOException", "RemoteException", "ServletException"],
    correct: "init()",
    questionId: "839754"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
