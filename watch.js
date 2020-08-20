setInterval(() =>{
    d = new Date();
    ht = d.getHours();
    mt = d.getMinutes();
    st = d.getSeconds();
    hr = 30*ht + mt/2;
    mr = 6*mt;
    sr = 6*st;
    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${mr}deg)`;
    second.style.transform = `rotate(${sr}deg)`;
    
    
  },1000);