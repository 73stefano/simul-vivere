import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
      
        
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
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
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-orange-500 leading-relaxed underline">
            Programma Pacchetti 22-23-24
            </h3>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/Dacia_Maraini.png"
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
              Ore 20.00: Apricena alla casa del Cittadino, Cantalupo in Sabina (RI)
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
              Moira Marchetti cell.3316358054 moiramarchetti1981@gmail.com     5 euro (in attesa del logo)
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
              <strong>Opzione</strong>
            </li>
            <li className="relative circle-check custom-list my-4">
            Ore 17.30: Mostra degli acquarelli 
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 20.00: Apricena alla casa del Cittadino, Cantalupo in Sabina (RI)
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
              Ore 20.00: Apricena alla casa del Cittadino, Cantalupo in Sabina (RI)
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
              Andrea Leopaldi 3292638261 museoercolenardi@libero.it (offerta alla chiesa)
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 13.00: Pranzo a buffet in Ostello
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 17.00: Check-out
            </li>
          </ul>
          <p className="text-xl lg:text-2xl xl:text-2xl text-orange-500 font-bold">
            Costo totale 75 euro a persona
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative text-orange-500 custom-list my-6">
              <strong>Opzione</strong>
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 17.30: Mostra degli acquarelli 
            </li>
            <li className="relative circle-check custom-list my-4">
              Ore 20.00: Apricena alla casa del Cittadino, Cantalupo in Sabina (RI)
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
      <div className="py-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-orange-500 leading-relaxed text-center underline">
            Programma Pacchetti 29-30-31
            </h3>
          </div>
    </div>
  );
};

export default Feature;
