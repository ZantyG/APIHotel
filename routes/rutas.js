import express from 'express'
import { ControladorHabitaciones } from '../controllers/ControladorHabitaciones.js'
import { ControladorReservas} from '../controllers/ControladorReservas.js'

/* para poder llamar al controlador
  debo crear un objeto de la clase controlador

*/
let controladorHabitaciones = new ControladorHabitaciones();
let controladorReservas = new ControladorReservas();

//metod de express que permite realizar las rutas
export let  rutas = express.Router()

rutas.post('/api/habitaciones',controladorHabitaciones.registrarHabitacion )
  
  rutas.get('/api/habitacion',controladorHabitaciones.buscarHabitacionPorId)
  
    rutas.get('/api/habitaciones',controladorHabitaciones.buscarHabitaciones)
  
    rutas.put('/api/habitaciones', controladorHabitaciones.modificarHabitacion)
  
    rutas.delete('/api/habitaciones', controladorHabitaciones.modificarHabitacion)
  
  
    rutas.post('/api/reservas',controladorReservas.registrarReserva )
    
    rutas.get('/api/reserva',controladorReservas.buscarReservaPorId)
    
      rutas.get('/api/reservas', controladorReservas.buscarReservaciones)
    
      rutas.put('/api/reservas',controladorReservas.modificarReserva )
    
      rutas.delete('/api/reservas', controladorReservas.borrarReserva)