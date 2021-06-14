$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$("#enviarCorreo").on('click', () => {
    alert('El correo fue enviado correctamente...')
})

$("#ingredientes").on('dblclick', () => {
    $("#ingredientes").addClass('rojo')
})

$("#preparacion").on('dblclick', () => {
    $("#preparacion").addClass('rojo')
})