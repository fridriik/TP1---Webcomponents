# Webcomponents

El objetivo es realizar 3 componentes web personalizados utilizando la API de Custom Elements y Shadow DOM de JS.

## alert-message
Mostrará mensajes de alerta con diferentes estilos según el tipo de alerta. Debe aceptar dos atributos: `type` y `message`. 
- `type` especifica el tipo de alerta y puede ser `success`, `warning`, `error` o `info`.
- `message` especifica el mensaje de la alerta.

El componente debe ocultarse automáticamente si el atributo `message` está vacío o no se proporciona.

## user-login
Mostrará un formulario de login con campos para ingresar usuario y contraseña. Debe emitir un evento personalizado `login-result` después de que se haya enviado el formulario de login, proporcionando el resultado de inicio de sesión como detalle del evento. 
- El resultado puede ser `success` o `error`.

## Integración de componentes (login-page)
Debe interceptar el evento `login-result` emitido por el componente de `user-login`. Cuando se recibe el evento `login-result`, debe actualizar las propiedades del componente de `alert-message` en función del resultado del inicio de sesión. Los detalles del evento de `login-result` deben incluirse en la actualización de las propiedades del componente de mensaje de alerta para reflejar el resultado del inicio de sesión.

## Requisitos adicionales
- Se debe usar la API de Custom Elements para definir y registrar los componentes personalizados.
- Se debe usar Shadow DOM para encapsular estilos y comportamiento.
- Seguir buenas prácticas de codificación, modularización, separación de preocupaciones y comentarios descriptivos.
- Probar los componentes incluyendo los casos posibles.
