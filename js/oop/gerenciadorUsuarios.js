class UsuarioAPI {
    // Define atributo JSON e inicia função de API
    constructor(){
        this.json = []
        this.dataLoaded = this.getData()
    }
    // API
    async getData(){
        const url = "https://jsonplaceholder.typicode.com/users"
        try {
            const response = await fetch(url)
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            this.json = await response.json()
        } catch(error){
            console.error(error.message)
        }
    }

    async buscarTodosUsuarios() {
        await this.dataLoaded
        const names = this.json.map(usuario => usuario.name)
        const formattedNames = names.join(', ')
        console.log("Usuários:", formattedNames)
    }

    async buscarUsuarioPorId(_id){
        await this.dataLoaded
        const usuarioExistente = this.json.find(usuario => usuario.id === _id)
        if(usuarioExistente){
            console.log(`\nUsuário encontrado: ${usuarioExistente.name}
Username: ${usuarioExistente.username}
Email: ${usuarioExistente.username}
Endereço: Rua ${usuarioExistente.address.street}, Unidade ${usuarioExistente.address.suite}, Cidade ${usuarioExistente.address.city}
Telefone: ${usuarioExistente.phone}
                `)
            return
        }
        console.log(`Usuário não encontrado no sistema`)
    }

    async adicionarUsuario(_novoUsuario){
        await this.dataLoaded
        const usuarioExistente = this.json.find(usuario => usuario.username === _novoUsuario.username)
        if(usuarioExistente){
            console.log(`O usuário ${_novoUsuario.username} já existe no sistema`)
        }
        this.json.push(_novoUsuario)
        console.log(`Usuário adicionado ao sistema com sucesso`)
    }
}

// Testes
const api = new UsuarioAPI()

api.buscarTodosUsuarios()
api.buscarUsuarioPorId(3)
api.adicionarUsuario({
  name: "Jessé",
  username: "Jessé B Moreira",
  email: "barbosajesse419@gmail.com",
})