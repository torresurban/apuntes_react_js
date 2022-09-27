const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const pool = require('./db')
const app = express()

const port = 5000

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json()); //req.body
//console.log(express.json())

//Crear una tarea
app.post('/tareas', async (req, res) => {
    try {
        console.log(req.body)
        const { descripcion, dia } = req.body
        const nuevaTarea = await pool.query("INSERT INTO tareas (descripcion, dia) VALUES($1, $2) RETURNING *", [descripcion, dia])

        res.json(nuevaTarea.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//Obtener todas las tareas
app.get('/tareas', async (req, res) => {
    try {
        const todasLasTareas = await pool.query("SELECT * FROM tareas")
        //console.log(todasLasTareas)
        console.log(todasLasTareas.rows)

        res.json(todasLasTareas.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//Obtener una tarea
app.get('/tareas/:id', async(req, res) => {
    try {
        const { id } = req.params
        //console.log(id)
        const unaTarea = await pool.query("SELECT * FROM tareas WHERE tareas_id = $1", [id])
        console.log(unaTarea.rows[0])

        res.json(unaTarea.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//Actualizar o Editar una tarea
app.put('/tareas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { descripcion, dia } = req.body
        await pool.query("UPDATE tareas SET descripcion = $1, dia = $2 WHERE tareas_id = $3", [descripcion, dia, id])

        return res.json('Todo ha sido actualizado')
    } catch (err) {
        console.error(err.message)
    }
})

//Elimnar una tarea
app.delete('/tareas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM tareas WHERE tareas_id = $1", [id])

        return res.json('El id ha sido eliminado')
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(port, () => {
    console.log(`El servidor se inicio en el pueto ${port}`)
})

/* Metodo--> express.json()
Esta es una función de middleware integrada en Express. Analiza las solicitudes entrantes
con cargas JSON y se basa en el analizador corporal.

Devuelve el middleware que solo analiza JSON y solo examina las solicitudes en las que el encabezado
Content-Type coincide con la opción de tipo. Este analizador acepta cualquier codificación Unicode
del cuerpo y admite la inflación automática de las codificaciones gzip y deflate.

Un nuevo objeto de cuerpo que contiene los datos analizados se completa en el objeto de solicitud
después del middleware (es decir, req.body), o un objeto vacío ({}) si no había ningún cuerpo para
analizar, el tipo de contenido no coincidía o un Se produjo un error.

Como la forma de req.body se basa en la entrada controlada por el usuario, todas las propiedades
y valores de este objeto no son de confianza y deben validarse antes de confiar.
Por ejemplo, req.body.foo.toString() puede fallar de varias maneras, por ejemplo, foo puede no estar
allí o puede no ser una cadena, y toString puede no ser una función y, en cambio, una cadena u otra
entrada del usuario. */