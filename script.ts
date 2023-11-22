abstract class Tasse {
  redditoLordo: number;
  constructor(_redditoLordo: number) {
    this.redditoLordo = _redditoLordo;
  }
  abstract getUtileTasse(): any;
  abstract getTasseIrpef(): any;
  abstract getTasseInps(): any;
}

class Lavoratore extends Tasse {
  super(_redditoLordo: number): number;

  getUtileTasse() {
    this.redditoLordo * 0.22;
  }

  getTasseIrpef() {
    return;
  }

  getTasseInps() {
    return;
  }

  getTasseNetto() {
    return getUtileTasse() - getTasseIrpef() - getTasseInps();
  }
}

class Professionista extends Lavoratore {
  getTasseIrpef() {
    return getUtileTasse() * 0.05;
  }

  getTasseInps() {
    return getUtileTasse() * 0.25;
  }
}

class Artigiano extends Lavoratore {
  getTasseIrpef() {
    return getUtileTasse() * 0.15;
  }

  getTasseInps() {
    return getUtileTasse() * 0.15;
  }
}

class Commerciante extends Lavoratore {
  getTasseIrpef() {
    return getUtileTasse() * 0.15;
  }

  getTasseInps() {
    return getUtileTasse() * 0.35;
  }
}
