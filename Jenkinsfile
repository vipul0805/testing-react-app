pipeline {
  
  agent any
  tools {nodejs "node"}
    stages {
	  stage('Testing and Coverage') {
	    steps {
        sh "npm install"
        //sh "npm run build"
        sh "npm install forever -g"
        sh "npm install lighthouse -g"
        sh "npm run coverage"
          }
        }

      stage("Sonar Analysis"){
        steps{
          script {
                  // sonarqube is name of sonarscanner you specified in jenkins tool configuration.
                  scannerhome = tool 'sonarqube';
              }
          withSonarQubeEnv('sonar') { 
            // In withSonarQubeEnv(<name of sonarserver set up in jenkins config>)
            sh "${scannerhome}/bin/sonar-scanner"
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

  //   stage('Performance Tests') {
  //   steps {
  //    sh "forever start -c 'npm start' ./"
     
  //    // 172.17.0.3:3000=<ip-of-jenkins-container>:<port>
  //    sh "npm run lighthouse http://172.17.0.2:3000"
     
  //    //sh label: 'Test running', script: '''npx lighthouse-ci http://172.17.0.3:3000/ --jsonReport --report=.'''
  //    sh "forever stop 0" 
  //   }
  //   post {
  //     always {
  //       publishHTML (target: [
  //         allowMissing: false,
  //         alwaysLinkToLastBuild: false,
  //         keepAll: true,
  //         reportDir: '.',
  //         reportFiles: 'report.html',
  //         reportName: "Lighthouse"
  //      ])
  //     }
  //  }
  // }
  }
}




    //     stage('Upload to S3'){
    //     steps{
    //         withAWS(region:'us-east-1',credentials:'awsCreds')
    //         {
    //             s3Upload(bucket:'testing-react-app1', includePathPattern:'**/*', workingDir:'build');
    //         }
    //     }
    // }
          

   
   
    // stage('Build Docker Image'){
    //   steps{
    //   sh 'docker build -t 172.31.36.199:5000/react-app:latest --no-cache . '
    //   }
    // }
    // stage("push Image to Registery"){
    //   steps{
    //     sh '''docker push 172.31.36.199:5000/react-app:latest
    //            docker rmi 172.31.36.199:5000/react-app:latest
    //         '''
    //   }
    // }