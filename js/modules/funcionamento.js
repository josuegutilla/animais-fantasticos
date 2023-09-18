export default function initFuncionamento() {
  const funciomanto = document.querySelector('[data-semana]');

  const diasSemana = funciomanto.dataset.semana.split(',').map(Number);
  const horariosSemana = funciomanto.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horasAgora = dataAgora.getHours();

  const diaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horaAberto = horasAgora >= horariosSemana[0] && horasAgora < horariosSemana[1];

  if (diaAberto && horaAberto) {
    funciomanto.classList.add('aberto');
  }
}
