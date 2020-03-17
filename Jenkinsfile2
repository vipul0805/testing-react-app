pipeline {
    agent any
    stages {
	stage('Sonar Analysis') {
	steps {
              withSonarQubeEnv('sonarqube') {
                bat "npm install"
                bat "sonar-scanner"
              }
           }
        }
	stage("Quality Gate") {
            steps {
              timeout(time: 1, unit: 'HOURS') {
                waitForQualityGate abortPipeline: true
              }
            }
        }
    }
}
