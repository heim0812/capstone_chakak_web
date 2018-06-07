function resultView(casenumber, kid){
  var RSAkey;
  if (casenumber == 0 || kid !='heim0812'){
    $(function(){$('#boolimg').attr('src', 'NO.png');});
  }
  else if (casenumber == 1){
    console.log('case1');
    RSAkey = cryptico.generateRSAKey(kid,1024);
    $(function(){$('#boolimg').attr('src','OK.png');});
    $(function(){$('.Author').text('김대환 (heim0812)');});
    var d = new Date();
    var realtime = d.getFullYear() +'년'+ (d.getMonth()+1) +'월' +d.getDate() +'일'+d.getHours()+'시'+d.getMinutes()+'분';
    $(function(){$('.Time').text(realtime);});
    $(function(){$('.Locate').text('대전, 한국');});
    var pkey = cryptico.publicKeyString(RSAkey);
    $(function(){$('.pubkey').text(pkey);});
    var ptext = 'Author : 김대환 (heim0812) / ' + 'Time : ' + realtime + ' / Locate : 대전, 한국';
    var enc = cryptico.encrypt(KorToUnicode(ptext),pkey);
    $(function(){$('.cipher').text(enc.cipher);});
    var dec = cryptico.decrypt(enc.cipher, RSAkey);
    $(function(){$('.plainresult').text(UnicodeToKor(dec.plaintext));});
  }
  else if (casenumber == 2){
    console.log('case2');
    RSAkey = cryptico.generateRSAKey(kid,1024);
    $(function(){$('#boolimg').attr('src', 'OK.png');});
    $(function(){$('.Author').text('김대환 (heim0812)');});
    var yesterday = '2018년6월7일19시45분'
    $(function(){$('.Time').text(yesterday);});
    $(function(){$('.Locate').text('대전, 한국');});
    var pkey = cryptico.publicKeyString(RSAkey);
    $(function(){$('.pubkey').text(pkey);});
    var ptext = 'Author : 김대환 (heim0812) / ' + 'Time : ' + yesterday + ' / Locate : 대전, 한국';
    var enc = cryptico.encrypt(KorToUnicode(ptext),pkey);
    $(function(){$('.cipher').text(enc.cipher);});
    var dec = cryptico.decrypt(enc.cipher, RSAkey);
    $(function(){$('.plainresult').text(UnicodeToKor(dec.plaintext));});
  }
}

function replaceAll(strTemp, strValue1, strValue2){
  while(1){
    if( strTemp.indexOf(strValue1) != -1 )
      strTemp = strTemp.replace(strValue1, strValue2);
    else
      break;
  }
  return strTemp;
}
function UnicodeToKor(target){
  var str= target;
  return unescape(replaceAll(str, "\\", "%"));
}

function KorToUnicode(target){
  var str=target;
  return escape(replaceAll(str, "\\", "%"));
}
