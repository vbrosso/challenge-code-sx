function mockyController($scope,$http) {
  $http.get("mocky.json")
  .success(
    function(response) {

      //RECUPERACAO DE DADOS PESSOAIS
      $scope.thumb = response.thumb; 

      $scope.name = response.name;
      $scope.profession = response.profession;

      
      $scope.profile_title = response.profile.title; 
      $scope.profile_description = response.profile.description; 

      $scope.objective_title = response.objective.title; 
      $scope.objective_description = response.objective.description; 

      var personal = [];
      var listPersonal = [];
      personal = response.personalSkill;

      for (i = 0; i < Object.keys(personal).length; i++){
        listPersonal[i] = '<span class="titleSkill">' + Object.keys(personal)[i] + '</span><div id="barStatus"><span id="loadSkill" style="width:'+Object.values(personal)[i]+'%"></span></div>'
      }
      listPersonal.shift();
      document.getElementById('skills').innerHTML = listPersonal.join("");

      personal = response.personalSkill;
      $scope.personalSkill_title = response.personalSkill.title; 
      $scope.personalSkill_management = response.personalSkill.management; 
      
      //RECUPERACAO DE DADOS DE CONTATO
      $scope.contactMe_title = response.contactMe.title; 
      $scope.contactMe_address = response.contactMe.address; 
      $scope.contactMe_tel = response.contactMe.tel; 
      $scope.contactMe_email = response.contactMe.email; 
      $scope.contactMe_webSite = response.contactMe.webSite; 

      //RECUPERACAO DE DADOS DE EDUCAÇÃO
      $scope.education_title = response.education.title; 
      
      var educacao = [];
      var listEducacao = [];
      educacao = response.education;

      qtdCursos = Object.keys(Object.values(educacao.university)).length;
      todosCursos = educacao.university;


      for (i = 0; i < qtdCursos; i++){
        mes = todosCursos[i].month;
        ano = todosCursos[i].year;
        nome = todosCursos[i].courseName;
        universidade = todosCursos[i].universityName;
        cidade = todosCursos[i].universityCity;
        descricao = todosCursos[i].description;
        listEducacao[i] = "<span class='mes'>" + mes + "</span><span class='ano'>" + ano + "</span><h3 class='nome'>" + nome + "</h3><p class='universidade'>" + universidade + ", " + cidade + "</p><p class='descricao'>" + descricao +"</p>"
      }
      document.getElementById('educacao').innerHTML = listEducacao.join("");


      //RECUPERACAO DE DADOS DE EXPERIENCIA
      $scope.experience_title = response.experience.title; 
      
      var experiencia = [];
      var listExperiencia = [];
      experiencia = response.experience;

      qtdExp = Object.keys(Object.values(experiencia.company)).length;
      todasExp = experiencia.company;

      for (i = 0; i < qtdExp; i++){
        mes = todasExp[i].month;
        ano = todasExp[i].year;
        nome = todasExp[i].companyName;
        universidade = todasExp[i].roleName;
        cidade = todasExp[i].companyCity;
        descricao = todasExp[i].description;
        listExperiencia[i] = "<span class='mes'>" + mes + "</span><span class='ano'>" + ano + "</span><h3 class='nome'>" + nome + "</h3><p class='universidade'>" + universidade + ", " + cidade + "</p><p class='descricao'>" + descricao +"</p>"
      }
      document.getElementById('experiencia').innerHTML = listExperiencia.join("");

      //SKILLS
      $scope.professionalSkill_title = response.professionalSkill.title; 
      var profissional = [];
      var listProfissional = [];
      profissional = response.professionalSkill.tools;
      

      for (i = 0; i < Object.keys(profissional).length; i++){
        listProfissional[i] = '<span class="titleSkill">' + Object.values(Object.values(profissional)[i])[0] + '</span><div id="pbarStatus"><span id="ploadSkill" style="width:'+ Object.values(Object.values(profissional)[i])[1] +'%"></span></div>'
      }
      document.getElementById('pskills').innerHTML = listProfissional.join("");


      //RECUPERACAO DE DADOS DE PREMIOS
      $scope.award_title = response.award.title; 
      
      var premios = [];
      var listPremios = [];
      premios = response.award;

      qtdPremios = response.award;
      //qtdPremios = qtdPremios.__proto__.valueOf.length;

      todosPremios = response.award;


      console.log(todosPremios.month);


      listPremios[i] = "<span class='mes'>" + todosPremios.month + "</span><span class='ano'>" + todosPremios.year + "</span><h3 class='nome'>" + todosPremios.awardName + "</h3><p class='universidade'>" + todosPremios.projectName + ", " + todosPremios.city + "</p><p class='descricao'>" + todosPremios.description +"</p>"
      document.getElementById('premios').innerHTML = listPremios.join("");
      
    }
  );
}