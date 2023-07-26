let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);


let kaisu = 0;


let b = document.querySelector('#kaito');
  b.addEventListener('click', hantei);

  function hantei(){
    let i = document.querySelector('input[name="yoso"]');
    let inumber = Number(i.value);
    let yoso = inumber ;

  kaisu=kaisu+1;

  let kaisuSpan = document.querySelector('#kaisu');
  let answerSpan = document.querySelector('#answer');
  let resultDiv = document.querySelector('#result');

  let p1 = document.createElement('div');
  p1.textContent = kaisu + '回目の予想: ' + yoso;
  resultDiv.appendChild(p1);

  
  console.log(kaisu+'回目の予想:'+yoso);


if(kaisu<3){
  if(yoso === kotae){
    
    answerSpan.textContent = '正解です。おめでとう！'
    console.log('正解です。おめでとう！');
  }else if(yoso<kotae){
    
    answerSpan.textContent = 'まちがい、答えはもっと大きいですよ'
    console.log('まちがい、答えはもっと大きいですよ');
  }else if(yoso>kotae){
    answerSpan.textContent = 'まちがい、答えはもっと小さいですよ'
    console.log('まちがい、答えはもっと小さいですよ');
  }

}else if(kaisu===3){
  
  if(yoso===kotae){
    answerSpan.textContent = '正解です。おめでとう！'
    console.log('正解です。おめでとう！');
    kaisu=kaisu+3;
  }else{
    answerSpan.textContent = 'まちがい。残念でした答えは'+ kotae+'です。'
    console.log('まちがい。残念でした答えは'+ kotae+'です。');
  }

}else if(kaisu>3){
 answerSpan.textContent = '答えは'+kotae+'でした。すでにゲームは終わっています'
  console.log('答えは'+kotae+'でした。すでにゲームは終わっています');

}
kaisuSpan.textContent = kaisu;
  } 