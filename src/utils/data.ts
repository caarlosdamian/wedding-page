import liverpool from '../assets/liverpool.jpeg'
import banamex from '../assets/banamex.jpeg'
import hospedaje from '../assets/hospedaje.jpeg'
import { CardInt } from '../interfaces'

export const cardItems:CardInt[] = [
    {
        id: 1,
        title: 'Hospedaje',
        button:true,
        buttonLabel: 'Ver Recomendación',
        url:'https://www.tripadvisor.com.mx/Hotel_Review-g1744419-d5114199-Reviews-Reserva_La_Cofradia-Comala_Pacific_Coast.html',
        img:hospedaje

    },
    {
        id: 2,
        title: 'Mesa de Regalos',
        button:true,
        buttonLabel: 'Ver Mesa de Regalos',
        url:'https://www.google.com/',
        img:liverpool
    },
    {
        id: 2,
        title: 'Deposito o Tranferencia',
        button:false,
        buttonLabel: '3232323232323232',
        url:'https://www.google.com/',
        img:banamex
    },
]

export const optionsItems = [
    {
        id: '1b',
        label: 'No Asistire',
        value: 0
    },
    {
        id: '2b',
        label: 'Asistire',
        value: 1
    },
    {
        id: '3b',
        label: '1 Invitado(s)',
        value: 2
    },
    {
        id: '4b',
        label: '2 Invitado(s)',
        value: 3
    },
]