AOS.init();

const dataDoEvento = new Date("Jul 26, 2024 12:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contador = setInterval(function () {
  const hoje = new Date();
  const timeStampAtual = hoje.getTime();

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const timeStampAteOEvento = timeStampDoEvento - timeStampAtual;
  const diasAteOEvento = Math.floor(timeStampAteOEvento / diaEmMs);

  const horasAteOEvento = Math.floor(
    (timeStampAteOEvento % diaEmMs) / horaEmMs
  );
  const minutosAteOEvento = Math.floor(
    (timeStampAteOEvento % horaEmMs) / minutoEmMs
  );
  const segundosAteOEvento = Math.floor(
    (timeStampAteOEvento % minutoEmMs) / 1000
  );

  document.getElementById(
    "contador"
  ).innerHTML = `Faltam  apenas ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s <br> para a abertura dos jogos olímpicos de Paris`;

  if (timeStampAteOEvento < 0) {
    clearInterval.contador;
    document.getElementById("contador").innerHTML = `Este evento já aconteceu`;
  }
}, 1000);
