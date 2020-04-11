// Para uma explicação detalhada sobre cada propriedade de configuração, visite:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Todos os módulos importados nos seus testes devem ser zombados automaticamente
  // automock: false,

  // Pare de executar testes após falhas `n`
  // fiança: 0,

  // Respeite o campo "browser" em package.json ao resolver os módulos
  // navegador: false,

  // O diretório em que o Jest deve armazenar suas informações de dependência em cache
  // cacheDirectory: "/ private / var / folders / qv / s8ph22xx2fnfxdh3pq14t4d40000gn / T / jest_dx",

  // Limpa automaticamente chamadas e instâncias simuladas entre todos os testes
  clearMocks: true,

  // Indica se as informações de cobertura devem ser coletadas durante a execução do teste
  // collectCoverage: false,

  // Uma matriz de padrões glob indicando um conjunto de arquivos para os quais as informações de cobertura devem ser coletadas
  // collectCoverageFrom: undefined,

  // O diretório em que o Jest deve gerar seus arquivos de cobertura
  // directoryDirectory: "cobertura",

  // Uma matriz de seqüências de caracteres de padrão de expressão regular usadas para pular a coleção de cobertura
  // coberturaPathIgnorePatterns: [
  // "/ node_modules /"
  //]

  // Uma lista de nomes de repórter que o Jest usa ao escrever relatórios de cobertura
  // coberturaReportadores: [
  // "json",
  // "texto",
  // "lcov",
  // "trevo"
  //]

  // Um ​​objeto que configura a aplicação de limite mínimo para resultados de cobertura
  // coberturaThreshold: indefinido,

  // Um ​​caminho para um extrator de dependência personalizado
  // dependencyExtractor: indefinido,

  // Faça com que as APIs descontinuadas da chamada gerem mensagens de erro úteis
  // errorOnDeprecated: false,

  // Forçar a coleta de cobertura de arquivos ignorados usando uma matriz de padrões glob
  // forceCoverageMatch: [],

  // Um ​​caminho para um módulo que exporta uma função assíncrona que é acionada uma vez antes de todos os conjuntos de testes
  // globalSetup: indefinido,

  // Um ​​caminho para um módulo que exporta uma função assíncrona que é acionada uma vez após todos os conjuntos de testes
  // globalTeardown: indefinido,

  // Um ​​conjunto de variáveis ​​globais que precisam estar disponíveis em todos os ambientes de teste
  // globais: {},

  // A quantidade máxima de trabalhadores usada para executar seus testes. Pode ser especificado como% ou um número. Por exemplo, maxWorkers: 10% usará 10% da quantidade de CPU + 1 como o número máximo de trabalhadores. maxWorkers: 2 usarão no máximo 2 trabalhadores.
  // maxWorkers: "50%",

  // Uma matriz de nomes de diretório a serem pesquisados ​​recursivamente a partir da localização do módulo exigente
  // moduleDirectories: [
  // "node_modules"
  //]

  // Uma matriz de extensões de arquivo usadas pelos seus módulos
  // moduleFileExtensions: [
  // "js",
  // "json",
  // "jsx",
  // "ts",
  // "tsx",
  // "nó"
  //]

  // Um ​​mapa de expressões regulares para nomes de módulos ou matrizes de nomes de módulos que permitem stub out de recursos com um único módulo
  // moduleNameMapper: {},

  // Uma matriz de seqüências de caracteres de padrão regexp, correspondida em todos os caminhos do módulo antes de ser considerada 'visível' para o carregador de módulos
  // modulePathIgnorePatterns: [],

  // Ativa notificações para resultados do teste
  // notifica: false,

  // Uma enumeração que especifica o modo de notificação. Requer {notify: true}
  // notifyMode: "falha na alteração",

  // Uma predefinição usada como base para a configuração do Jest
  // predefinido: indefinido,

  // Execute testes de um ou mais projetos
  // projetos: indefinido,

  // Use esta opção de configuração para adicionar repórteres personalizados ao Jest
  // repórteres: indefinidos,

  // Redefine automaticamente o estado simulado entre todos os testes
  // resetMocks: false,

  // Redefina o registro do módulo antes de executar cada teste individual
  // resetModules: false,

  // Um ​​caminho para um resolvedor personalizado
  // resolvedor: indefinido,

  // Restaurar automaticamente o estado simulado entre todos os testes
  // restoreMocks: false,

  // O diretório raiz que o Jest deve procurar por testes e módulos dentro
  // rootDir: indefinido,

  // Uma lista de caminhos para diretórios que o Jest deve usar para procurar arquivos no
  // raízes: [
  // "<rootDir>"
  //]

  // Permite usar um corredor personalizado em vez do corredor de teste padrão do Jest
  // runner: "jest-runner",

  // Os caminhos para os módulos que executam algum código para configurar ou configurar o ambiente de teste antes de cada teste
  // setupFiles: [],

  // Uma lista de caminhos para os módulos que executam algum código para configurar ou configurar a estrutura de teste antes de cada teste
  // setupFilesAfterEnv: [],

  // Uma lista de caminhos para os módulos serializadores de snapshots que o Jest deve usar para teste de snapshots
  // snapshotSerializers: [],

  // O ambiente de teste que será usado para o teste
  testEnvironment: "node",

  // Opções que serão passadas para o testEnvironment
  // testEnvironmentOptions: {},

  // Adiciona um campo de localização para testar os resultados
  // testLocationInResults: false,

  // Os padrões glob que Jest usa para detectar arquivos de teste
  // testMatch: [
  // "** / __ testa __ / ** / *. [jt] s? (x)",
  // "** /? (*.) + (especificação | teste). [tj] s? (x)"
  //]

  // Uma matriz de seqüências de caracteres de padrão de expressão regular que correspondem a todos os caminhos de teste; os testes correspondentes são ignorados
  // testPathIgnorePatterns: [
  // "/ node_modules /"
  //]

  // O padrão regexp ou matriz de padrões que o Jest usa para detectar arquivos de teste
  // testRegex: [],

  // Esta opção permite o uso de um processador de resultados personalizado
  // testResultsProcessor: undefined,

  // Esta opção permite o uso de um executor de teste personalizado
  // testRunner: "jasmine2",

  // Esta opção define a URL para o ambiente jsdom. É refletido em propriedades como location.href
  // testURL: "http: // localhost",

  // Definir esse valor como "fake" permite o uso de temporizadores falsos para funções como "setTimeout"
  // timers: "real",

  // Um ​​mapa de expressões regulares para caminhos para transformadores
  // transformação: indefinida,

  // Uma matriz de seqüências de caracteres de padrão de expressão regular que correspondem a todos os caminhos de arquivos de origem, os arquivos correspondentes ignoram a transformação
  // transformIgnorePatterns: [
  // "/ node_modules /"
  //]

  // Uma matriz de seqüências de caracteres de padrão de expressão regular que são comparadas com todos os módulos antes que o carregador de módulos retorne automaticamente uma simulação para eles
  // unmockedModulePathPatterns: undefined,

  // Indica se cada teste individual deve ser relatado durante a execução
  // detalhado: indefinido,

  // Uma matriz de padrões regexp que correspondem a todos os caminhos do arquivo de origem antes de executar novamente os testes no modo de exibição
  // watchPathIgnorePatterns: [],

  // Se deve usar o watchman para rastreamento de arquivos
  // vigia: verdadeiro,
  testTimeout: 500
};