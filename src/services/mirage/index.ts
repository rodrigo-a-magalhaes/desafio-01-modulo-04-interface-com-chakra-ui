import { ActiveModelSerializer, createServer, Factory, Model } from 'miragejs';

interface Continent {
  name: string;
  description: string;
  brief_description: string;
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },
    models: {
      continent: Model.extend<Partial<Continent>>({})
    },
    factories: {
      continent: Factory.extend({
        name: 'Europa',
        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
        brief_description: 'O continente mais antigo.'
      })
    },
    seeds(server) {
      server.createList('continent', 200)
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/continents');

      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
}
