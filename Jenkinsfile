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
      def sonarhome= tool "sonarqube";
      steps{
        withSonarQubeEnv('sonar') {
          sh "${sonarhome}/bin/sonar-scanner"
          }
      }
    }
  }
}
