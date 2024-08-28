document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    const messageDiv = document.getElementById('message');

    // Función para agregar productos al carrito
    window.addToCart = function(item, price) {
        const orderField = document.getElementById('order');
        const currentOrder = orderField.value;
        orderField.value = currentOrder + `${item} - $${price}\n`;
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simula el envío del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const order = document.getElementById('order').value;

        // Mostrar un mensaje de confirmación
        messageDiv.textContent = `Gracias, ${name}. Tu pedido ha sido recibido y será enviado a ${address}. Nos pondremos en contacto contigo en ${email}.`;

        // Limpiar el formulario
        form.reset();
    });
});