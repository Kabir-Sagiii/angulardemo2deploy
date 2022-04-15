import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  mydata:any =[
    {
      "id": "1",
      "name": "Grant",
      "city": "Redwater",
      "email": "tempor@senectuset.net"
    },
    {
      "id": "1",
      "name": "Kevin",
      "city": "Miraflores",
      "email": "sit@consequat.com"
    },
    {
      "id": "1",
      "name": "Grant",
      "city": "Tierralta",
      "email": "ante.Maecenas.mi@Donecelementum.ca"
    },
    {
      "id": "1",
      "name": "Anthony",
      "city": "Neuwied",
      "email": "imperdiet.ornare.In@Nam.edu"
    },
    {
      "id": "1",
      "name": "Bert",
      "city": "Schaarbeek",
      "email": "ligula.Nullam@lobortis.edu"
    },
    {
      "id": "1",
      "name": "Hedley",
      "city": "Pichidegua",
      "email": "ac@odioauctor.edu"
    },
    {
      "id": "1",
      "name": "Ray",
      "city": "Poitiers",
      "email": "Maecenas.ornare.egestas@disparturientmontes.net"
    },
    {
      "id": "1",
      "name": "Chadwick",
      "city": "Ceyhan",
      "email": "cubilia@velit.ca"
    },
    {
      "id": "1",
      "name": "Holmes",
      "city": "Saint-Brieuc",
      "email": "sit.amet.ornare@eget.edu"
    },
    {
      "id": "1",
      "name": "Ahmed",
      "city": "San Juan del Cesar",
      "email": "nascetur@pede.edu"
    },
    {
      "id": "1",
      "name": "Reese",
      "city": "Blankenfelde-Mahlow",
      "email": "lorem.tristique@morbi.co.uk"
    },
    {
      "id": "1",
      "name": "Stewart",
      "city": "Crecchio",
      "email": "Integer.eu@tellusid.net"
    },
    {
      "id": "1",
      "name": "Julian",
      "city": "Laguna Blanca",
      "email": "mauris.sit.amet@lectuspedeet.edu"
    },
    {
      "id": "1",
      "name": "Xenos",
      "city": "Banff",
      "email": "Fusce.feugiat.Lorem@Vestibulum.net"
    },
    {
      "id": "1",
      "name": "Caldwell",
      "city": "Vegreville",
      "email": "Mauris@Aliquamgravida.net"
    },
    {
      "id": "1",
      "name": "Macon",
      "city": "Campbeltown",
      "email": "dolor.sit.amet@Suspendissealiquet.com"
    },
    {
      "id": "1",
      "name": "Lyle",
      "city": "Montague",
      "email": "sed.dui.Fusce@enimSed.edu"
    },
    {
      "id": "1",
      "name": "Grady",
      "city": "Reutov",
      "email": "sem@lorem.org"
    },
    {
      "id": "1",
      "name": "Otto",
      "city": "Motherwell",
      "email": "nunc@libero.com"
    },
    {
      "id": "1",
      "name": "Carson",
      "city": "Dégelis",
      "email": "libero@vitaesemper.co.uk"
    },
    {
      "id": "1",
      "name": "Jordan",
      "city": "Changwon",
      "email": "ut@Classaptenttaciti.net"
    },
    {
      "id": "1",
      "name": "Ryan",
      "city": "Vilna",
      "email": "et.magnis@semPellentesqueut.com"
    },
    {
      "id": "1",
      "name": "Chaney",
      "city": "Montauban",
      "email": "eu@quam.edu"
    },
    {
      "id": "1",
      "name": "Kuame",
      "city": "San Mauro Cilento",
      "email": "Proin.ultrices@Mauris.edu"
    },
    {
      "id": "1",
      "name": "Reed",
      "city": "Mazenzele",
      "email": "porta@nulla.com"
    },
    {
      "id": "1",
      "name": "Judah",
      "city": "Conca Casale",
      "email": "non.dapibus.rutrum@Nam.org"
    },
    {
      "id": "1",
      "name": "Tiger",
      "city": "Samsun",
      "email": "non@erosnonenim.edu"
    },
    {
      "id": "1",
      "name": "Igor",
      "city": "Laakirchen",
      "email": "dui@semelitpharetra.com"
    },
    {
      "id": "1",
      "name": "Driscoll",
      "city": "Overland Park",
      "email": "id.enim.Curabitur@ornaresagittisfelis.ca"
    },
    {
      "id": "1",
      "name": "Bevis",
      "city": "Krishnanagar",
      "email": "fringilla.purus@porttitorinterdumSed.ca"
    },
    {
      "id": "1",
      "name": "Troy",
      "city": "Bojano",
      "email": "quis@nondapibusrutrum.edu"
    },
    {
      "id": "1",
      "name": "Jeremy",
      "city": "Carson City",
      "email": "nonummy.ac@Vivamusmolestie.co.uk"
    },
    {
      "id": "1",
      "name": "Neil",
      "city": "Green Bay",
      "email": "Sed.nec.metus@maurisidsapien.net"
    },
    {
      "id": "1",
      "name": "Driscoll",
      "city": "Bromyard",
      "email": "Cum@orciluctus.com"
    },
    {
      "id": "1",
      "name": "Otto",
      "city": "St. David's",
      "email": "risus.Donec@laoreetlibero.co.uk"
    },
    {
      "id": "1",
      "name": "Odysseus",
      "city": "Luttre",
      "email": "leo@nequeet.edu"
    },
    {
      "id": "1",
      "name": "Len",
      "city": "Gifhorn",
      "email": "lectus@rhoncusDonecest.org"
    },
    {
      "id": "1",
      "name": "Micah",
      "city": "Hoorn",
      "email": "nascetur.ridiculus@consequat.ca"
    },
    {
      "id": "1",
      "name": "Dieter",
      "city": "Kubinka",
      "email": "orci.quis.lectus@ornare.ca"
    },
    {
      "id": "1",
      "name": "Gray",
      "city": "Nairn",
      "email": "vel.quam.dignissim@tempus.net"
    },
    {
      "id": "1",
      "name": "Lane",
      "city": "Nîmes",
      "email": "a.odio.semper@magna.co.uk"
    },
    {
      "id": "1",
      "name": "Austin",
      "city": "Inverbervie",
      "email": "Sed.id.risus@pede.net"
    },
    {
      "id": "1",
      "name": "Orson",
      "city": "Mendonk",
      "email": "enim@risusa.edu"
    },
    {
      "id": "1",
      "name": "Roth",
      "city": "Pishin Valley",
      "email": "aliquet@sollicitudin.net"
    },
    {
      "id": "1",
      "name": "Elvis",
      "city": "Olen",
      "email": "nascetur@faucibusMorbivehicula.co.uk"
    },
    {
      "id": "1",
      "name": "Dorian",
      "city": "Montebello",
      "email": "tempor@aliquetlobortis.org"
    },
    {
      "id": "1",
      "name": "Reece",
      "city": "Ipiales",
      "email": "dui@Cras.com"
    },
    {
      "id": "1",
      "name": "Benjamin",
      "city": "Richmond",
      "email": "id.ante.dictum@Fuscedolor.net"
    },
    {
      "id": "1",
      "name": "Coby",
      "city": "Stonewall",
      "email": "Curabitur.consequat.lectus@duilectus.org"
    },
    {
      "id": "1",
      "name": "Xenos",
      "city": "Curicó",
      "email": "egestas.rhoncus@primisin.net"
    },
    {
      "id": "1",
      "name": "Steven",
      "city": "Karabash",
      "email": "mauris@adipiscingfringillaporttitor.com"
    },
    {
      "id": "1",
      "name": "Dolan",
      "city": "Göppingen",
      "email": "Cras@odio.ca"
    },
    {
      "id": "1",
      "name": "Amal",
      "city": "María Pinto",
      "email": "nisl.sem.consequat@ornaresagittis.co.uk"
    },
    {
      "id": "1",
      "name": "Orson",
      "city": "Walhain-Saint-Paul",
      "email": "eget.nisi.dictum@liberoIntegerin.com"
    },
    {
      "id": "1",
      "name": "Keegan",
      "city": "Dalcahue",
      "email": "Nunc.lectus.pede@nibhPhasellusnulla.edu"
    },
    {
      "id": "1",
      "name": "Peter",
      "city": "Yurzhnouralsk",
      "email": "pede@luctusvulputate.edu"
    },
    {
      "id": "1",
      "name": "Zahir",
      "city": "Rosoux-Crenwick",
      "email": "libero.et.tristique@arcu.ca"
    },
    {
      "id": "1",
      "name": "Maxwell",
      "city": "Curepto",
      "email": "velit@cursusaenim.edu"
    },
    {
      "id": "1",
      "name": "Dante",
      "city": "Swat",
      "email": "gravida.molestie.arcu@tinciduntorciquis.edu"
    },
    {
      "id": "1",
      "name": "Edan",
      "city": "Chicoutimi",
      "email": "malesuada.Integer.id@rutrum.com"
    },
    {
      "id": "1",
      "name": "Ivan",
      "city": "Ife",
      "email": "Nullam@Sed.edu"
    },
    {
      "id": "1",
      "name": "Tanner",
      "city": "Bafra",
      "email": "eu.nibh@risusaultricies.edu"
    },
    {
      "id": "1",
      "name": "Ralph",
      "city": "Penza",
      "email": "sem.eget.massa@atnisiCum.net"
    },
    {
      "id": "1",
      "name": "Edward",
      "city": "Strombeek-Bever",
      "email": "nibh@arcu.co.uk"
    },
    {
      "id": "1",
      "name": "Merritt",
      "city": "Collines-de-l'Outaouais",
      "email": "Duis@estacfacilisis.co.uk"
    },
    {
      "id": "1",
      "name": "Xanthus",
      "city": "Saarlouis",
      "email": "eget@risusodioauctor.net"
    },
    {
      "id": "1",
      "name": "Ray",
      "city": "Lewiston",
      "email": "non@luctusipsum.ca"
    },
    {
      "id": "1",
      "name": "Zeus",
      "city": "Feilding",
      "email": "natoque.penatibus@enimCurabiturmassa.com"
    },
    {
      "id": "1",
      "name": "Anthony",
      "city": "Wangaratta",
      "email": "vulputate.mauris@dictumsapienAenean.co.uk"
    },
    {
      "id": "1",
      "name": "Nash",
      "city": "Périgueux",
      "email": "lorem@risus.ca"
    },
    {
      "id": "1",
      "name": "Ciaran",
      "city": "Katihar",
      "email": "cubilia.Curae@sociisnatoquepenatibus.co.uk"
    },
    {
      "id": "1",
      "name": "Louis",
      "city": "Montes Claros",
      "email": "scelerisque.neque.sed@nibhQuisque.co.uk"
    },
    {
      "id": "1",
      "name": "Igor",
      "city": "Hamilton",
      "email": "luctus.Curabitur.egestas@cursusnonegestas.co.uk"
    },
    {
      "id": "1",
      "name": "Mason",
      "city": "Eugene",
      "email": "metus.vitae@non.com"
    },
    {
      "id": "1",
      "name": "John",
      "city": "Kalininets",
      "email": "aliquet.vel.vulputate@veliteusem.co.uk"
    },
    {
      "id": "1",
      "name": "Keith",
      "city": "Lathuy",
      "email": "nibh.dolor.nonummy@at.co.uk"
    },
    {
      "id": "1",
      "name": "Hiram",
      "city": "Vanderhoof",
      "email": "placerat.augue@Fuscemollis.edu"
    },
    {
      "id": "1",
      "name": "Ronan",
      "city": "Pemuco",
      "email": "nulla.at@nunc.edu"
    },
    {
      "id": "1",
      "name": "Jelani",
      "city": "Latronico",
      "email": "eros.nec@dolordapibus.co.uk"
    },
    {
      "id": "1",
      "name": "Leo",
      "city": "Zamora",
      "email": "dignissim.Maecenas@dolor.edu"
    },
    {
      "id": "1",
      "name": "Arden",
      "city": "Lahore",
      "email": "amet@odiosempercursus.ca"
    },
    {
      "id": "1",
      "name": "Carlos",
      "city": "Caen",
      "email": "Duis@turpis.org"
    },
    {
      "id": "1",
      "name": "Malik",
      "city": "Grumo Appula",
      "email": "eleifend@Duiselementumdui.com"
    },
    {
      "id": "1",
      "name": "Grady",
      "city": "Mokpo",
      "email": "adipiscing.ligula.Aenean@nonummyacfeugiat.edu"
    },
    {
      "id": "1",
      "name": "Orlando",
      "city": "Zandhoven",
      "email": "luctus@Naminterdum.net"
    },
    {
      "id": "1",
      "name": "Rogan",
      "city": "Philadelphia",
      "email": "eget@enimcommodohendrerit.edu"
    },
    {
      "id": "1",
      "name": "Vincent",
      "city": "Kisi",
      "email": "aliquet@orcisem.org"
    },
    {
      "id": "1",
      "name": "Samson",
      "city": "Katowice",
      "email": "dictum.eleifend@orciluctuset.co.uk"
    },
    {
      "id": "1",
      "name": "Blake",
      "city": "Tredegar",
      "email": "pede.Praesent@euelitNulla.edu"
    },
    {
      "id": "1",
      "name": "Lane",
      "city": "HomprŽ",
      "email": "Donec@Aenean.com"
    },
    {
      "id": "1",
      "name": "Cyrus",
      "city": "Talca",
      "email": "lorem@Donecest.org"
    },
    {
      "id": "1",
      "name": "Joel",
      "city": "New Glasgow",
      "email": "elit.erat@enimnon.org"
    },
    {
      "id": "1",
      "name": "Ross",
      "city": "Paulatuk",
      "email": "Sed.eu@fringillaeuismodenim.com"
    },
    {
      "id": "1",
      "name": "Brent",
      "city": "Garbsen",
      "email": "eu.tempor@doloregestas.ca"
    },
    {
      "id": "1",
      "name": "Trevor",
      "city": "Tezze sul Brenta",
      "email": "Aliquam.gravida@SuspendissesagittisNullam.edu"
    },
    {
      "id": "1",
      "name": "Herrod",
      "city": "Korneuburg",
      "email": "fermentum.metus.Aenean@nuncInat.net"
    },
    {
      "id": "1",
      "name": "Alec",
      "city": "Sambalpur",
      "email": "sociosqu.ad.litora@mauriserat.co.uk"
    },
    {
      "id": "1",
      "name": "Lance",
      "city": "Tailles",
      "email": "semper.rutrum.Fusce@nonjusto.org"
    },
    {
      "id": "1",
      "name": "Keegan",
      "city": "Kashira",
      "email": "mauris.eu.elit@Integer.ca"
    },
    {
      "id": "1",
      "name": "Coby",
      "city": "Tula",
      "email": "auctor.odio@Maecenasmalesuadafringilla.edu"
    }
  ]
  constructor(private http:HttpClient) {

   }
   getUserData():Observable<any> {
     return this.http.get("https://jsonplaceholder.typicode.com/users")
   }
}
