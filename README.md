# ¿QUÉ ES REDUX?
* És un contenedor predecible del estado de nuestra aplicación (és una forma de controlar donde se encuentra la informacion en todo momento y tambien ayuda que la modificación de la información sea en una sola vía de manera prevesible, con el objetivo de prevenir cambios accidentales en la misma)
* Redux no es propio de React, son dos cosas totalmente independiente. (se puede utilizar en angular, react, vue, flutter...)
* Store, el Store en Redux es conocida como la fuente única de la verdad, esto quiere decir, que ahí se encuentra la información que mis componentes van a consumir.
# EXPLICACIÓN BREVE SOBRE EL REDUCER
* Reducer, nuestro reducer es una funcion pura que maneja un estado, el estado le sirve la información a la pagina para que muestre la información deseada, pero la pagina no modifica el estado directamente, solo lo lee. Cúando se necesita hacer una modificación al estado, entonces la pagina va a generar una acción, esa acción será enviada al Reducer
# EXPLICACIÓN SOBRE EL STORE
* Redux, siempre vamos a tener un state, que va a ser proveido no por el Reducer, va a ser proveido por el store, ese state cumple la misma función que el state de Reducer, la pagina necesita información, la obtiene del state del store. Cúando se necesita hacer una modificación o hacer algúna accion, se crea un action, ese action no va a ser enviado directamente al store, si no que cae en un dispatcher, el dispatcher recibe dicha acción, lo abre y analiza y lo enviará a un Reducer especial, ese Reducer es una combinación de todos los Reducers que va a tener mi aplicación, por ejemplo, un reducer para manejar la aplicación, el reducer de las tareas pendientes, el reducer de mis entradas del diario...Ese reducer simplemente contiene una multitud de reducers pequeños, en los cuales el dispatcher va a buscar el reducer que sea cualificado para realizar dicha action y genera un nuevo state, ese state notifica a la vista. Todo lo dicho es para hacer un proceso síncrono, no para procesos asyncronos, como peticiones http, esperar la respuesta.... En el caso de necesitar una action asyncrona, como una autenticacion, tenemos que esperar la información de la autenticación, entonces si disparamos esa action, esa action va a caer en el dispatch, verá que es una accion asyncrona, por ende, necesitara un middleware, este middleware ejecutará la tarea asyncrona, ejecutará la accion, llamará al API, traerá los datos, va a esperar la respuesta, y cuando tenga la respuesta ese API lo notificará a nuestro middleware, ese middleware está dentro del dispatcher, por lo cual se lo va a mandar a nuestro reducer principal y el reducer principal buscará el reducer para crear el nuevo state.