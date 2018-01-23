# LYFT 2.0 # 
### Versión 1.0
## Link Github Pages: ##
(https://werimpossible.github.io/Lyft-2.0/index.html)

## Tabla de Contenido
1. [Descripción](#descripcion)
2. [Objetivo del reto Laboratoria](#objetivo)
3. [Funciones](#funciones)



## <a name="descripcion"></a> Descripción: ##
- Versión 1.0:
    - Versión móvil únicamente.
    - Capaz de mostrar un splash de 3 segundos con el logo oficial de Lyft.
    - Muestra todo el proceso de registro de usuario por medio de varios views linkeados a index principal, os cuales se unen por medio de la habilitación y desabilitación de botones al momentos de ingresa datos.
    - Los botones se habilitan y desabilitan a vista del usuario después de validar y contabilizar el tipo de data y numero ingresados.
    
## <a name="objetivo"></a> Objetivo de Laboratoria ##
- Desarrolla una web-app que replique el sitio de Lyft, en este reto deberás cumplir los pasos necesarios para que tu usuario pueda registrarse.
- Vista splash con duración de 2 a 5 segundos que redirecciona a tu vista de inicio. La vista de inicio cuenta con dos botones, en esta ocasión seguiremos el flujo de SIGN UP. 
- En la siguiente vista, un formulario donde nuestro usuario puede escoger el país y debe ingresar su número de teléfono. El botón de NEXT debe estar deshabilitado hasta que se ingrese un número de 10 dígitos. 
- Una vez ingresado el número de teléfono se habilita el botón y al dar click debe enviar una alerta con un código generado aleatoriamente (LAB-000) y redireccionar a la siguiente vista. 
- Ingresar el código dado anteriormente y una vez hecho esto se habilita el botón que redirecciona a nuestro usuario a la vista donde ingresa sus datos. (Puede tener la opción de enviar otro código.) 
- Para ingresar sus datos necesitamos un formulario que le pida su nombre, apellido y correo electrónico. Deberá también tener un checkbox para que se acepten los términos y condiciones del servicio. 
- Ya que se ha realizado lo anterior, sólo se deberá mostrar una vista al usuario que le indique que ha concluido con el registro exitosamente.
- **Todas nuestras vistas deben de contar con una manera de regresar a la vista anterior**

## <a name="funciones"></a> Funciones Técnicas <a name="funciones"></a>
- Descripción de lo utilizado:
    - Se utilizó:
        - HTML
        - Javascript
        - jQueary
        - Bootstrap
        - CSS