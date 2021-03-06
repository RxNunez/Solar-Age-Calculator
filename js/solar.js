import { moment } from './../node_modules/moment/moment.js';

export class SolarAge {

  function Calculator(skin) {
  this.skin = skin;
}

  getSecond(age){
    const secPerYear = 1000 * 60 * 60 * 24 * 365;
    let sec = Math.floor((age * secPerYear));
    return sec;
  }
  getEarth(bday){
    let now = moment();
    let born = moment(bday);
    let output = now.diff(born, 'seconds');
    return output;
  }
  getMercury(age){
    let mercury = Math.floor((age*.24));
    return mercury;
  }
  getVenus(age){
    let venus = Math.floor((age*.62));
    return venus
  }
  getMars(age){
    let mars = Math.floor((age*1.88));
    return mars
  }
  getJupiter(age){
    let jupiter = Math.floor((age*11.86));
    return jupiter
  }
}
  timeLeft(world, userAge){
    const expectancy = 71.5; //world average age 2016
    let lifeLeft ="";
    let mercuryLife = this.getMercury(expectancy);
    let venusLife = this.getVenus(expectancy);
    let marsLife = this.getMars(expectancy);
    let jupiterLife = this.getJupiter(expectancy);
    if (world === "mercury" && userAge <= mercuryLife){
      lifeLeft = expectancy - this.getMercury(userAge);
    }else if (world === "venus" && userAge <= venusLife){
      lifeLeft = expectancy - this.getVenus(userAge);
    }else if (world === "mars" && userAge <= marsLife){
      lifeLeft = expectancy - this.getMars(userAge);
    }else if (world === "jupiter" && userAge <= jupiterLife){
      lifeLeft = expectancy - this.getJupiter(userAge);
    }else if((world === "mercury" && userAge > mercuryLife) || (world === "venus" && userAge > venusLife) || (world === "mars" && userAge > marsLife) || (world === "jupiter" && userAge > jupiterLife)) {
      leftLife = `You should be dead on ${world}!`;
    }
    return lifeLeft;
    }

  }
