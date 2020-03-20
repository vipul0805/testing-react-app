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
        withSonarQubeEnv('sonar') {
          sh "sonar-scanner"
          }
      }
    }
  }
}
