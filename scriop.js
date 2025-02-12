document.addEventListener('DOMContentLoaded', function() {
  const newTaskInput = document.getElementById('new-task');
  const addTaskButton = document.getElementById('add-task-button');
  const taskList = document.getElementById('task-list');
  const descriptionTextarea = document.getElementById('description');
  const submitButton = document.querySelector('input[type="submit"]');
  const deleteButton = document.querySelector('input[value=" حذف"]');
  const editButton = document.querySelector('input[value="ویرایش"]');

  addTaskButton.addEventListener('click', addTask);
  newTaskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });

  function addTask() {
      const taskText = newTaskInput.value.trim();
      if (taskText !== '') {
          const listItem = document.createElement('li');
          listItem.textContent = taskText;
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'حذفش  کن عزیزم';
          deleteButton.addEventListener('click', function() {
              taskList.removeChild(listItem);
          });
          listItem.appendChild(deleteButton);
          taskList.appendChild(listItem);
          newTaskInput.value = '';
      }
  }

  submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      alert('توضیحات ارسال شد: ' + descriptionTextarea.value);
  });

  deleteButton.addEventListener('click', function() {
      descriptionTextarea.value = '';
  });

  editButton.addEventListener('click', function() {
      const newDescription = prompt('ویرایش توضیحات:', descriptionTextarea.value);
      if (newDescription !== null) {
          descriptionTextarea.value = newDescription;
      }
  });
});

