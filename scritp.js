document.getElementById('add-comment').addEventListener('click', function() {
    const commentText = document.getElementById('comment-text').value;
  
    if (commentText.trim() !== '') {
      // Crear la fecha y hora del comentario
      const date = new Date();
      const formattedDate = date.toLocaleString();
  
      // Crear el contenedor del comentario
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
  
      // Crear el contenido del comentario
      const commentContent = `
        <p>${commentText}</p>
        <div class="comment-footer">
          <span>${formattedDate}</span>
          <span class="delete-btn">Eliminar</span>
        </div>
      `;
  
      commentDiv.innerHTML = commentContent;
  
      // Agregar el comentario al contenedor de comentarios
      document.getElementById('comments-list').appendChild(commentDiv);
  
      // Limpiar el campo de texto después de agregar el comentario
      document.getElementById('comment-text').value = '';
  
      // Agregar el evento para eliminar el comentario
      const deleteBtn = commentDiv.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', function() {
        commentDiv.remove();
      });
    } else {
      alert('Por favor, escribe un comentario antes de agregarlo.');
    }
  });
  