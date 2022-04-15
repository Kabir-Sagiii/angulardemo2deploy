import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterDataService {
   info:any =[{"id":1,"first_name":"Stephanie","last_name":"Lawling","email":"slawling0@technorati.com","gender":"Female","ip_address":"76.107.9.84","image":"http://dummyimage.com/165x100.png/cc0000/ffffff"},
   {"id":2,"first_name":"Riannon","last_name":"Stocken","email":"rstocken1@yelp.com","gender":"Male","ip_address":"35.140.19.69","image":"http://dummyimage.com/228x100.png/5fa2dd/ffffff"},
   {"id":3,"first_name":"Carson","last_name":"Comberbeach","email":"ccomberbeach2@netscape.com","gender":"Female","ip_address":"165.171.134.252","image":"http://dummyimage.com/190x100.png/ff4444/ffffff"},
   {"id":4,"first_name":"Allys","last_name":"Bryett","email":"abryett3@illinois.edu","gender":"Female","ip_address":"59.3.143.233","image":"http://dummyimage.com/206x100.png/ff4444/ffffff"},
   {"id":5,"first_name":"Fritz","last_name":"Reaman","email":"freaman4@weibo.com","gender":"Male","ip_address":"124.115.28.57","image":"http://dummyimage.com/206x100.png/cc0000/ffffff"},
   {"id":6,"first_name":"Lisetta","last_name":"Lodge","email":"llodge5@youku.com","gender":"Male","ip_address":"47.188.139.40","image":"http://dummyimage.com/176x100.png/5fa2dd/ffffff"},
   {"id":7,"first_name":"Von","last_name":"Jandl","email":"vjandl6@hc360.com","gender":"Male","ip_address":"210.127.83.4","image":"http://dummyimage.com/203x100.png/5fa2dd/ffffff"},
   {"id":8,"first_name":"Marlow","last_name":"Blackborough","email":"mblackborough7@com.com","gender":"Male","ip_address":"25.101.211.253","image":"http://dummyimage.com/125x100.png/ff4444/ffffff"},
   {"id":9,"first_name":"Kalvin","last_name":"Hadgkiss","email":"khadgkiss8@irs.gov","gender":"Female","ip_address":"18.73.115.68","image":"http://dummyimage.com/112x100.png/cc0000/ffffff"},
   {"id":10,"first_name":"Maximilianus","last_name":"Ibbott","email":"mibbott9@pbs.org","gender":"Female","ip_address":"245.228.22.195","image":"http://dummyimage.com/199x100.png/5fa2dd/ffffff"},
   {"id":11,"first_name":"Gabbey","last_name":"Scowcroft","email":"gscowcrofta@csmonitor.com","gender":"Male","ip_address":"154.58.67.169","image":"http://dummyimage.com/117x100.png/dddddd/000000"},
   {"id":12,"first_name":"Garrott","last_name":"Ruecastle","email":"gruecastleb@arstechnica.com","gender":"Female","ip_address":"100.192.249.84","image":"http://dummyimage.com/155x100.png/5fa2dd/ffffff"},
   {"id":13,"first_name":"Bibby","last_name":"Seif","email":"bseifc@usatoday.com","gender":"Male","ip_address":"91.185.232.68","image":"http://dummyimage.com/136x100.png/ff4444/ffffff"},
   {"id":14,"first_name":"Leoline","last_name":"Neal","email":"lneald@dell.com","gender":"Male","ip_address":"128.95.251.250","image":"http://dummyimage.com/233x100.png/ff4444/ffffff"},
   {"id":15,"first_name":"Paul","last_name":"Handrek","email":"phandreke@jugem.jp","gender":"Male","ip_address":"103.176.177.247","image":"http://dummyimage.com/107x100.png/cc0000/ffffff"},
   {"id":16,"first_name":"Lorene","last_name":"Echlin","email":"lechlinf@msu.edu","gender":"Male","ip_address":"191.147.37.100","image":"http://dummyimage.com/220x100.png/ff4444/ffffff"},
   {"id":17,"first_name":"Margaretta","last_name":"Sanford","email":"msanfordg@linkedin.com","gender":"Male","ip_address":"43.12.92.239","image":"http://dummyimage.com/150x100.png/cc0000/ffffff"},
   {"id":18,"first_name":"Lay","last_name":"Bakster","email":"lbaksterh@flickr.com","gender":"Female","ip_address":"223.151.123.31","image":"http://dummyimage.com/183x100.png/ff4444/ffffff"},
   {"id":19,"first_name":"Meredith","last_name":"Rockwell","email":"mrockwelli@people.com.cn","gender":"Male","ip_address":"80.251.107.80","image":"http://dummyimage.com/189x100.png/dddddd/000000"},
   {"id":20,"first_name":"Cindra","last_name":"Prop","email":"cpropj@pen.io","gender":"Female","ip_address":"29.141.136.26","image":"http://dummyimage.com/132x100.png/dddddd/000000"},
   {"id":21,"first_name":"Jen","last_name":"Antoons","email":"jantoonsk@nyu.edu","gender":"Female","ip_address":"168.249.166.111","image":"http://dummyimage.com/237x100.png/dddddd/000000"},
   {"id":22,"first_name":"Hamid","last_name":"Growcock","email":"hgrowcockl@about.me","gender":"Male","ip_address":"185.21.61.213","image":"http://dummyimage.com/203x100.png/ff4444/ffffff"},
   {"id":23,"first_name":"Carlene","last_name":"Finicj","email":"cfinicjm@example.com","gender":"Female","ip_address":"255.102.152.84","image":"http://dummyimage.com/141x100.png/cc0000/ffffff"},
   {"id":24,"first_name":"Zachariah","last_name":"Esby","email":"zesbyn@imageshack.us","gender":"Female","ip_address":"29.191.120.136","image":"http://dummyimage.com/115x100.png/ff4444/ffffff"},
   {"id":25,"first_name":"Carina","last_name":"Oakwell","email":"coakwello@auda.org.au","gender":"Male","ip_address":"50.167.127.233","image":"http://dummyimage.com/209x100.png/ff4444/ffffff"},
   {"id":26,"first_name":"Barth","last_name":"Royal","email":"broyalp@senate.gov","gender":"Female","ip_address":"241.202.135.14","image":"http://dummyimage.com/114x100.png/cc0000/ffffff"},
   {"id":27,"first_name":"Kyle","last_name":"Chippendale","email":"kchippendaleq@dropbox.com","gender":"Female","ip_address":"3.57.196.8","image":"http://dummyimage.com/146x100.png/5fa2dd/ffffff"},
   {"id":28,"first_name":"Lowell","last_name":"Mitrikhin","email":"lmitrikhinr@hexun.com","gender":"Female","ip_address":"184.36.203.70","image":"http://dummyimage.com/116x100.png/dddddd/000000"},
   {"id":29,"first_name":"Farlay","last_name":"Giacubbo","email":"fgiacubbos@livejournal.com","gender":"Female","ip_address":"158.8.174.136","image":"http://dummyimage.com/212x100.png/5fa2dd/ffffff"},
   {"id":30,"first_name":"Danyette","last_name":"Affuso","email":"daffusot@businessinsider.com","gender":"Male","ip_address":"207.3.15.83","image":"http://dummyimage.com/198x100.png/dddddd/000000"}]
  constructor() { }
}
