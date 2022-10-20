class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }
  
    getFullName() {
      return `Nombre: ${this.nombre} Apellido: ${this.apellido}`;
    }
    addMascotas(mascota) {
      this.mascotas.push(mascota);
      return this.mascotas;
    }
  
    countMascotas() {
      let cantidadDeMascotas = this.mascotas.length;
      return cantidadDeMascotas;
    }
  
    addBook(nombre, autor) {
      let newBook = { nombre: nombre, autor: autor };
      this.libros.push(newBook);
      return this.libros;
    }
    getBookName() {
      let bookName = this.libros.map((libro) => libro.nombre);
      return bookName;
    }
  }
  
  us1 = new Usuario(
    "Agustina",
    "Scarpinelli",
    [{ nombre: "Harry Potter", autor: "J.K Rowling" }],
    ["perro", "gato"]
  );
  console.log(us1.getFullName());
  console.log(us1.addMascotas("pez"));
  console.log(us1.countMascotas());
  console.log(us1.addBook("libro2", "autor2"));
  console.log(us1.getBookName());