/**
 * FIELDS
 * Permret d'ajouter ou de supprimer des champs
 * dans un formulaire.
 */

/**
 * Ajouter un champs
 */
var addInput = function() {
    var addButton = document.getElementById("addButton")
    var form = document.getElementById("form")
    var count = 0

    addButton.addEventListener("click", function() {
        // Define container of input and label
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

    }, false)
}()

/**
 * Supprimer le champs
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