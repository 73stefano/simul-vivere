import Image from "next/image";
import React from "react";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";



const Feature = () => {
  return (
      
        
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-4 my-12">
      <div className="flex w-full justify-end">
      <div className="h-full w-full p-4">
             
             <ul className="text-black-500 self-start list-inside ml-8">
               <li className="relative  custom-list my-6 text-xl lg:text-2xl xl:text-2xl text-orange-500 font-bold">
                 <strong>Menù 17 luglio 2022</strong>
               </li>
               <li className="relative underline custom-list my-4">
                 Beverage
               </li>
               <li className="relative circle-check custom-list my-4">
               Prosecco Mionetto Vivo, Aperitivi alcolici ed analcolici in brocca, Acqua
               </li>
               <li className="relative circle-check custom-list my-4">
               - Pizzette rosse di sfoglia<br></br>
               - Bruschetta prosciutto e melone<br></br>
               - Bruschetta caciotta stracchinata e uvetta<br></br>
               - Zucchine marinate con menta<br></br>
               - Mini pomodoro con riso e patate
               </li>
               </ul>
               </div>
               </div>
               <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">

               <ul className="text-black-500 self-start list-inside ml-8">
               <li className="relative underline custom-list my-4">
                 Piatto Caldo
               </li>
               <li className="relative circle-check custom-list my-4">
                 2 cannelloni mono porzionati, classico con ripieno di carne e con ripieno di caponata e stracciatella
               </li>
               <li className="relative underline custom-list my-4">
                 Dessert
               </li>
               <li className="relative circle-check custom-list my-4">
               - Cannolino siciliano farcito al momento<br></br>
               - Bignè alla crema pasticcera<br></br>
               - Semifreddo Tiramisù in tazzina con lingua di gatto<br></br>
               - Bicchierino di pesche con il vino
               </li>
             </ul>
               
      </div>
      </div>
      <div className="text-center pb-12">
              <p>
               Il menù sarà servito ai tavoli, per gli ospiti della serata verrà allestito un tavolo ad hoc.
               </p>
               <p className="text-xl lg:text-2xl xl:text-2xl text-orange-500 font-bold">
                 Il costo del menù è di € 18.00 a persona
               </p>
               <p className=" font-bold">
               La Pasticceria F.lli Tichetti dal 1961, a sostegno del progetto Simul Vivere “Un seme per il lavoro” fornirà la cura dell’allestimento, servizio e sbarazzo a titolo gratuito.
               </p>
       </div>        
      


      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
          <strong>Festival del cinema</strong><br></br>
          22,23,24 luglio 2022 -- 29,30,31 luglio 2022
          <p>Parliamo di donne. 
          Le donne costruttrici di pace
          </p>
          </h3>
          <div className="py-8">
            <h3 className="underline text-2xl sm:text-3xl lg:text-4xl font-medium text-orange-500 leading-relaxed">
            Programma Pacchetti 22-23-24
            </h3>
            <div className="py-8">
              <a  href="mailto:simul.vivere@gmail.com"><ButtonPrimary>per prenotazioni scrivere a simul.vivere@gmail.com</ButtonPrimary>
              </a>
                <div className="py-8">
                  <ButtonPrimary>per prenotazioni chiama 327-2133183</ButtonPrimary>
                </div>
             </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/Rassegna.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={814}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Pacchetto 22-23 luglio
          </h3>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Venerdi 22 luglio</strong>
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 17.00: Arrivo all’Ostello - Check-in
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 20.00: Apericena alla casa del Cittadino, Cantalupo in Sabina (RI)
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 21.00: Proiezione “A mano disarmata” Italia, 2019 - interviene il regista Claudio Bonivento 
            </li>
          </ul>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Sabato 23 luglio</strong>
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 8.00: Prima colazione 
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 09.30: Poggio Catino, visita alla Rocca Catino e torre longobarda - Castello Poggio Catino  
              
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 13.00: Pranzo a buffet in Ostello
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 17.00: Check-out
            </li>
          </ul>
          <p className="text-xl lg:text-2xl xl:text-2xl text-orange-500 font-bold">
            Costo totale 80 euro a persona
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Per restare con noi ed assistere alla proiezione di sabato 23 luglio</strong>
            </li>
            <li className="relative circle-check custom-list my-4">
            Ore 17.30: Mostra degli acquarelli 
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 20.00: Apericena alla casa del Cittadino, Cantalupo in Sabina (RI)
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 21.00: Proiezione: “Stromboli. Terra di Dio” Italia, 1960 - interviene Alessandro Rossellini 
            </li>
          </ul>
          <p className="text-xl lg:text-2xl xl:text-2xl text-orange-500 font-bold">
            Costo totale 90 euro a persona
          </p>
        </div>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/Rassegna.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={814}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Pacchetto 23-24 luglio
          </h3>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Sabato 23 luglio</strong>
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 17.00: Arrivo all’Ostello - Check-in
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 20.00: Apericena alla casa del Cittadino, Cantalupo in Sabina (RI)
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 21.00: Proiezione “Stromboli. Terra di Dio” Italia 1960 - interviene Alessandro Rossellini  
            </li>
          </ul>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Domenica 24 luglio</strong>
            </li>
            <li className="relative circle-check custom-list my-4">	
              Ore 8.00: Prima colazione 
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 09.00: Poggio Mirteto, visita alla chiesa di San Paolo e borgo medioevale di Poggio Mirteto
              
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 13.00: Pranzo a buffet in Ostello
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 17.00: Check-out
            </li>
          </ul>
          <p className="text-xl lg:text-2xl xl:text-2xl text-orange-500 font-bold">
            Costo totale 80 euro a persona
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Per restare con noi ed assistere alla proiezione di domenica 24 luglio</strong>
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 17.30: Mostra degli acquarelli 
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 20.00: Apericena alla casa del Cittadino, Cantalupo in Sabina (RI)
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 21.00: Proiezione: “Tra cielo e terra” Usa-Francia 1993 - interviene Steve Della Casa
            </li>
          </ul>
          <p className="text-xl lg:text-2xl xl:text-2xl text-orange-500 font-bold">
            Costo totale 90 euro a persona
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <div className="py-8">
            <h3 className="underline text-2xl sm:text-3xl lg:text-4xl font-medium text-orange-500 leading-relaxed">
            Programma Pacchetti 29-30-31
            </h3>
            <div className="py-8">
              <a  href="mailto:simul.vivere@gmail.com"><ButtonPrimary>per prenotazioni scrivere a simul.vivere@gmail.com</ButtonPrimary>
              </a>
                <div className="py-8">
                  <ButtonPrimary>per prenotazioni chiama 327-2133183</ButtonPrimary>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/Rassegna.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={814}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Pacchetto 29-30 luglio
          </h3>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Venerdi 29 luglio</strong>
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 17.00: Arrivo all’Ostello - Check-in
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 20.00: Apericena alla casa del Cittadino, Cantalupo in Sabina (RI)
            </li>
            <li className="relative circle-check custom-list my-4">
            Ore 21.00: Proiezione: “JoJo Rabbit” Germania, 2019 interviene - Francesca Reggiani 
            </li>
          </ul>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Sabato 30 luglio</strong>
            </li>
            <li className="relative circle-check custom-list my-4">					
              Ore 8.00: Prima colazione 
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 09.30: Cottanello, visita alla villa romana Aureli Cotta ed Eremo S. Cataldo
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 13.00: Pranzo a buffet in Ostello
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 17.00: Check-out
            </li>
          </ul>
          <p className="text-xl lg:text-2xl xl:text-2xl text-orange-500 font-bold">
            Costo totale 80 euro a persona
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Per restare con noi ed assistere alla proiezione di sabato 30 luglio</strong>
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 17.30: Mostra degli acquarelli 
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 20.00: Apericena alla casa del Cittadino, Cantalupo in Sabina (RI)
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 21.00: Proiezione: ““La verità negata” Usa-Gran Bretagna 2016 
            </li>
          </ul>
          <p className="text-xl lg:text-2xl xl:text-2xl text-orange-500 font-bold">
            Costo totale 90 euro a persona
          </p>
        </div>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/Rassegna.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={814}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Pacchetto 30-31 luglio
          </h3>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Sabato 30 luglio</strong>
            </li>
            <li className="relative circle-check custom-list my-4"> 

              Ore 17.00: Arrivo all’Ostello - Check-in
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 20.00: Apericena alla casa del Cittadino, Cantalupo in Sabina (RI)
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 21.00: “La verità negata” Usa-Gran Bretagna 2016  
            </li>
          </ul>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Domenica 31 luglio</strong>
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 8.00: Prima colazione 
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 09.30: Casperia, visita al Borgo con trappolatoio - percorso sentinelle e torrioni.
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 13.00: Pranzo a buffet in Ostello
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 17.00: Check-out
            </li>
          </ul>
          <p className="text-xl lg:text-2xl xl:text-2xl text-orange-500 font-bold">
            Costo totale 80 euro a persona
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Per restare con noi ed assistere alla proiezione di domenica 31 luglio</strong>
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 17.30: Mostra degli acquarelli 
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 20.00: Apericena alla casa del Cittadino, Cantalupo in Sabina (RI)
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 21.00: Proiezione: “E ora dove andiamo” Francia-Libano-Egitto-Italia, 2012- interviene C. Taricano
            </li>
          </ul>
          <p className="text-xl lg:text-2xl xl:text-2xl text-orange-500 font-bold">
            Costo totale 90 euro a persona
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
