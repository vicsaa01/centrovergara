import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomePageES = () => {
    return(
        <>
            <Navbar lang='es'></Navbar>

            <main class="w-100 m-0 p-0">

                <div class="row m-5 p-3 border border-1 border-dark rounded">
                    <h5>María José Vergara Marínez, fundadora del Centro Vergara</h5>

                    <ul class="ps-5 mt-3">
                        <li>Psicóloga Sanitaria y Psicoterapeuta. Máster en Intervención en Psicología Clínica y de la Salud.</li>
                        <li>Pionera en España en el uso del Programa de Reentrenamiento Amigdalar para enfermos con Síndromes de Sensibilidad Central (fibromialgia, Síndrome de Fatiga Crónica y otros).</li>
                        <li>Profesora Capacitada (Trained Teacher,) del MSC: Mindful Self Compassion Program,  por el Center for MSC de San Diego.</li>
                        <li>Profesora del CAIS. Programa para reducir el burnout en personal sanitario.</li>
                        <li>Certificada en el Programa SCIP, Autocompasión y Psicoterapia. 30 semanas de formación, 100 horas lectivas. (Center for MSC).</li>
                    </ul>
                </div>

                <div class="row m-5 p-3 border border-1 border-dark rounded">
                    <h5>¿Necesitas hacer una cita?</h5>

                    <a class="mt-3" href="https://calendly.com/es">Pulsa sobre este enlace para ver la disponibilidad en el calendario</a>
                </div>

                <div class="row m-5 p-3 border border-1 border-dark rounded">
                    <h5>Contactar con el Centro Vergara</h5>

                    <p class="mt-3">centrovergara@mail.com</p>
                </div>

                <div class="row mt-3"></div>
                <div class="row mt-3"></div>
                <div class="row mt-3"></div>
                <div class="row mt-3"></div>
                <div class="row mt-3"></div>

                <div class="row mt-3"></div>
                <div class="row mt-3"></div>
                <div class="row mt-3"></div>
                <div class="row mt-3"></div>
                <div class="row mt-3"></div>

                <div class="row mt-3"></div>
                <div class="row mt-3"></div>
                <div class="row mt-3"></div>
                <div class="row mt-3"></div>
                <div class="row mt-3"></div>
            </main>
            
            <Footer></Footer>
        </>
    )
}

export default HomePageES