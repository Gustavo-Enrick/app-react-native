class CronometroUtil {
  static Cron = 0;
  static Minuto = 0;
  static Segundo = 0;
  static Milissegundo = 0;

  static Temporizador(cronProps) {
    if ((this.Milissegundo += 10) == 1000) {
      this.Milissegundo = 0;
      this.Segundo++;
    }

    if (this.Segundo == 60) {
      this.Segundo = 0;
      this.Minuto++;
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
    this.Minuto = 0;
    this.Segundo = 0;
    this.Milissegundo = 0;

    this.Pausar();

    cronProps.setMinuto(this.Minuto);
    cronProps.setSegundo(this.Segundo);
    cronProps.setMilissegundo(this.Milissegundo);
  }

  static FormatarTempo = (minuto, segundo, milissegundo) => {
    const mm = String(minuto).padStart(2, "0");
    const ss = String(segundo).padStart(2, "0");
    const mmm = String(milissegundo).padStart(3, "0");

    return `${mm}:${ss}.${mmm}`;
  };
}

export default CronometroUtil;
