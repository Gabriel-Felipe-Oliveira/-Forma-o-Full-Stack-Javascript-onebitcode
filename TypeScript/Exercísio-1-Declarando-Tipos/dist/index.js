var spaceships = []; // Se 'spaceships' não estiver definido anteriormente, você precisa criá-lo.
function addSpaceship(name, captain, crewLimit) {
    var spaceship = {
        name: name,
        captain: captain,
        crewLimit: crewLimit,
        inMission: false,
        crew: []
    };
    spaceships.push(spaceship);
    // Adicione qualquer lógica adicional aqui, se necessário.
    // Retorne a nave espacial criada, se necessário.
    return spaceship;
}
function findSpaceship(name) {
    var spaceship;
    spaceship = spaceships.find(function (ship) {
        return ship.name === name;
    });
    return spaceship;
}
function missionSpaceship(spaceship) {
    if (!spaceship.inMission) {
        alert('Sua nave começara uma missão ');
        if (spaceship.crew.length += Math.floor(spaceship.crewLimit / 3)) {
            alert('A tripulação atingiu um terço do limite. Preparando para a missão especial!');
            // Adicione aqui qualquer lógica adicional necessária para a missão especial.
            return;
        }
        alert("Falta tripulantes");
    }
    alert("Sua nave ja esta em missão");
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert("".concat(member, " n\u00E3o pode ser adicionado \u00E0 tripula\u00E7\u00E3o. Limite atingido."));
    }
    else {
        spaceship.crew.push(member);
        alert("".concat(member, " foi adicionado \u00E0 tripula\u00E7\u00E3o da ").concat(spaceship.name));
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert("".concat(spaceship.name, " n\u00E3o pode ser enviada. Nave j\u00E1 em miss\u00E3o."));
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert("".concat(spaceship.name, " n\u00E3o pode ser enviada. Tripula\u00E7\u00E3o insuficiente."));
    }
    else {
        spaceship.inMission = true;
        alert("".concat(spaceship.name, " enviada para a miss\u00E3o!"));
    }
}
function firstMenuOption() {
    var name = prompt('Qual é o nome da nave a ser registrada?');
    var pilot = prompt("Qual \u00E9 o nome do piloto da ".concat(name));
    var crewLimit = Number.parseInt(prompt("Quantos tripulantes a ".concat(name, " suporta?")));
    var confirmation = confirm("Confirma o registro da nave ".concat(name, "?\nPiloto: ").concat(pilot, "\nTamanho da Tripula\u00E7\u00E3o: ").concat(crewLimit));
    if (confirmation) {
        addSpaceship(name, pilot, crewLimit);
    }
}
function secondMenuOption() {
    var member = prompt('Qual é o nome do tripulante?');
    var spaceshipName = prompt("Para qual nave ".concat(member, " dever\u00E1 ser designado?"));
    var spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        var confirmation = confirm("Confirma a inclus\u00E3o de ".concat(member, " na tripula\u00E7\u00E3o da ").concat(spaceship.name, "?"));
        if (confirmation) {
            addCrewMember(member, spaceship);
        }
    }
}
function thirdMenuOption() {
    var spaceshipName = prompt('Qual é o nome da nave a ser enviada?');
    var spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        var confirmation = confirm("Confirma e envio da ".concat(spaceship.name, " na miss\u00E3o?"));
        if (confirmation) {
            sendInMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    var list = 'Naves Registradas:\n';
    spaceships.forEach(function (spaceship) {
        list += "\n      Nave: ".concat(spaceship.name, "\n      Piloto: ").concat(spaceship.pilot, "\n      Em miss\u00E3o? ").concat(spaceship.inMission ? 'Sim' : 'Não', "\n      Tamanho M\u00E1ximo da Triupla\u00E7\u00E3o: ").concat(spaceship.crewLimit, "\n      Tripulantes: ").concat(spaceship.crew.length, "\n    ");
        spaceship.crew.forEach(function (member) {
            list += "    - ".concat(member, "\n");
        });
    });
    alert(list);
}
var userOption = 0;
while (userOption !== 5) {
    var menu = "Painel Principal\n    1 - Registrar uma nova nave\n    2 - Adicionar membro da tripula\u00E7\u00E3o\n    3 - Enviar nave em miss\u00E3o\n    4 - Listar naves registradas\n    5 - Encerrar\n  ";
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
// Agora você pode acessar as propriedades da nave espacial, por exemplo:
