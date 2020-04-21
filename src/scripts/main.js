'use strict';

function playGame() {
  const body = document.querySelector('body');

  body.style.backgroundColor = '#663333';
  body.style.fontSize = '2em';
  body.style.textAlign = 'center';
  body.style.color = 'orangered';

  body.innerHTML = `
    <h1>Tic Tac Toe</h1>
    <div class="wrapper">
    <table class="table">
        <tr class="row__first">
            <td class="row__first_1"></td>
            <td class="row__first_2"></td>
            <td class="row__first_3"></td>
        </tr>
        <tr class="row__second">
            <td class="row__second_1"></td>
            <td class="row__second_2"></td>
            <td class="row__second_3"></td>
        </tr>
        <tr class="row__third">
            <td class="row__third_1"></td>
            <td class="row__third_2"></td>
            <td class="row__third_3"></td>
        </tr>
</table>
</div>
  `;

  const wrapper = document.querySelector('.wrapper');

  wrapper.style.display = 'flex';
  wrapper.style.justifyContent = 'center';

  const choise = prompt('Select Your Team (x/o)', 'x');
  let step = 0;

  if (choise === 'x' || choise === 'X') {
    step = 1;
  }

  const cells = [...document.querySelectorAll('td')];

  for (let cell = 0; cell < cells.length; cell++) {
    cells[cell].style.backgroundColor = 'teal';
    cells[cell].style.width = '200px';
    cells[cell].style.height = '200px';
    cells[cell].style.backgroundRepeat = 'no-repeat';
    cells[cell].style.backgroundPosition = 'center';
    cells[cell].style.backgroundSize = '90%';
    cells[cell].style.borderRadius = '30px';

    cells[cell].addEventListener('click', () => {
      if (cells[cell].style.backgroundImage !== '') {
        return;
      }

      if (step % 2) {
        cells[cell].style.backgroundImage = `url("../images/x.png")`;
      } else {
        cells[cell].style.backgroundImage = `url("../images/o.png")`;
      }

      step++;

      setTimeout(function() {
        check();
      }, 100);
    });
  };
};

function check() {
  const first = document.querySelector('.row__first_1').style.backgroundImage;
  const second = document.querySelector('.row__first_2').style.backgroundImage;
  const third = document.querySelector('.row__first_3').style.backgroundImage;
  const forth = document.querySelector('.row__second_1').style.backgroundImage;
  const fifth = document.querySelector('.row__second_2').style.backgroundImage;
  const sixth = document.querySelector('.row__second_3').style.backgroundImage;
  const sevens = document.querySelector('.row__third_1').style.backgroundImage;
  const eights = document.querySelector('.row__third_2').style.backgroundImage;
  const ninth = document.querySelector('.row__third_3').style.backgroundImage;
  const arrayOfCells = [
    first,
    second,
    third,
    forth,
    fifth,
    sixth,
    sevens,
    eights,
    ninth,
  ];

  if (!!second && second === first && second === third) {
    if (second === `url("../images/x.png")`) {
      alert(
        `Team 'X' wins`
      );
    } else {
      alert(`Team 'O' wins`);
    }
    document.location.reload(true);
  }

  if (!!fifth && fifth === forth && fifth === sixth) {
    if (fifth === `url("../images/x.png")`) {
      alert(
        `Team 'X' wins`
      );
    } else {
      alert(`Team 'O' wins`);
    }
    document.location.reload(true);
  }

  if (!!eights && eights === sevens && eights === ninth) {
    if (eights === `url("../images/x.png")`) {
      alert(
        `Team 'X' wins`
      );
    } else {
      alert(`Team 'O' wins`);
    }
    document.location.reload(true);
  }

  if (!!forth && forth === first && forth === sevens) {
    if (forth === `url("../images/x.png")`) {
      alert(
        `Team 'X' wins`
      );
    } else {
      alert(`Team 'O' wins`);
    }
    document.location.reload(true);
  }

  if (!!fifth && fifth === second && fifth === eights) {
    if (fifth === `url("../images/x.png")`) {
      alert(
        `Team 'X' wins`
      );
    } else {
      alert(`Team 'O' wins`);
    }
    document.location.reload(true);
  }

  if (!!sixth && sixth === third && sixth === ninth) {
    if (sixth === `url("../images/x.png")`) {
      alert(
        `Team 'X' wins`
      );
    } else {
      alert(`Team 'O' wins`);
    }
    document.location.reload(true);
  }

  if (!!fifth && fifth === first && fifth === ninth) {
    if (fifth === `url("../images/x.png")`) {
      alert(
        `Team 'X' wins`
      );
    } else {
      alert(`Team 'O' wins`);
    }
    document.location.reload(true);
  }

  if (!!fifth && fifth === sevens && fifth === third) {
    if (fifth === `url("../images/x.png")`) {
      alert(
        `Team 'X' wins`
      );
    } else {
      alert(`Team 'O' wins`);
    }
    document.location.reload(true);
  }

  if (arrayOfCells.every(Boolean)) {
    alert(`It's a DRAW! Nobody wins`);
    document.location.reload(true);
  }
}

playGame();
