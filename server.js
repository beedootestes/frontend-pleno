import http from 'http';
import fs from 'fs'

const readJsonFile = (filePath) => {
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    return Object.values(data);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return null;
  }
};

const questions = readJsonFile('./data/perguntas.json')
const exams = readJsonFile('./data/testes.json')
const answers = readJsonFile('./data/respostas.json')

const requestListener = function (req, res) {
  res.setHeader('content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end('{message: OK}');
      break

    case "/v1/exams":
      res.writeHead(200);
      res.end(JSON.stringify(exams));
      break

    case "/v1/questions":
      res.writeHead(200);
      res.end(JSON.stringify(questions));
      break

    case req.url.match(/\/v1\/questions\/(\d+)$/)?.input:
      const examId = req.url.match(/\/v1\/questions\/(\d+)$/)[1]
      const questionsSelected = questions.filter((question) => question.parent_id === parseInt(examId))
                                          .map(question => {
                                            return {
                                              ...question,
                                              alternatives: answers.filter(answer => question.id === parseInt(answer.question_id))
                                            }
                                          })

      res.writeHead(200);
      res.end(JSON.stringify(questionsSelected));
      break
  }
};


const host = 'localhost';
const port = 8000;
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

