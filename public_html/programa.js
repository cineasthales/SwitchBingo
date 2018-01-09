function scrollAbout() {
    document.getElementById('hAbout').scrollIntoView();
}
function scrollGen() {
    document.getElementById('hGen').scrollIntoView();
}
function scrollDonate() {
    document.getElementById('hDonate').scrollIntoView();
}
function scrollNews() {
    document.getElementById('hNews').scrollIntoView();
}
function scrollHow() {
    document.getElementById('hHow').scrollIntoView();
}

function download() {
    document.getElementById("divTabela").style.display = "block";
    html2canvas(document.getElementById("render"), {
        onrendered: function (canvas) {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png");
            a.download = 'nxbingo.png';
            a.click();
            document.getElementById("divTabela").style.display = "none";
        },
        width: 1200
    });

}

function novo() {
    location.reload();
    window.scrollTo(0, 0);
}

function imagem() {
    html2canvas(document.getElementById("render"), {
        onrendered: function (canvas) {
            document.getElementById("imagem").appendChild(canvas);
            document.getElementById("divTabela").style.display = "none";
            document.getElementById("imagem").style.backgroundImage = 'url("")';
            document.getElementById("rightclick").innerHTML = "<p><br>DONE! Just click on Download below or right click over the image and save it!</p>";
        },
        width: 1200
    });
}

function escolher() {
    document.getElementById("buttons1").style.display = "none";

    document.getElementById("divTabela").style.display = "none";
    document.getElementById("divForm").style.display = "block";
}

function conferir() {

    var i, soma = 0, selecionado;

    for (i = 1; i <= 86; i++) {
        selecionado = document.getElementById("op" + i).checked;
        if (selecionado === true) {
            soma++;
        }
    }
    if (soma === 1) {
        document.getElementById("mensagem").innerHTML = "";
        document.getElementById("mensagem").innerHTML = "ERROR: you selected " + soma + " option.\nDo not select less than 24.<br><br>";
        document.getElementById("mensagem").style.display = "block";
    } else if (soma > 24) {
        document.getElementById("mensagem").innerHTML = "";
        document.getElementById("mensagem").innerHTML = "ERROR: you selected " + soma + " options.\nDo not select more than 24.<br><br>";
        document.getElementById("mensagem").style.display = "block";
    } else if (soma < 24 && soma !== 1) {
        document.getElementById("mensagem").innerHTML = "";
        document.getElementById("mensagem").innerHTML = "ERROR: you selected " + soma + " options.\nDo not select less than 24.<br><br>";
        document.getElementById("mensagem").style.display = "block";
    } else {

        for (i = 1; i <= 86; i++) {
            document.getElementById("op" + i).disabled = true;
        }

        document.getElementById("btform").style.display = "none";
        document.getElementById("mensagem").style.display = "block";
        document.getElementById("mensagem").innerHTML = "";
        document.getElementById("mensagem").innerHTML = '<span style="color: green">You chose 24 options! Check if they are the right ones.</span><br><br>';
        document.getElementById("confirm").style.display = "block";
    }
}




function cancelar() {

    var i;
    for (i = 1; i <= 86; i++) {
        if (i !== 1 && i !== 2 && i !== 5 && i !== 6 && i !== 8 && i !== 10 && i !== 18 && i !== 23 && i !== 24 && i !== 28 && i !== 30 && i !== 32) {
            document.getElementById("op" + i).disabled = false;
        }
    }

    document.getElementById("confirm").style.display = "none";
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("btform").style.display = "block";
}

function gerarEscolhidos() {
    window.scrollTo(0, 0);
    document.getElementById("rightclick").innerHTML = '<p style="color: black;"><br>Loading...</p>';
    document.getElementById("rightclick").style.display = "block";

    var card = [], i, j = 0, selecionado;

    // zera o vetor
    for (i = 0; i < 25; i++) {
        card[i] = 0;
    }

    document.getElementById("confirm").style.display = "none";
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("buttons2").style.display = "block";

    document.getElementById("divForm").style.display = "none";
    for (i = 1; i <= 86; i++) {
        selecionado = document.getElementById("op" + i).checked;
        if (selecionado === true) {
            do {
                j = Math.floor(Math.random() * 24);
                if (j === 12) {
                    j = 24;
                }
            } while (card[j] > 0);
            card[j] = parseInt(document.getElementById("op" + i).value);
            preencher(card[j], j);
        }
    }
    document.getElementById("divTabela").style.display = "block";
    imagem();
}

function gerar() {
    document.getElementById("rightclick").innerHTML = '<p style="color: black;"><br>Loading...</p>';
    document.getElementById("buttons1").style.display = "none";
    document.getElementById("buttons2").style.display = "block";
    document.getElementById("rightclick").style.display = "block";

    document.getElementById("divForm").style.display = "none";
    document.getElementById("divTabela").style.display = "block";

    var i, j, card = [], chose;

    // zera o vetor
    for (i = 0; i < 25; i++) {
        card[i] = 0;
    }

    // escolhe os números aleatoriamente
    for (i = 0; i < 25; i++) {
        if (i !== 12) {
            do {
                do {
                    card[i] = Math.floor((Math.random() * 86) + 1);
                } while (card[i] === 1 || card[i] === 2 || card[i] === 5 ||
                        card[i] === 6 || card[i] === 8 || card[i] === 10 ||
                        card[i] === 18 || card[i] === 23 || card[i] === 24 ||
                        card[i] === 28 || card[i] === 30 || card[i] === 32);
                chose = true;
                for (j = 0; j < i; j++) {
                    if (card[i] === card[j]) {
                        chose = false;
                        break;
                    }
                }
            } while (chose === false);
        }
    }

    for (i = 0; i < 25; i++) {
        preencher(card[i], i);
    }

    imagem();
}

function preencher(cell, i) {
    switch (cell) {
        case 1:
            document.getElementById("celula" + i).innerHTML = "Console and handheld hybrid";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/hybrid.png")';
            break;
        case 2:
            document.getElementById("celula" + i).innerHTML = 'A very different concept';
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/dif.png")';
            break;
        case 3:
            document.getElementById("celula" + i).innerHTML = "Compatibility with non-Nintendo devices";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/pc.png")';
            break;
        case 4:
            document.getElementById("celula" + i).innerHTML = "No discs";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/cd.png")';
            break;
        case 5:
            document.getElementById("celula" + i).innerHTML = "Two screens support";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/screens.png")';
            break;
        case 6:
            document.getElementById("celula" + i).innerHTML = "Nvidia Tegra chip";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/nvidia.png")';
            break;
        case 7:
            document.getElementById("celula" + i).innerHTML = "No Region Lock";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/lock.png")';
            break;
        case 8:
            document.getElementById("celula" + i).innerHTML = "Cartridges";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/cart.png")';
            break;
        case 9:
            document.getElementById("celula" + i).innerHTML = "Digitally backwards compatible";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/wiiu.png")';
            break;
        case 10:
            document.getElementById("celula" + i).innerHTML = "Amiibo support";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/amiibo.png")';
            break;
        case 11:
            document.getElementById("celula" + i).innerHTML = "4K Gaming";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/4k.png")';
            break;
        case 12:
            document.getElementById("celula" + i).innerHTML = "Streaming<br> in 4K";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/4k.png")';
            break;
        case 13:
            document.getElementById("celula" + i).innerHTML = "HDR";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/hdr.png")';
            break;
        case 14:
            document.getElementById("celula" + i).innerHTML = "VR compatibility";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/vr.png")';
            break;
        case 15:
            document.getElementById("celula" + i).innerHTML = "AR compatibility";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/ar.png")';
            break;
        case 16:
            document.getElementById("celula" + i).innerHTML = "Achievements or Trophies";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/trophy.png")';
            break;
        case 17:
            document.getElementById("celula" + i).innerHTML = "Mobile games emulator included";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/android.png")';
            break;
        case 18:
            document.getElementById("celula" + i).innerHTML = "Remote play";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/remote.png")';
            break;
        case 19:
            document.getElementById("celula" + i).innerHTML = "Miiverse";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/miiverse.png")';
            break;
        case 20:
            document.getElementById("celula" + i).innerHTML = "Virtual Console";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/virtual.png")';
            break;
        case 21:
            document.getElementById("celula" + i).innerHTML = "Nintendo eShop";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/eshop.png")';
            break;
        case 22:
            document.getElementById("celula" + i).innerHTML = "Subscription service";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/subs.png")';
            break;
        case 23:
            document.getElementById("celula" + i).innerHTML = "Unreal 4 support";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/unreal.png")';
            break;
        case 24:
            document.getElementById("celula" + i).innerHTML = "Unity support";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/unity.png")';
            break;
        case 25:
            document.getElementById("celula" + i).innerHTML = "GameMaker support";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/gamemaker.png")';
            break;
        case 26:
            document.getElementById("celula" + i).innerHTML = "Virtual buttons in a touch screen";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/vbut.png")';
            break;
        case 27:
            document.getElementById("celula" + i).innerHTML = "Force sensitive buttons";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/force.png")';
            break;
        case 28:
            document.getElementById("celula" + i).innerHTML = "Divided D-Pad";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/dpad.png")';
            break;
        case 29:
            document.getElementById("celula" + i).innerHTML = '"Share" button';
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/share.png")';
            break;
        case 30:
            document.getElementById("celula" + i).innerHTML = "Detachable motion controllers";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/motion.png")';
            break;
        case 31:
            document.getElementById("celula" + i).innerHTML = "Exchangeable button groups";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/butgroups.png")';
            break;
        case 32:
            document.getElementById("celula" + i).innerHTML = "Standard controller option";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/pro.png")';
            break;
        case 33:
            document.getElementById("celula" + i).innerHTML = "Bayonetta series port";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/bayo.png")';
            break;
        case 34:
            document.getElementById("celula" + i).innerHTML = "Super Smash Bros 4 port or new game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/smash.png")';
            break;
        case 35:
            document.getElementById("celula" + i).innerHTML = "Splatoon port or new game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/splatoon.png")';
            break;
        case 36:
            document.getElementById("celula" + i).innerHTML = "Super Mario Maker port";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/mmaker.png")';
            break;
        case 37:
            document.getElementById("celula" + i).innerHTML = "A new IP";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/newip.png")';
            break;
        case 38:
            document.getElementById("celula" + i).innerHTML = "New 3D Mario game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/mario.png")';
            break;
        case 39:
            document.getElementById("celula" + i).innerHTML = "New Pokémon game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/pokemon.png")';
            break;
        case 40:
            document.getElementById("celula" + i).innerHTML = "New Luigi's Mansion game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/luigi.png")';
            break;
/// MEIO ///
        case 41:
            document.getElementById("celula" + i).innerHTML = "New Yoshi game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/yoshi.png")';
            break;
        case 42:
            document.getElementById("celula" + i).innerHTML = "New Kirby game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/kirby.png")';
            break;
        case 43:
            document.getElementById("celula" + i).innerHTML = "New Donkey Kong game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/dk.png")';
            break;
        case 44:
            document.getElementById("celula" + i).innerHTML = "New Fire Emblem game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/chrom.png")';
            break;
        case 45:
            document.getElementById("celula" + i).innerHTML = "New Wario game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/wario.png")';
            break;
        case 46:
            document.getElementById("celula" + i).innerHTML = "New Metroid game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/samus.png")';
            break;
        case 47:
            document.getElementById("celula" + i).innerHTML = "New F-Zero game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/fzero.png")';
            break;
        case 48:
            document.getElementById("celula" + i).innerHTML = "New Pikmin game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/pikmin.png")';
            break;
        case 49:
            document.getElementById("celula" + i).innerHTML = "New Advance/Battalion Wars game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/wars.png")';
            break;
        case 50:
            document.getElementById("celula" + i).innerHTML = "New Golden Sun game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/isaac.png")';
            break;
        case 51:
            document.getElementById("celula" + i).innerHTML = "New Kid Icarus game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/pit.png")';
            break;
        case 52:
            document.getElementById("celula" + i).innerHTML = "New Xenoblade Chronicles game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/shulk.png")';
            break;
        case 53:
            document.getElementById("celula" + i).innerHTML = "A new Platinum game or sequel";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/platinum.png")';
            break;
        case 54:
            document.getElementById("celula" + i).innerHTML = "Exclusive features in the new Zelda";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/link.png")';
            break;
        case 55:
            document.getElementById("celula" + i).innerHTML = "Mother 3 localization";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/mother3.png")';
            break;
        case 56:
            document.getElementById("celula" + i).innerHTML = "Sega game(s) announcement";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/sega.png")';
            break;
        case 57:
            document.getElementById("celula" + i).innerHTML = "Ubisoft game(s) announcement";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/ubisoft.png")';
            break;
        case 58:
            document.getElementById("celula" + i).innerHTML = "Bandai Namco game(s) announcement";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/bandai.png")';
            break;
        case 59:
            document.getElementById("celula" + i).innerHTML = "Square-Enix game(s) announcement";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/squaree.png")';
            break;
        case 60:
            document.getElementById("celula" + i).innerHTML = "Capcom game(s) announcement";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/capcom.png")';
            break;
        case 61:
            document.getElementById("celula" + i).innerHTML = "WB game(s) announcement";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/wb.png")';
            break;
        case 62:
            document.getElementById("celula" + i).innerHTML = "2K game(s) announcement";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/2k.png")';
            break;
        case 63:
            document.getElementById("celula" + i).innerHTML = "EA game(s) announcement";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/ea.png")';
            break;
        case 64:
            document.getElementById("celula" + i).innerHTML = "Bethesda game(s) announcement";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/bethesda.png")';
            break;
        case 65:
            document.getElementById("celula" + i).innerHTML = "Activision game(s) announcement";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/activision.png")';
            break;
        case 66:
            document.getElementById("celula" + i).innerHTML = "Konami game(s) announcement";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/konami.png")';
            break;
        case 67:
            document.getElementById("celula" + i).innerHTML = "Built in projector";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/projector.png")';
            break;
        case 68:
            document.getElementById("celula" + i).innerHTML = "Joy-con has a pointer";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/joycon.png")';
            break;
        case 69:
            document.getElementById("celula" + i).innerHTML = "Mario Kart 8 port or new game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/mk8.png")';
            break;
        case 70:
            document.getElementById("celula" + i).innerHTML = "USB-C cord to charge";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/usbc.png")';
            break;
        case 71:
            document.getElementById("celula" + i).innerHTML = "4Gb RAM";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/ram.png")';
            break;
        case 72:
            document.getElementById("celula" + i).innerHTML = "16Gb std cartridges capacity";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/3ds.png")';
            break;
        case 73:
            document.getElementById("celula" + i).innerHTML = "No headphone jack on the Pro Controller";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/jack.png")';
            break;
        case 74:
            document.getElementById("celula" + i).innerHTML = "6.2'' 720p multitouch screen";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/switchscreen.png")';
            break;
        case 75:
            document.getElementById("celula" + i).innerHTML = "No external drives support";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/hd.png")';
            break;
        case 76:
            document.getElementById("celula" + i).innerHTML = "MicroSD up to 128Gb support";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/sd.png")';
            break;
        case 77:
            document.getElementById("celula" + i).innerHTML = "Joy-con grip sold separately";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/grip.png")';
            break;
        case 78:
            document.getElementById("celula" + i).innerHTML = "Analog triggers";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/trigger.png")';
            break;
        case 79:
            document.getElementById("celula" + i).innerHTML = "3 hours of battery life";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/battery.png")';
            break;
        case 80:
            document.getElementById("celula" + i).innerHTML = "Screenshots / Video record";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/screenshot.png")';
            break;
        case 81:
            document.getElementById("celula" + i).innerHTML = "Launch price US$ 300.00 or less";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/price.png")';
            break;
        case 82:
            document.getElementById("celula" + i).innerHTML = "Wii Remote and accessories compatible";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/wiiremote.png")';
            break;
        case 83:
            document.getElementById("celula" + i).innerHTML = "Wii U Pro Controller compatible";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/pro.png")';
            break;
        case 84:
            document.getElementById("celula" + i).innerHTML = "Gamecube Adapter compatible";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/adapter.png")';
            break;
        case 85:
            document.getElementById("celula" + i).innerHTML = "Mario & Rabbids crossover";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/rabbid.png")';
            break;
        case 86:
            document.getElementById("celula" + i).innerHTML = "Pokkén port or new game";
            document.getElementById("celula" + i).style.backgroundImage = 'url("img/pokken.png")';
            break;
    }

}
