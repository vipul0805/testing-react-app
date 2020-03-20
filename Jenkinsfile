pipeline {
  
  agent any
  tools {nodejs "node"}
    stages {
	  stage('Testing') {
	    steps {
        sh "npm install"
        sh "npm run coverage"
          }
        }

    stage("Sonar Analysis"){
      steps{
        script {
                scannerhome = tool 'sonarqube';
            }
        withSonarQubeEnv('sonar') {
          sh "${scannerhome}/bin/sonar-scanner -D sonar.login=admin -D sonar.password=admin"
          }
      }
    }
  }
}
