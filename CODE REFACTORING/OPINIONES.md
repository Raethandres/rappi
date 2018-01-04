cambiaria todos los "status" y "error", se deberia usar estandar http, como 200 para exitoso 403 para permisos, al fin estas usando una especie de api, y deberia responder con eso. 

donde hace el update de driver, luego hace otra busqueda en la base de datos y gasta memoria y tiempo, solo hace drivertmp=Drive:update(...)

tampoco es necesario hacer update otra vez al servicio, hazlo todo en un solo update.

vuelve a buscar el servicio donde ya lo tiene asignado, hazlo todo de una sola vez... 

y los push no creo que deberian usarce creo que cuando haces responce  responde que ya cambio el el servicio y envias el mensaje sin usar otro subproceso aparte, que eso parece el push. no estoy familiarisado con ese push.