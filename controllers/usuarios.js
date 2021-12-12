const {response, request} = require('express');

const usuariosGet = (req=request, res = response) => {
    const {q, nombre = 'no name', apikey, page, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPost = (req, res = response) => {
    //const body = req.body;
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        //body
        nombre, edad
    })
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
}


module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}