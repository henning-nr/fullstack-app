let urlAlunos = "https://curly-space-chainsaw-p4v44r9rx65f6jr6-3000.app.github.dev/alunos"

$("#form-aluno").hide()

function mostrarForm(){
    $("#form-aluno").show()
    $("#table-aluno").hide()
}

function ocultarForm(){
    $("#form-aluno").hide()
    $("#table-aluno").show()
}

// função de listar os alunos
function listarAlunos() {
    fetch(urlAlunos)
        .then((dados) => { return dados.json() })
        .then((alunos) => {
            console.log("lista de alunos", alunos)

            let alunosLista = ""

            for (const aluno of alunos) {
                alunosLista +=
                    `
             <tr>
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.idade}</td>
                <td>${aluno.sexo}</td>
            </tr>
            `
            }

            document.querySelector("tbody").innerHTML = alunosLista

        })
}

listarAlunos()

// função de salvar o aluno
function salvarAluno() {
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let sexo = document.getElementById("sexo").value

    let aluno = {
        nome, idade, sexo
    }
    console.log('o aluno pra salvar', aluno)

    fetch(urlAlunos, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aluno)
    })
        .then((dados) => { return dados.json() })
        .then((aluno) => {
            console.log("aluno salvo", aluno)
            listarAlunos()
            ocultarForm()
        })

}