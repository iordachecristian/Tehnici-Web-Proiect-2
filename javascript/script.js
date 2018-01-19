function populate(slct1,slct2){
    var slct1 = document.getElementById(slct1);
    var slct2 = document.getElementById(slct2);
    slct2.innerHTML = "|";
    if(slct1.value == "SniperRifle"){
        var optionArray = ["|","awm|AWM","kar98|Kar98","sks|SKS"];
    } else if(slct1.value == "AssaultRifle"){
        var optionArray = ["|","akm|AKM","m16|M16","scar-l|SCAR-L"];
    } else if(slct1.value == "SMG"){
        var optionArray = ["|","ump|UMP","micro-uzi|Micro-UZI","vector|Vector"];
    } else if(slct1.value == "Shotgun"){
        var optionArray = ["|","s686|S686","s1897|S1897","s12k|S12K"];
    } else if(slct1.value == "Pistol"){
        var optionArray = ["|","p1911|P1911","p18c|P18C","revolver|Revolver"];
    } else if(slct1.value == "Grenade"){
        var optionArray = ["|","grenade|Grenade","molotov|Molotov","smoke|Smoke"];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        slct2.options.add(newOption);
    }
}
var reset = 0;

function incarca(option){
    if (reset > 0) {
        document.getElementById("select-buttons").lastChild.remove();
    }
    
    if((slct2.options[slct2.selectedIndex].text) != '|') {

        var request = new XMLHttpRequest();  
        request.open("GET", url, false);    

        if (request.status === 200) 
        {  
            console.log(request.statusText);
        };
        
        var img = document.createElement('img');
        img.style.display = "block";
        img.style.margin = "auto";
        img.style.maxWidth = "500px";
        img.style.maxHeight = "500px";
        img.style.height = "auto";
        
        if ((slct2.options[slct2.selectedIndex].text) == "AWM" ) {
            var url = 'https://cors.io/?http://www.playerunknownsbattlegroundsguide.com/wp-content/uploads/2017/08/pubg_AWM_Icon-200x86.png';
        } 
        else if ((slct2.options[slct2.selectedIndex].text) == "Kar98" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/7/7e/Icon_weapon_Kar98k.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "SKS" ) {
            var url = "https://cors.io/?http://www.playerunknownsbattlegroundsguide.com/wp-content/uploads/2017/08/pubg_SKS_Icon-200x86.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "AKM" ) {
            var url = "https://cors.io/?https://i1.wp.com/pubgaddict.com/wp-content/uploads/2017/12/AKM.png?w=1170";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "M16" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/c/c1/Icon_weapon_M16A4.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "SCAR-L" ) {
            var url = "https://cors.io/?http://www.playerunknownsbattlegroundsguide.com/wp-content/uploads/2017/08/pubg_SCAR_L_Icon-200x86.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "UMP" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/f/fb/Icon_weapon_UMP.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "Micro-UZI" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/e/ec/Icon_weapon_UZI.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "Vector" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/c/c5/Icon_weapon_Vector_01.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "S686" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/f/f2/Icon_weapon_Berreta686.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "S1897" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/3/35/Icon_weapon_Winchester.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "S12K" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/f/f9/Icon_weapon_Saiga12.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "P1911" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/1/16/Icon_weapon_M1911.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "P18C" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/c/c0/Icon_weapon_P18C.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "Revolver" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/9/93/Icon_weapon_NagantM1895.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "Grenade" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/d/d7/Icon_weapon_Grenade.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "Molotov" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/a/a2/Icon_weapon_Molotov.png";
        }
        else if ((slct2.options[slct2.selectedIndex].text) == "Smoke" ) {
            var url = "https://cors.io/?https://d1u5p3l4wpay3k.cloudfront.net/battlegrounds_gamepedia_en/1/15/Icon_weapon_SmokeBomb.png";
        }
        img.src = url;
        document.getElementById("select-buttons").append(img);
    };
    reset++;
};