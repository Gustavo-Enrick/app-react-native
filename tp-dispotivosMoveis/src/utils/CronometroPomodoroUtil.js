class CronometroPomodoroUtil {
  static Cron = 0;
  static Minuto = 20;
  static Segundo = 0;
  static Milissegundo = 990;

  static Temporizador(cronProps) {
    if ((this.Milissegundo -= 10) == 0) {
      this.Milissegundo = 990;
      this.Segundo--;
    }

    if (this.Minuto === 0 && this.Segundo === 0) {
      this.Reiniciar(cronProps);
      return;
    }

    if (this.Segundo == 0) {
      this.Segundo = 59;
      this.Minuto--;
    }

    cronProps.setMinuto(this.Minuto);
    cronProps.setSegundo(this.Segundo);
    cronProps.setMilissegundo(this.Milissegundo);
  }

  static Comecar(cronProps) {
    this.Pausar();

    this.Cron = setInterval(() => {
      this.Temporizador(cronProps);
    }, 10);
  }

  static Pausar() {
    clearInterval(this.Cron);
  }

  static Reiniciar(cronProps) {
    this.Minuto = 20;
    this.Segundo = 0;
    this.Milissegundo = 990;

    this.Pausar();

    cronProps.setMinuto(this.Minuto);
    cronProps.setSegundo(this.Segundo);
    cronProps.setMilissegundo(0);
  }

  static FormatarTempo = (minuto, segundo, milissegundo) => {
    const mm = String(minuto).padStart(2, "0");
    const ss = String(segundo).padStart(2, "0");
    const mmm = String(milissegundo).padStart(3, "0");

    return `${mm}:${ss}.${mmm}`;
  };
}

export default CronometroPomodoroUtil;
