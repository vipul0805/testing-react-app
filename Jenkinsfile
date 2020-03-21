pipeline {
  
  agent any
  tools {nodejs "node"}
    stages {
	  stage('Testing') {
	    steps {
        sh "npm install"
        sh "npm run coverage"
        sh "npm start"
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
    stage("Quality Gate") {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    // Parameter indicates whether to set pipeline UNSTABLE if Quality Gate fails
                    // true = set pipeline to UNSTABLE, false = dont
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    stage('Performance Tests') {
  steps {
    deleteDir()
    checkout scm
     bat label: 'Test running', script: '''npx lighthouse-ci http://localhost:3000/ --jsonReport --report=.'''
  }
  post {
    always {
      publishHTML (target: [
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: true,
        reportDir: '.',
        reportFiles: 'report.html',
        reportName: "Lighthouse"
      ])
    }
  }
}
  }
}
