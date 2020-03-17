pipeline {
    agent any
    stages {
	stage('Sonar Analysis') {
	steps {
              withSonarQubeEnv('sonarqube') {
                bat "npm install"
                bat "($env:CI = "true") -and (npm run coverage:prod -u)"
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