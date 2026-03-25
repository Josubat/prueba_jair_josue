from flask import Flask,jsonify,request
from producto import productos
app=Flask (__name__)

@app.route('/')
def inicio():
    return "Bienvenido a mi server" 

@app.route('/productos')
def listadoproductos():
    return jsonify(productos)

@app.route('/productos', methods=["post"])
def registrar():
    campos_requ=["nombre", "marca","precio"]
    
    campos_falt=[x for x in campos_requ if x not in request.json]
    if len(campos_falt)> 0 :
        return jsonify({"mensaje": f"faltan los campos{campos_falt}"})
    
    nombre = request.json["nombre"]
    marca = request.json["marca"]
    precio = request.json["precio"]
    productos.append(
        {"nombre": nombre,"marca":marca,"precio":precio}    
    )
    return jsonify({"mensaje":"se registro"}),201

app.run(port=3000,host="0.0.0.0", debug=True)