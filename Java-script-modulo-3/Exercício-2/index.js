document.addEventListener('DOMContentLoaded', function() {
  const addTechnologyBtn = document.getElementById('addTechnology');
  const technologiesList = document.getElementById('technologiesList');
  const submitFormBtn = document.getElementById('submitForm');
  const developerForm = document.getElementById('developerForm');

  let developersArray = [];

  addTechnologyBtn.addEventListener('click', function() {
      const technologyRow = document.createElement('div');
      technologyRow.classList.add('technologyRow');

      const technologyNameInput = document.createElement('input');
      technologyNameInput.type = 'text';
      technologyNameInput.placeholder = 'Nome da Tecnologia';
     

      const experienceRadioGroup = document.createElement('div');
      const experienceOptions = ['0-2 anos', '3-4 anos', '5+ anos' , '50- anos'];

      experienceOptions.forEach(function(option) {
          const radioInput = document.createElement('input');
          radioInput.type = 'radio';
          radioInput.name = 'experience';
          radioInput.value = option;

          const label = document.createElement('label');
          label.textContent = option;

          experienceRadioGroup.appendChild(radioInput);
          experienceRadioGroup.appendChild(label);
      });

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.textContent = 'Remover';
      removeBtn.addEventListener('click', function() {
          technologiesList.removeChild(technologyRow);
      });

      technologyRow.appendChild(technologyNameInput);
      technologyRow.appendChild(experienceRadioGroup);
      technologyRow.appendChild(removeBtn);

      technologiesList.appendChild(technologyRow);
  });




  submitFormBtn.addEventListener('click', function() {
      const fullName = document.getElementById('fullName').value;
      const technologies = [];

      const technologyRows = document.querySelectorAll('.technologyRow');
      technologyRows.forEach(function(row) {
          const technologyName = row.querySelector('input[type="text"]').value;
          const experience = row.querySelector('input[type="radio"]:checked').value;

          technologies.push({
              name: technologyName,
              experience: experience
          });
      });

      const developer = {
          fullName: fullName,
          technologies: technologies
      };

      developersArray.push(developer);

      // Limpar formulário
      developerForm.reset();
      technologiesList.innerHTML = '';

      // Exibir no console para teste
      console.log(developersArray);
  });
});