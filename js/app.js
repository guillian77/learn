/**
 * Permret d'ajouter ou de supprimer des champs
 * dans un formulaire.
 */

/**
 * Supprimer un champs
 */
var delInput = function() {
    document.getElementById('form').addEventListener("click", function(e) {
        var targetBtn = e.target.id
        if (targetBtn.includes("del")) {
            var parentTarget = document.getElementById(targetBtn).parentElement.parentElement
            document.getElementById('form').removeChild(parentTarget)
        }
    })
}()

/**
 * Ajouter un champs
 */
function AddAField(count){

    var form = document.getElementById('form')

    // Définir: Conteneur <div class="input-group">
    var inputContainer = document.createElement('div')
    inputContainer.className = "input-group mb-3"
    
    
    // Définir:  <input type="text" />
    var input = document.createElement("input")
    input.className = "form-control"
    input.placeholder = "Etape de la maintenance à effectuer"
    input.name = "operation[]"
    
    // Définir: conteneur du bouton <div class="input-group-append">
    var labelContainer = document.createElement('div')
    labelContainer.className = "input-group-append"

    // Définir: bouton supprimer <button id="delbtnX">
    var delbtn = document.createElement('button')
    delbtn.className = "btn btn-outline-secondary"
    delbtn.id = "delbtn" + count
    delbtn.innerHTML = "Supprimer"
    delbtn.type = "button"

    // Ajouter un container à la fin du formulaire
    form.appendChild(inputContainer)


    // Définir: dernier conteneur <div class="input-group">:last-child
    var lastContainer = form.lastElementChild

    // Créer: input + labelContainer
    lastContainer.appendChild(input)
    lastContainer.appendChild(labelContainer)
    
    // Définir: dernier conteneur bouton supprimer <div class="input-group-append">
    var lastDelContainer = form.lastElementChild.lastElementChild

    // Créer: bouton supprimer en fonction de "count" <button id="delbtnX(count)">
    lastDelContainer.appendChild(delbtn)

    // Déplacer le curseur sur le dernier champs
    var lastinput = form.lastChild.getElementsByTagName("input")
    lastinput[0].focus()
}

// Compter le nombre de champs ajoutés
var count = 0

/**
 * Ajouter un champs quand on appuit sur la touche "Entrer"
 */
document.getElementById('form').addEventListener('keydown', function(event) {
    if (event.key == "Enter") {
        event.preventDefault()
        count++
        AddAField(count)
    }
})

/**
 * Ajouter un champs quand on appuis sur le bouton HTML "Ajouter"
 */
document.getElementById('addButton').addEventListener('click', function(event) {
    count++
    AddAField(count)
})

function preventUser() {
    var input = form.getElementsByTagName('input')
    input.addEventListener("keydown", function(event) {
        console.log('salut')
        console.log(event.key)
    })
}