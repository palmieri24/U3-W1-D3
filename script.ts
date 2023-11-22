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
  redditoLordo: number;
  constructor(_redditoLordo: number) {
    super(_redditoLordo);
    this.redditoLordo = _redditoLordo;
  }

  getUtileTasse(): number {
    return this.redditoLordo * 0.78;
  }

  getTasseIrpef(): number {
    return this.redditoLordo * 0.5;
  }

  getTasseInps(): number {
    return this.redditoLordo * 0.25;
  }

  getTasseNetto(): number {
    return this.getUtileTasse() - this.getTasseIrpef() - this.getTasseInps();
  }
}

class Professionista extends Lavoratore {
  getTasseIrpef() {
    let resultIrpef = this.getUtileTasse() * 0.05;
    let resultIrpef2 = this.getUtileTasse() - resultIrpef;
    return resultIrpef2;
  }

  getTasseInps() {
    let resultInps = this.getUtileTasse() * 0.25;
    let resultInps2 = this.getUtileTasse() - resultInps;
    return resultInps2;
  }
}

let newProfessionista = new Professionista(1000);
console.log(newProfessionista);

class Artigiano extends Lavoratore {
  getTasseIrpef() {
    return this.getUtileTasse() * 0.15;
  }

  getTasseInps() {
    return this.getUtileTasse() * 0.15;
  }
}

class Commerciante extends Lavoratore {
  getTasseIrpef() {
    return this.getUtileTasse() * 0.15;
  }

  getTasseInps() {
    return this.getUtileTasse() * 0.35;
  }
}
