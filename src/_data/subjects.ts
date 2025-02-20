import Subject from "@/_infra/entities/Subject";
import { SubjectState } from "@/_infra/enums/SubjectState";
import { SubjectType } from "@/_infra/enums/SubjectType";

const subjects: Subject[] = [
  new Subject("COM06847", 1, "INTRODUÇÃO À INFORMÁTICA", [], SubjectType.MANDATORY, SubjectState.ONGOING),
  new Subject("COM06852", 1, "INTRODUÇÃO AOS SISTEMAS DE INFORMAÇÃO", [], SubjectType.MANDATORY, SubjectState.ONGOING),
  new Subject("COM06853", 1, "LÓGICA COMPUTACIONAL", [], SubjectType.MANDATORY, SubjectState.ONGOING),
  new Subject("ENG06854", 1, "PORTUGUÊS INSTRUMENTAL", [], SubjectType.MANDATORY, SubjectState.ONGOING),
  new Subject("COM06842", 1, "PROGRAMAÇÃO I", [], SubjectType.MANDATORY, SubjectState.DONE),
  new Subject("MPA06840", 1, "VETORES E GEOMETRIA ANALÍTICA", [], SubjectType.MANDATORY, SubjectState.DONE),
  new Subject("MPA06839", 2, "CÁLCULO A", [], SubjectType.MANDATORY, SubjectState.DONE),
  new Subject("ENG06849", 2, "INGLÊS INSTRUMENTAL", [], SubjectType.MANDATORY, SubjectState.ONGOING),
  new Subject("COM06851", 2, "MATEMÁTICA DISCRETA", [], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM06985", 2, "TEORIA GERAL DOS SISTEMAS", ["COM06852"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM06984", 2, "FUNDAMENTOS DE PROGRAMAÇÃO WEB", ["COM06847"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("MPA06855", 3, "ÁLGEBRA LINEAR", ["MPA06840"], SubjectType.MANDATORY, SubjectState.DONE),
  new Subject("COM10014", 3, "COMPUTABILIDADE E COMPLEXIDADE", ["COM06851"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10015", 3, "ENGENHARIA DE SOFTWARE", ["COM06842"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM06992", 3, "ESTRUTURAS DE DADOS I", ["COM06842"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10016", 3, "SISTEMAS DE APOIO À DECISÃO", ["COM06985"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10076", 4, "ARQUITETURA DE COMPUTADORES", ["COM06842"], SubjectType.MANDATORY, SubjectState.ONGOING),
  new Subject("ENG05510", 4, "ESTATÍSTICA BÁSICA", ["MPA06839"], SubjectType.MANDATORY, SubjectState.DONE),
  new Subject("COM10078", 4, "ESTRUTURA DE DADOS II", ["COM06992"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10082", 4, "PROGRAMAÇÃO II", ["COM06992"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10275", 4, "ENGENHARIA DE REQUISITOS DE SOFTWARE", ["COM10015"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10129", 5, "BANCO DE DADOS", ["COM10078"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10507", 5, "INTERFACE HUMANO-COMPUTADOR", ["COM10275"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10131", 5, "OTIMIZAÇÃO LINEAR", ["MPA06855", "COM06992"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10508", 5, "PROJETO DE SISTEMAS DE SOFTWARE", ["COM10275", "COM10082"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10132", 5, "SISTEMAS OPERACIONAIS", ["COM06992", "COM10076"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10603", 6, "DIREITO E LEGISLAÇÃO", [], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10733", 6, "GERÊNCIA DE PROJETO DE SOFTWARE", ["COM10015"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10081", 6, "METODOLOGIA DE PESQUISA EM INFORMÁTICA", ["ENG06854"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10393", 6, "MÉTODOS DE OTIMIZAÇÃO", ["COM10131"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10394", 6, "REDES DE COMPUTADORES", ["COM10132"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM11014", 6, "GERENCIAMENTO DE BANCO DE DADOS", ["COM10129"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("CFM10426", 7, "ADMINISTRAÇÃO E ECONOMIA", [], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM06996", 7, "INFORMÁTICA E SOCIEDADE", ["COM06852"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM11007", 7, "SEGURANÇA E AUDITORIA DE SISTEMAS", ["COM06985", "COM10733"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10616", 7, "SISTEMAS DISTRIBUÍDOS", ["COM10394"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10606", 7, "COMÉRCIO ELETRÔNICO", ["COM06984"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10396", 8, "DESENVOLVIMENTO DE SISTEMAS PARA WEB", ["COM10082", "COM10129"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM10609", 8, "GERENCIAMENTO E ADMINISTRAÇÃO DE REDES", ["COM10394"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("CFM11061", 8, "EMPREENDEDORISMO", ["CFM10426"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM11064", 8, "GESTÃO DE QUALIDADE DE SOFTWARE", ["COM10508"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("COM11259", 9, "SISTEMAS DE SOFTWARE LIVRE", ["COM10132"], SubjectType.MANDATORY, SubjectState.UNAVAILABLE),
  new Subject("VET10127", null, "Fundamentos da Língua Brasileira de Sinais - LIBRAS", [], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11013", null, "Mineração de Dados", ["ENG05510", "COM10129"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10605", null, "Banco de Dados Distribuídos", ["COM10129"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("MPA06979", null, "Cálculo B", ["MPA06839"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10607", null, "Computação Forense", ["MPA06855", "COM10394"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10604", null, "Computação Gráfica", ["MPA06855", "COM06992"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10608", null, "Computação Móvel", ["COM10394"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10397", null, "Fluxo em Redes", ["COM10131"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10398", null, "Interfaces e Periféricos", ["COM10076", "COM10132"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10392", null, "Linguagens de Programação", ["COM10082"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10080", null, "Lógica Computacional II", ["COM06853", "ENG05510"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10399", null, "Processamento Digital de Imagens", ["MPA06855", "COM06992"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10400", null, "Programação III", ["COM06842"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10133", null, "Teoria dos Grafos", ["COM10078"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10610", null, "Tópicos em Banco de Dados I", ["COM10129"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10611", null, "Tópicos Especiais em Engenharia de Software I", ["COM10015"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10614", null, "Tópicos Especiais em Otimização Combinatória I", ["COM10131"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("ENG10792", null, "Inteligência Artificial", ["COM06853", "COM06842"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10615", null, "Tópicos Especiais em Programação I", ["COM10082"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10613", null, "Tópicos Especiais em Redes de Computadores I", ["COM10394"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM10612", null, "Tópicos Especiais em Informática I", [], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11262", null, "Otimização Não-Linear", ["COM10131"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11263", null, "Tópicos Especiais em Banco de Dados II", ["COM10129"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11264", null, "Tópicos Especiais em Computação Gráfica II", ["COM10604"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11265", null, "Tópicos Especiais em Engenharia de Software II", ["COM10015"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11266", null, "Tópicos Especiais em Informática II", [], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11267", null, "Tópicos Especiais em Inteligência Artificial II", ["ENG10792"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11268", null, "Tópicos Especiais em Interface Humano-Computador II", ["COM10507"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11269", null, "Tópicos Especiais em Otimização Combinatória II", ["COM10131"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11270", null, "Tópicos Especiais em Programação II", ["COM10082"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11271", null, "Tópicos Especiais em Redes de Computadores II", ["COM10394"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11272", null, "Tópicos Especiais em Sistemas Operacionais II", ["COM10132"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11273", null, "Tópicos Especiais em Sistemas Web II", ["COM10396"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11065", null, "Modelagem e Simulação", ["COM06992", "ENG05510"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11066", null, "Montagem e Manutenção de Computadores", ["COM10076"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11067", null, "Multimídia e Hipermídia", ["COM10078", "COM10507"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11068", null, "Neurocomputação", ["ENG10792"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11069", null, "Otimização Linear Inteira", ["COM10131"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11071", null, "Processamento de Alto Desempenho", ["COM10616"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11072", null, "Processos Estocásticos", ["COM06992"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11073", null, "Programação IV", ["COM06853"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11074", null, "Segurança em Redes", ["COM10394"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11078", null, "Tópicos Especiais em Computação Gráfica I", ["COM10604"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11082", null, "Tópicos Especiais em Inteligência Artificial I", ["ENG10792"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11084", null, "Tópicos Especiais em Interface Humano-Computador I", ["COM10507"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11089", null, "Tópicos Especiais em Sistemas Operacionais I", ["COM10132"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE),
  new Subject("COM11091", null, "Tópicos Especiais em Sistemas Web I", ["COM10396"], SubjectType.OPTIONAL, SubjectState.UNAVAILABLE)
];

export const updateSubjectsState = () => {
  for (const subject of subjects) {
    if ([SubjectState.DONE, SubjectState.ONGOING].includes(subject.state)) {
      continue;
    }

    const requirements = subjects.filter(x => subject.requirements.includes(x.code));

    if (requirements.some(x => x.state !== SubjectState.DONE)) {
      subject.state = SubjectState.UNAVAILABLE;
      continue;
    }

    subject.state = SubjectState.AVAILABLE;
  }
}

updateSubjectsState();

export default subjects;
