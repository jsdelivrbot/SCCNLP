'use strict';

angular.module('sccnlp.administradorGeograf-crear')

        .factory('administradorGeografCrearMessages', function () {

            return {
                ADMINISTRADOR_GEOGRAFICO: "Administrador Geográfico",
                CREAR_LOCACION: "Crear Locación",
                RUT_EMPRESA:    "Rut Empresa",
                NOMBRE_EMPRESA: "Nombre Empresa",
                DIRECCION_CASA_MATRIZ:  "Dirección Casa Matriz",
                PUERTO: "Puerto",
                POSICION:  "Posición",
                LUGAR:  "Lugar",
                ADD_LOCATION_BTN: "Añadir locación",                
                VER_MAPA:   "Ver Mapa",
                CAMPOS_OBLIGATORIOS:    "* Campos obligatorios",
                CANCELAR_BTN:   "Cancelar",
                GUARDAR_BTN:    "Guardar",
                INGRESE_COORDENADAS:    "Ingrese coordenadas, por ej.: -33.03948, -71.62654",
                OK_BTN : "OK",
                ELIMINAR_BTN : "Eliminar",
                CONFIRM_SAVE: "Se ha guardado de forma correcta la informacion indicada de locaciones",
                ACEPTAR_BTN: "Aceptar",
                LUGAR_COORDENADAS: "Lugar (coordenadas)",
                MESSAGE_CON_DIRECTMAR: "En este momento no se tiene enlace de comunicacion con la autoridad marítima. Por favor, vuelva a intentarlo más tarde"
            };
        });