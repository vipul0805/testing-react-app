pipeline {
  
  agent any
  tools {nodejs "node"}
    stages {
	  stage('Testing') {
	    steps {
        sh "npm install"
        sh "npm install forever -g"
        sh "npm install lighthouse -g"
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
    stage("Quality Gate") {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    // Parameter indicates whether to set pipeline UNSTABLE if Quality Gate fails
                    // true = set pipeline to UNSTABLE, false = dont
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    stage('Build Docker Image'){
      steps{
      sh 'docker build -t react-test --no-cache . '
      }
    }

  /*  stage('Performance Tests') {
    steps {
     sh "forever start -c 'npm start' ./"
     sh "npm run lighthouse http://172.17.0.2:3000"
     //sh label: 'Test running', script: '''npx lighthouse-ci http://172.17.0.2:3000/ --jsonReport --report=.'''
     sh "forever stop 0" 
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
}*/
      
  }
}
