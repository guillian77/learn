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
function AddAField(){
    var count = 0
    var container = document.createElement('div')
    container.className = "input-group mb-3"
    
    
    // Define input in container
    var input = document.createElement("input")
    input.className = "form-control"
    input.placeholder = "Etape de la maintenance à effectuer"
    input.name = "operation[]"
    
    // Define label for the above input
    var label = document.createElement('div')
    label.className = "input-group-append"

    count++
    var labelValue = document.createElement('button')
    labelValue.className = "btn btn-outline-secondary"
    labelValue.id = "delbtn" + count
    labelValue.innerHTML = "Supprimer"
    labelValue.type = "button"

    // Ajouter un container à la fin du formulaire
    document.getElementById("form").appendChild(container)


    // Sélectionner le dernier input du formulaire
    var lastForm = document.getElementById('form').lastElementChild
    lastForm.appendChild(input)
    lastForm.appendChild(label)
    
    // Sélectionner dernier tag
    var lastLabel = document.getElementById('form').lastElementChild.lastElementChild
    lastLabel.appendChild(labelValue)
}

/**
 * Ajouter un champs quand on appuit sur le bouton "Ajouter"
 */
document.getElementById('form').addEventListener('keydown', function(event) {
    if (event.key == "Enter") {
        event.preventDefault()
        AddAField()
    }
})

/**
 * Ajouter un champs quand on appuit sur "Entrer"
 */
document.getElementById('addButton').addEventListener('click', function(event) {
    AddAField()
})