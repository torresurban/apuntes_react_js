CREATE DATABASE lista;

CREATE TABLE tareas(
    tareas_id SERIAL PRIMARY KEY,
    descripcion VARCHAR(255),
    dia VARCHAR(255)
);